import { connect } from 'react-redux';
import { useState } from 'react';
import { bindActionCreators as bindActions } from 'redux';

import { typeActions, typeSelectors } from '@/reducers/filters/type';
import { ticketActions, ticketSelectors } from '@/reducers/tickets';

import ShowMore from '../../showMore/ShowMore';
import _ from '../ticketCard/TicketCard.module.scss';
import getSortedTickets from '../helpers/getSortedTickets';

import { TicketListPropTypes } from './TicketList.propTypes';

const withTicketList = (Component) => {
  function TicketList({ tickets, chunkNum, typesFilter }) {
    const [chunkCount, setChunkCount] = useState(chunkNum);

    const handleShowMore = () => {
      setChunkCount((prev) => prev + chunkNum);
    };

    const sortedTickets = getSortedTickets(tickets, typesFilter);

    return (
      <div className={_.ticket_list}>
        {sortedTickets.slice(0, chunkCount).map((item) => (
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
    chunkNum: 50,
  };

  TicketList.propTypes = TicketListPropTypes;

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
