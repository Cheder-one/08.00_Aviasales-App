/* eslint-disable consistent-return */
import { Checkbox, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators as combine } from 'redux';
import { useEffect, useRef } from 'react';
import { isEqual, last, without } from 'lodash';

import { CheckboxMod } from '../../../modules/index';

import _ from './TransferFilter.module.scss';
import checkboxMap, { getAllIds } from './utils/checkboxMap';

import {
  transferActions,
  transferSelectors,
  // eslint-disable-next-line
} from '@/reducers/filters/transfers';

const { getTransfers } = transferSelectors;

function TransferFilter() {
  const transfers = useSelector(getTransfers());
  const dispatch = useDispatch();
  const prevTransfers = useRef();

  const { checkboxChanged } = combine(transferActions, dispatch);

  useEffect(() => {
    prevTransfers.current = transfers;
  }, [transfers]);

  const handleCheckboxChange = (ids) => {
    const { current: prevFtrs } = prevTransfers;

    const isAllExist = ids.includes('all');
    const isPrevAllExist = prevFtrs.includes('all');
    const isCurrClick = (id) => isEqual(last(ids), id);

    const diffLen = checkboxMap.length - 1 === ids.length;
    const isManualAllSelected = diffLen && !isAllExist;
    const isManualAllRuined = diffLen && isAllExist;

    if (isCurrClick('all')) {
      checkboxChanged(getAllIds());
    } else if (isPrevAllExist && !isAllExist) {
      checkboxChanged([]);
    } else if (isManualAllSelected) {
      checkboxChanged(getAllIds());
    } else if (isManualAllRuined) {
      checkboxChanged(without(ids, 'all'));
    } else {
      checkboxChanged(ids);
    }

    // if (isTransfersSelected) {
    //   if (isPrevAllExist && !isAllExist) {
    //     checkboxChanged([]);
    //   } else if (isManualAllSelected) {
    //     checkboxChanged(getAllIds());
    //   } else if (isManualAllRuined) {
    //     checkboxChanged(without(ids, 'all'));
    //   } else {
    //     checkboxChanged(ids);
    //   }
    // } else if (isAllExist) {
    //   checkboxChanged(getAllIds());
    // } else if (isNoneExist) {
    //   checkboxChanged(ids);
    // }
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
