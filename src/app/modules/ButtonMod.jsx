import { Button } from 'antd';
import styled from '@emotion/styled';

const ButtonMod = styled(Button)`
  :where(.css-dev-only-do-not-override-gzal6t).ant-btn-default:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: #4096ff;
    border-color: #4096ff;
  }
`;

export default ButtonMod;
