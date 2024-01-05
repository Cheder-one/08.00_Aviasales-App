import { Row, Col, Card } from 'antd';

import companyLogoSrc from '../../assets/companyLogo.svg';

import _ from './TicketCard.module.scss';

function TicketCard() {
  return (
    <Card className={_.ticket}>
      <Row
        className={_.row_title}
        justify="space-between"
        align="middle"
      >
        <Col className={_.price}>13 400 Р</Col>
        <Col>
          <img src={companyLogoSrc} alt="companyLogo" />
        </Col>
      </Row>

      <Row className={_.row_table}>
        <Col span={8}>
          <Row className={_.header}>MOW – HKT</Row>
          <Row className={_.body}>10:45 – 08:00</Row>
        </Col>
        <Col span={8}>
          <Row className={_.header}>В пути</Row>
          <Row className={_.body}>21ч 15м</Row>
        </Col>
        <Col span={8}>
          <Row className={_.header}>2 пересадки</Row>
          <Row className={_.body}>HKG, JNB</Row>
        </Col>
      </Row>

      <Row className={_.row_table}>
        <Col span={8}>
          <Row className={_.header}>MOW – HKT</Row>
          <Row className={_.body}>11:20 – 00:50</Row>
        </Col>
        <Col span={8}>
          <Row className={_.header}>В пути</Row>
          <Row className={_.body}>13ч 30м</Row>
        </Col>
        <Col span={8}>
          <Row className={_.header}>1 пересадка</Row>
          <Row className={_.body}>HKG</Row>
        </Col>
      </Row>
    </Card>
  );
}

export default TicketCard;
