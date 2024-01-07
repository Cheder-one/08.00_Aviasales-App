import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import _ from '../ticketCard/TicketCard.module.scss';
import ShowMore from '../../showMore/ShowMore';

const withTicketList = (Component) => {
  function TicketList({ tickets, chunkNum }) {
    const [shownTickets, setShownTickets] = useState([]);

    useEffect(() => {
      setShownTickets(tickets.slice(0, chunkNum));
    }, [tickets, chunkNum]);

    const handleShowMore = () => {
      const count = shownTickets.length;
      const nextChunk = tickets.slice(count, count + chunkNum);
      setShownTickets((prev) => [...prev, ...nextChunk]);
    };

    return (
      <div className={_.ticket_list}>
        {shownTickets.map((item) => (
          <Component key={item.id} ticket={item} />
        ))}

        {shownTickets.length < tickets.length && (
          <ShowMore
            text="Показать еще 5 билетов!"
            onShowMore={handleShowMore}
          />
        )}
      </div>
    );
  }

  TicketList.defaultProps = {
    chunkNum: 5,
  };

  TicketList.propTypes = {
    tickets: PropTypes.arrayOf(
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
    ).isRequired,
    chunkNum: PropTypes.number,
  };

  return TicketList;
};

export default withTicketList;
