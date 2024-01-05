/* eslint-disable consistent-return */
import { Checkbox, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators as combine } from 'redux';
import { useEffect, useRef } from 'react';
import { last, without } from 'lodash';

import { CheckboxMod } from '../../../modules/index';

import _ from './TransferFilter.module.scss';
import checkboxMap, { getMapWOutNone } from './checkboxMap';

// eslint-disable-next-line
import { actions, selectors } from '@/reducers/filters/transfers';

const { getTransfers } = selectors;

function TransferFilter() {
  const transfers = useSelector(getTransfers());
  const dispatch = useDispatch();
  const prevTransfers = useRef();

  const { checkboxChanged } = combine(actions, dispatch);

  useEffect(() => {
    prevTransfers.current = transfers;
  }, [transfers]);

  const handleCheckboxChange = (ids) => {
    const lastFtr = last(ids);
    const { current: prevFtrs } = prevTransfers;

    const isLastFtr = (f) => lastFtr === f;
    const isAllExist = ids.includes('all');
    const isNoneExist = ids.includes('none');
    const isTransfSelected = !isLastFtr('none') && !isLastFtr('all');
    const isLastTransfRemoved = prevFtrs.length === 2 && prevFtrs.includes('all'); // prettier-ignore

    if (isTransfSelected) {
      return isNoneExist
        ? checkboxChanged(without(ids, 'none'))
        : checkboxChanged(ids);
    }
    if (isLastTransfRemoved) {
      return checkboxChanged([]);
    }
    if (isAllExist && !isLastFtr('none')) {
      return checkboxChanged(getMapWOutNone());
    }
    if (isNoneExist && !isLastFtr('all')) {
      checkboxChanged(['none']);
    }
  };

  return (
    <Card className={_.transfer_filter}>
      <h3 className={_.title}>Количество пересадок</h3>

      <Checkbox.Group
        className={_.checkbox_group}
        onChange={handleCheckboxChange}
        value={transfers}
      >
        {checkboxMap.map((item) => (
          <CheckboxMod
            key={item.id}
            value={item.id}
            className={_.checkbox}
          >
            {item.value}
          </CheckboxMod>
        ))}
      </Checkbox.Group>
    </Card>
  );
}

export default TransferFilter;
