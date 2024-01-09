import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { bindActionCreators as bindActions } from 'redux';

import { typeActions, typeSelectors } from '@/reducers/filters/type';
import { ticketActions, ticketSelectors } from '@/reducers/tickets';

import ShowMore from '../../showMore/ShowMore';
import _ from '../ticketCard/TicketCard.module.scss';
import { useFirstRender } from '../../../hooks';

const withTicketList = (Component) => {
  function TicketList({
    tickets,
    chunkNum,
    typesFilter,
    ticketsSortedPrice,
    ticketsSortedDuration,
    ticketsSortedOptimal,
  }) {
    const isFirstRender = useFirstRender();
    const [visibleTickets, setVisibleTickets] = useState([]);

    useEffect(() => {
      switch (typesFilter) {
        case 'cheap':
          ticketsSortedPrice();
          break;
        case 'fast':
          ticketsSortedDuration();
          break;
        case 'optimal':
          ticketsSortedOptimal();
          break;
        default:
      }
    }, [typesFilter]);

    useEffect(() => {
      if (isFirstRender) return;
      setVisibleTickets(tickets.slice(0, chunkNum));
    }, [tickets]);

    const handleShowMore = () => {
      const count = visibleTickets.length;
      const nextChunk = tickets.slice(count, count + chunkNum);
      setVisibleTickets((prev) => [...prev, ...nextChunk]);
    };

    const hasMoreTickets = visibleTickets.length < tickets.length;

    return (
      <div className={_.ticket_list}>
        {visibleTickets.map((item) => (
          <Component key={item.id} ticket={item} />
        ))}
        {hasMoreTickets && (
          <ShowMore
            className={_.show_more}
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

  const mapState = (state) => ({
    typesFilter: typeSelectors.getType(state),
    tickets: ticketSelectors.getTickets(state),
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
