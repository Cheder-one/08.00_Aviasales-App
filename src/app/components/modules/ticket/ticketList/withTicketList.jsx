import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators as bindActions } from 'redux';

import { transferSelectors } from '@/reducers/filters/transfers';
import { typeActions, typeSelectors } from '@/reducers/filters/type';
import { ticketActions, ticketSelectors } from '@/reducers/tickets/tickets';

import { NoMatching } from '../../../ui';
import ShowMore from '../../showMore/ShowMore';
import _ from '../ticketCard/TicketCard.module.scss';
import { getFilteredByTransfers, getSortedByType } from '../helpers';

import { TicketListPropTypes } from './TicketList.propTypes';

const withTicketList = (Ticket) => {
  function TicketList({ tickets, chunkNum, typesFilter, transferFilter }) {
    const [chunkCount, setChunkCount] = useState(chunkNum);

    const handleShowMore = () => {
      setChunkCount((prev) => prev + chunkNum);
    };

    const filteredTickets = getFilteredByTransfers(tickets, transferFilter);
    const sortedTickets = getSortedByType(filteredTickets, typesFilter);

    return (
      <div className={_.ticket_list}>
        {sortedTickets.length ? (
          sortedTickets
            .slice(0, chunkCount)
            .map((item) => <Ticket key={item.id} ticket={item} />)
        ) : (
          <NoMatching />
        )}
        {chunkCount < sortedTickets.length && (
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

  TicketList.propTypes = TicketListPropTypes;

  const mapState = (state) => ({
    tickets: ticketSelectors.getTickets(state),
    typesFilter: typeSelectors.getType(state),
    transferFilter: transferSelectors.getTransfers(state),
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
