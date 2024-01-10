import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { bindActionCreators as bindActions } from 'redux';

import { typeActions, typeSelectors } from '@/reducers/filters/type';
import { ticketActions, ticketSelectors } from '@/reducers/tickets';

import ShowMore from '../../showMore/ShowMore';
import _ from '../ticketCard/TicketCard.module.scss';

const withTicketList = (Component) => {
  function TicketList({
    tickets,
    chunkNum,
    typesFilter,
    ticketsSortedPrice,
    ticketsSortedDuration,
    ticketsSortedOptimal,
  }) {
    const [chunkCount, setChunkCount] = useState(chunkNum);
    const [filteredTickets, setFilteredTickets] = useState([]);

    useEffect(() => {
      const filterTickets = () => {
        switch (typesFilter) {
          case 'cheap':
            return ticketsSortedPrice;
          case 'fast':
            return ticketsSortedDuration;
          default:
            return ticketsSortedOptimal;
        }
      };
      setFilteredTickets(filterTickets);
    }, [tickets, typesFilter]);

    const handleShowMore = () => {
      setChunkCount((prev) => prev + chunkNum);
    };

    return (
      <div className={_.ticket_list}>
        {filteredTickets.slice(0, chunkCount).map((item) => (
          <Component key={item.id} ticket={item} />
        ))}
        {chunkCount < tickets.length && (
          <ShowMore
            className={_.show_more}
            text={`Показать еще ${chunkNum} билетов!`}
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

  const mapState = (state) => ({
    typesFilter: typeSelectors.getType(state),
    tickets: ticketSelectors.getTickets(state),
    ticketsSortedPrice: ticketSelectors.getTicketsByPrice(state),
    ticketsSortedDuration: ticketSelectors.getTicketsByDuration(state),
    ticketsSortedOptimal: ticketSelectors.getTicketsByOptimal(state),
  });

  const mapDispatch = (dispatch) => {
    const types = bindActions(typeActions, dispatch);
    const tickets = bindActions(ticketActions, dispatch);

    return { ...tickets, ...types };
  };

  const ConnectedTicketList = connect(mapState, mapDispatch)(TicketList);
  return ConnectedTicketList;
};

export default withTicketList;
