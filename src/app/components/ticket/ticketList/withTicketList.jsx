import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import ShowMore from '../../showMore/ShowMore';
import _ from '../ticketCard/TicketCard.module.scss';

const withTicketList = (Component) => {
  function TicketList({ tickets, chunkNum }) {
    const [displayedTickets, setShownTickets] = useState([]);

    useEffect(() => {
      setShownTickets(tickets.slice(0, chunkNum));
    }, [tickets, chunkNum]);

    const handleShowMore = () => {
      const count = displayedTickets.length;
      const nextChunk = tickets.slice(count, count + chunkNum);
      setShownTickets((prev) => [...prev, ...nextChunk]);
    };

    const hasMoreTickets = displayedTickets.length < tickets.length;

    return (
      <div className={_.ticket_list}>
        {displayedTickets.map((item) => (
          <Component key={item.id} ticket={item} />
        ))}
        {hasMoreTickets && (
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
