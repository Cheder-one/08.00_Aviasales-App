import { Radio } from 'antd';

import _ from './PriceFilter.module.scss';

function PriceFilter() {
  return (
    <Radio.Group
      className={_.price_filter}
      buttonStyle="solid"
      defaultValue="cheap"
    >
      <Radio.Button className={_.btn_label} value="cheap">
        Самый дешевый
      </Radio.Button>
      <Radio.Button className={_.btn_label} value="fast">
        Самый быстрый
      </Radio.Button>
      <Radio.Button className={_.btn_label} value="optimal">
        Оптимальный
      </Radio.Button>
    </Radio.Group>
  );
}

export default PriceFilter;
