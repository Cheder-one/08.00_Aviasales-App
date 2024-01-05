import { Checkbox, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators as combine } from 'redux';
import { useEffect, useRef } from 'react';

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
    const lastFilter = ids[ids.length - 1];
    const { current: prevFilters } = prevTransfers;

    const isLast = (filter) => lastFilter === filter;

    const isAll = ids.includes('all');
    const isNone = ids.includes('none');
    const isLastTransferRemoved = prevFilters.length === 2;
    const isTransferSelected = !isLast('none') && !isLast('all');

    if (isTransferSelected && isNone) {
      const wOutNone = ids.filter((f) => f !== 'none');
      checkboxChanged([...wOutNone]);
    } else if (isTransferSelected) {
      checkboxChanged(ids);
    } else if (isLastTransferRemoved) {
      checkboxChanged([]);
    } else if (isAll && !isLast('none')) {
      checkboxChanged([...getMapWOutNone()]);
    } else if (isNone && !isLast('all')) {
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
