/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox, ConfigProvider } from 'antd';
import styled from '@emotion/styled';

const CheckboxStyled = styled(Checkbox)`
  .ant-checkbox {
    border-color: #2196f3;
  }

  .ant-checkbox-inner {
    background-color: #fff;
    border-color: #9abbce;

    &:after {
      border-color: #2196f3;
    }
  }

  :where(
      .css-dev-only-do-not-override-ujrly5
    ).ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: #fff;
    border: 1px solid #2196f3;
    background-clip: border-box;
  }
`;

function CheckboxMod(props) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            colorPrimary: '#2196F3',
            colorBorder: '#9ABBCE',
            borderRadiusSM: '2px',
            controlInteractiveSize: 20,
          },
        },
      }}
    >
      <CheckboxStyled {...props} />
    </ConfigProvider>
  );
}

export default CheckboxMod;
