import { Row, Col } from 'antd';
import styled from '@emotion/styled';

import { CardMod } from '../../modules/index';
import companyLogoSrc from '../../assets/companyLogo.svg';

import _ from './TicketCard.module.scss';

const TicketCardMod = styled(CardMod)`
  .ant-card {
    width: 502px;
  }
  .ant-card-body {
    height: 184px;
  }
`;

function TicketCard() {
  return (
    <TicketCardMod className={_.ticket}>
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
    </TicketCardMod>
  );
}

export default TicketCard;
