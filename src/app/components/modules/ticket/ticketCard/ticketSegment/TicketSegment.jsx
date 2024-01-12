import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import { calcStartEndTrip } from '@/utils';

import _ from '../TicketCard.module.scss';
import formatStops from '../../helpers/formatStops';
import formatDuration from '../../helpers/formatDuration';

function TicketSegment({ segment }) {
  const { date, origin, duration, destination, stops } = segment;

  return (
    <Row className={_.row_table}>
      <Col span={8}>
        <Row className={_.header}>
          {origin} – {destination}
        </Row>
        <Row className={_.body}>{calcStartEndTrip(date, duration)}</Row>
      </Col>
      <Col span={8}>
        <Row className={_.header}>В пути</Row>
        <Row className={_.body}>{formatDuration(duration)}</Row>
      </Col>
      <Col span={8}>
        <Row className={_.header}>{formatStops(stops.length)}</Row>
        <Row className={_.body}>{stops.join(', ')}</Row>
      </Col>
    </Row>
  );
}

TicketSegment.propTypes = {
  segment: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    stops: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number.isRequired,
  }).isRequired,
};

export default TicketSegment;
