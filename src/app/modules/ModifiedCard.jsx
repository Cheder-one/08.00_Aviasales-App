import { Card } from 'antd';
import styled from '@emotion/styled';

const ModifiedCard = styled(Card)`
  .ant-card {
    width: 232px;
  }
  .ant-card-body {
    width: inherit;
    height: 252px;
    padding: 20px;
    flex-shrink: 0;
  }
`;

export default ModifiedCard;
