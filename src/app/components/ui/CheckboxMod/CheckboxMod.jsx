/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox, ConfigProvider } from 'antd';

import _ from './CheckboxMod.module.scss';

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
      <div className={_.checkbox_wrapper}>
        <Checkbox {...props} />
      </div>
    </ConfigProvider>
  );
}

export default CheckboxMod;
