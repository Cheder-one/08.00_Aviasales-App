import { Row, Col, Card } from 'antd';

import companyLogoSrc from '../../assets/companyLogo.svg';
import { formatNum, generateId } from '../../utils';

import _ from './TicketCard.module.scss';

function TicketCard({ ticket }) {
  console.log(ticket);

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}м`;
  }

  const price = formatNum(ticket.price, 'Р');

  return (
    <Card className={_.ticket}>
      <Row
        className={_.row_title}
        justify="space-between"
        align="middle"
      >
        <Col className={_.price}>{price}</Col>
        <Col>
          <img src={companyLogoSrc} alt="companyLogo" />
        </Col>
      </Row>

      {ticket.segments.map((segment) => (
        <Row className={_.row_table} key={generateId()}>
          <Col span={8}>
            <Row className={_.header}>
              {segment.origin} – {segment.destination}
            </Row>
            <Row className={_.body}>{segment.date}</Row>
          </Col>
          <Col span={8}>
            <Row className={_.header}>В пути</Row>
            <Row className={_.body}>
              {formatDuration(segment.duration)}
            </Row>
          </Col>
          <Col span={8}>
            <Row className={_.header}>
              {segment.stops.length} пересадка
            </Row>
            <Row className={_.body}>{segment.stops.join(', ')}</Row>
          </Col>
        </Row>
      ))}
    </Card>
  );
}

export default TicketCard;
