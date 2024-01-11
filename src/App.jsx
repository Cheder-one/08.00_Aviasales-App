import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, FloatButton } from 'antd';
import { bindActionCreators as bindActions } from 'redux';

import { ticketActions, ticketSelectors } from '@/reducers/tickets';
import { searchActions, searchSelectors } from '@/reducers/searchId';

import _ from './App.module.scss';
import { Loader, Logo } from './app/ui';
import { TypeFilter, TransferFilter } from './app/components/filters';
import { TicketCard, withTicketList } from './app/components/ticket';

function App({ isChunkLoaded, searchIdSet, ticketsLoaded }) {
  useEffect(() => {
    const callback = () => {
      ticketsLoaded();
    };
    searchIdSet(callback);
  }, []);

  // TODO Реализовать фильтрацию трансферов
  // TODO Реализовать лоадер загрузки
  // TODO Реализовать "Рейсов, подходящих под заданные фильтры, не найдено"
  // TODO Реализовать Alert при отсутствии интернета
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
    '' && <Loader />
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
