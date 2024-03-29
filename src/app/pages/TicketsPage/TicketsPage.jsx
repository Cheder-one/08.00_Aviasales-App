import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, FloatButton } from 'antd';
import { bindActionCreators as bindActions } from 'redux';

import { searchSelectors, searchActions } from '@/reducers/searchId';
import { ticketActions, ticketSelectors } from '@/reducers/tickets/tickets';

import { Loader } from '../../components/ui';
import { TicketCard, withTicketList } from '../../components/modules/ticket';
import { TransferFilter, TypeFilter } from '../../components/modules/filters';

import _ from './TicketsPage.module.scss';
import TicketsPageHeader from './TicketsPageHeader';

function TicketsPage({ isDataReceiving, searchIdSet, ticketsLoaded }) {
  useEffect(() => {
    const callback = () => {
      ticketsLoaded();
    };
    searchIdSet(callback);
  }, []);

  const TicketList = withTicketList(TicketCard);

  return isDataReceiving ? (
    <>
      <TicketsPageHeader />
      <Row className={_.main_row} justify="center" gutter={20}>
        <Col>
          <TransferFilter />
        </Col>
        <Col className={_.tickets_col}>
          <TypeFilter />
          <TicketList />
        </Col>
      </Row>
      <FloatButton.BackTop />
    </>
  ) : (
    <Loader />
  );
}

TicketsPage.propTypes = {
  searchIdSet: PropTypes.func.isRequired,
  ticketsLoaded: PropTypes.func.isRequired,
};

TicketsPage.defaultProps = {};

const mapState = (state) => ({
  searchId: searchSelectors.getSearchId(state),
  isDataReceiving: ticketSelectors.getTicketsReceivingStatus(state),
});

const mapDispatch = (dispatch) => {
  const tickets = bindActions(ticketActions, dispatch);
  const search = bindActions(searchActions, dispatch);

  return { ...tickets, ...search };
};

const ConnectedTicketsPage = connect(mapState, mapDispatch)(TicketsPage);
export default ConnectedTicketsPage;
