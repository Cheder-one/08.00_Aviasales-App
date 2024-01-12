import { Row, Col, Skeleton } from 'antd';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 20px 20px 0 20px;
`;

function TicketSkeleton() {
  return (
    <Wrapper>
      <Row align="middle" justify="space-between">
        <Col>
          <Skeleton.Button />
        </Col>
        <Col>
          <Skeleton.Input />
        </Col>
      </Row>
      <Skeleton active />
    </Wrapper>
  );
}

export default TicketSkeleton;
