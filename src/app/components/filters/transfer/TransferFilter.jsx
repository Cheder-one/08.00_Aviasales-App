import { Checkbox } from 'antd';

import {
  ModifiedCard,
  ModifiedCheckbox,
} from '../../../modules/index';

import c from './TransferFilter.module.scss';

// const ModifiedCard = styled(Card)`
//   .ant-card {
//     width: 232px;
//   }
//   .ant-card-body {
//     width: inherit;
//     height: 252px;
//     padding: 20px;
//     flex-shrink: 0;
//   }
// `;

// const ModifiedCheckbox = styled(Checkbox)`
//   .ant-checkbox {
//     border-color: #2196f3;
//   }

//   .ant-checkbox-inner {
//     background-color: #fff;
//     border-color: #9abbce;

//     &:after {
//       border-color: #2196f3;
//     }
//   }

//   :where(
//       .css-dev-only-do-not-override-ujrly5
//     ).ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
//     .ant-checkbox-checked:not(.ant-checkbox-disabled)
//     .ant-checkbox-inner {
//     background-color: white;
//     border: 1px solid #2196f3;
//     background-clip: border-box;
//   }
// `;

function TransferFilter() {
  const handleCheckboxChange = (value) => {
    console.log(value);
  };

  return (
    <ModifiedCard className={c.transfer_filter}>
      <h3 className={c.title}>Количество пересадок</h3>

      <Checkbox.Group
        className={c.checkbox_group}
        onChange={handleCheckboxChange}
      >
        <ModifiedCheckbox className={c.checkbox} value="all">
          Все
        </ModifiedCheckbox>
        <ModifiedCheckbox className={c.checkbox} value="none">
          Без пересадок
        </ModifiedCheckbox>
        <ModifiedCheckbox className={c.checkbox} value="1">
          1 пересадка
        </ModifiedCheckbox>
        <ModifiedCheckbox className={c.checkbox} value="2">
          2 пересадки
        </ModifiedCheckbox>
        <ModifiedCheckbox className={c.checkbox} value="3">
          3 пересадки
        </ModifiedCheckbox>
      </Checkbox.Group>
    </ModifiedCard>
  );
}

export default TransferFilter;
