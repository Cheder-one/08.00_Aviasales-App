import { Card } from 'antd';
import styled from '@emotion/styled';

const CardMod = styled(Card)`
  .ant-card {
    width: 100px;
  }
  .ant-card-body {
    width: inherit;
    height: 100px;
    padding: 0px;
    flex-shrink: 0;
  }
`;

export default CardMod;
