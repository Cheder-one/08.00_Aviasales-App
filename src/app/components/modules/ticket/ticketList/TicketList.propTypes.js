import PropTypes from 'prop-types';

export const ticketPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
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
  })
);

export const TicketListPropTypes = {
  tickets: ticketPropTypes.isRequired,
  chunkNum: PropTypes.number,
  typesFilter: PropTypes.string.isRequired,
};
