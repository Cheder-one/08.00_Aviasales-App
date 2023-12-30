import { Checkbox, Card } from 'antd';
import styled from '@emotion/styled';

import c from './TransferFilter.module.scss';

const TransfersCard = styled(Card)`
  .ant-card-body {
    width: 232px;
    height: 252px;
    padding: 20px;
    flex-shrink: 0;
  }
`;

function TransferFilter() {
  const handleCheckboxChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <TransfersCard className={c.transfer_filter}>
        <h3 className={c.title}>Количество пересадок</h3>
        <Checkbox.Group
          className={c.checkbox_group}
          onChange={handleCheckboxChange}
        >
          <Checkbox className={c.checkbox} value="all">
            Все
          </Checkbox>
          <Checkbox className={c.checkbox} value="none">
            Без пересадок
          </Checkbox>
          <Checkbox className={c.checkbox} value="1">
            1 пересадка
          </Checkbox>
          <Checkbox className={c.checkbox} value="2">
            2 пересадки
          </Checkbox>
          <Checkbox className={c.checkbox} value="3">
            3 пересадки
          </Checkbox>
        </Checkbox.Group>
      </TransfersCard>
    </div>
  );
}

export default TransferFilter;
