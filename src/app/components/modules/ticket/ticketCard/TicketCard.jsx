import { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';

import { formatPrice, generateId } from '@/utils';

import CarrierLogo from '../CarrierLogo';
import { TicketSkeleton, Wrapper } from '../../../ui';

import _ from './TicketCard.module.scss';
import TicketSegment from './ticketSegment/TicketSegment';

function TicketCard({ ticket }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <Card className={_.ticket}>
      {isLoading && <TicketSkeleton />}
      <Wrapper isHidden={isLoading}>
        <Row className={_.row_title} align="middle" justify="space-between">
          <Col className={_.price}>{formatPrice(ticket.price, 'Р')}</Col>
          <Col>
            <CarrierLogo carrier={ticket.carrier} onLoad={handleImageLoaded} />
          </Col>
        </Row>

        {ticket.segments.map((segment) => (
          <TicketSegment key={generateId()} segment={segment} />
        ))}
      </Wrapper>
    </Card>
  );
}

TicketCard.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        stops: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default TicketCard;
