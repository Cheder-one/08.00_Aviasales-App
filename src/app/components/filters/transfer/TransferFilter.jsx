import { Checkbox, ConfigProvider } from 'antd';

import 'antd/dist/reset.css';

import { check } from './TransferFilter.module.scss';

function TransferFilter() {
  return <Checkbox className={check}>Checkbox</Checkbox>;
}

export default TransferFilter;
