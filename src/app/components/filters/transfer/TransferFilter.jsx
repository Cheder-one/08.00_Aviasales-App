import { Checkbox } from 'antd';
import styled from '@emotion/styled';

import { CardMod, CheckboxMod } from '../../../modules/index';

import _ from './TransferFilter.module.scss';

const TransfersCardMod = styled(CardMod)`
  .ant-card {
    width: 232px;
  }
  .ant-card-body {
    padding-top: 20px;
    height: 252px;
  }
`;

function TransferFilter() {
  const handleCheckboxChange = (value) => {
    console.log(value);
  };

  return (
    <TransfersCardMod className={_.transfer_filter}>
      <h3 className={_.title}>Количество пересадок</h3>

      <Checkbox.Group
        className={_.checkbox_group}
        onChange={handleCheckboxChange}
      >
        <CheckboxMod className={_.checkbox} value="all">
          Все
        </CheckboxMod>
        <CheckboxMod className={_.checkbox} value="none">
          Без пересадок
        </CheckboxMod>
        <CheckboxMod className={_.checkbox} value="1">
          1 пересадка
        </CheckboxMod>
        <CheckboxMod className={_.checkbox} value="2">
          2 пересадки
        </CheckboxMod>
        <CheckboxMod className={_.checkbox} value="3">
          3 пересадки
        </CheckboxMod>
      </Checkbox.Group>
    </TransfersCardMod>
  );
}

export default TransferFilter;
