import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, FloatButton } from 'antd';
import { bindActionCreators as bindActions } from 'redux';

import { searchSelectors, searchActions } from '@/reducers/searchId';
import { ticketSelectors, ticketActions } from '@/reducers/tickets';

import _ from './App.module.scss';
import { TicketCard, withTicketList } from './app/components/modules/ticket';
import { TransferFilter, TypeFilter } from './app/components/modules/filters';
import { Loader, Logo } from './app/components/ui';

function App({ isChunkLoaded, searchIdSet, ticketsLoaded }) {
  useEffect(() => {
    const callback = () => {
      ticketsLoaded();
    };
    searchIdSet(callback);
  }, []);

  // TODO Реализовать лоадер загрузки
  // TODO Заменить useSelector/Dispatch на connect

  const TicketList = withTicketList(TicketCard);

  return isChunkLoaded ? (
    <>
      <Logo />
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

const mapState = (state) => ({
  searchId: searchSelectors.getSearchId(state),
  isChunkLoaded: ticketSelectors.getTicketsChunkStatus(state),
});

const mapDispatch = (dispatch) => {
  const tickets = bindActions(ticketActions, dispatch);
  const search = bindActions(searchActions, dispatch);

  return { ...tickets, ...search };
};

const ConnectedApp = connect(mapState, mapDispatch)(App);
export default ConnectedApp;
