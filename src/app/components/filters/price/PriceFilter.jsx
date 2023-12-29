/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Radio } from 'antd';

const customRadioGroupStyles = css`
  background-color: #f0f0f0;
  padding: 10px;

  .ant-radio-button-wrapper {
    /* Стилизация кнопок */
  }

  .ant-radio-button-wrapper-checked {
    /* Стилизация выбранной кнопки */
  }

  .ant-radio-button-wrapper:hover {
    /* Стилизация при наведении на кнопку */
  }
`;

function PriceFilter() {
  return (
    <div>
      <Radio.Group
        css={customRadioGroupStyles}
        defaultValue="a"
        buttonStyle="solid"
      >
        <Radio.Button value="a">Самый дешевый</Radio.Button>
        <Radio.Button value="b">Самый быстрый</Radio.Button>
        <Radio.Button value="c">Оптимальный</Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default PriceFilter;
