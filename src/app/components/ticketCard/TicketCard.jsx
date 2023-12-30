import { Card, Row, Col } from 'antd';
import styled from '@emotion/styled';

import companyLogoSrc from '../../assets/companyLogo.svg';

import c from './TicketCard.module.scss';

const ModifiedCard = styled(Card)`
  .ant-card {
    width: 502px;
  }
  .ant-card-body {
    width: inherit;
    height: 184px;
    padding: 20px;
    flex-shrink: 0;
  }
`;

function TicketCard() {
  return (
    <ModifiedCard className={c.ticket}>
      <Row
        className={c.row_title}
        justify="space-between"
        align="middle"
      >
        <Col className={c.price}>13 400 Р</Col>
        <Col>
          <img src={companyLogoSrc} alt="companyLogo" />
        </Col>
      </Row>

      <Row className={c.row_table}>
        <Col span={8}>
          <Row className={c.header}>MOW – HKT</Row>
          <Row className={c.body}>10:45 – 08:00</Row>
        </Col>
        <Col span={8}>
          <Row className={c.header}>В пути</Row>
          <Row className={c.body}>21ч 15м</Row>
        </Col>
        <Col span={8}>
          <Row className={c.header}>2 пересадки</Row>
          <Row className={c.body}>HKG, JNB</Row>
        </Col>
      </Row>

      <Row className={c.row_table}>
        <Col span={8}>
          <Row className={c.header}>MOW – HKT</Row>
          <Row className={c.body}>11:20 – 00:50</Row>
        </Col>
        <Col span={8}>
          <Row className={c.header}>В пути</Row>
          <Row className={c.body}>13ч 30м</Row>
        </Col>
        <Col span={8}>
          <Row className={c.header}>1 пересадка</Row>
          <Row className={c.body}>HKG</Row>
        </Col>
      </Row>
    </ModifiedCard>
  );
}

export default TicketCard;
