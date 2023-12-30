import { Radio } from 'antd';
import styled from '@emotion/styled';

import _ from './PriceFilter.module.scss';

const RadioBtnMod = styled(Radio.Button)`
  .ant-radio-button-wrapper:hover {
    color: red;
  }
`;

function PriceFilter() {
  return (
    <Radio.Group
      className={_.price_filter}
      buttonStyle="solid"
      defaultValue="cheap"
    >
      <RadioBtnMod className={_.btn_label} value="cheap">
        Самый дешевый
      </RadioBtnMod>
      <RadioBtnMod className={_.btn_label} value="fast">
        Самый быстрый
      </RadioBtnMod>
      <RadioBtnMod className={_.btn_label} value="optimal">
        Оптимальный
      </RadioBtnMod>
    </Radio.Group>
  );
}

export default PriceFilter;
