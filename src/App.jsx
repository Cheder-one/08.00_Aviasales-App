import { useEffect } from 'react';
import { Row, Col, FloatButton } from 'antd';
import { bindActionCreators as bindActions } from 'redux';
import { connect } from 'react-redux';

import { ticketActions, ticketSelectors } from '@/reducers/tickets';
import { searchActions, searchSelectors } from '@/reducers/searchId';

import _ from './App.module.scss';
import { Loader, Logo } from './app/ui';
import { useFirstRender } from './app/hooks';
import { TypeFilter, TransferFilter } from './app/components/filters';
import { TicketCard, withTicketList } from './app/components/ticket';

const { getTicketsLoadingStatus } = ticketSelectors;
const { getSearchId } = searchSelectors;

function App({
  searchId,
  isChunkLoaded,
  searchIdSet,
  ticketsLoaded,
}) {
  const isFirstRender = useFirstRender();

  useEffect(() => {
    searchIdSet();
  }, []);

  useEffect(() => {
    if (isFirstRender) return;
    ticketsLoaded();
  }, [searchId]);

  // TODO Реализовать фильтрацию билетов
  // TODO Реализовать "Рейсов, подходящих под заданные фильтры, не найдено"
  // TODO Реализовать запись и отображение ошибки при неудачной загрузке
  // TODO ?Загрузить 10к и сделать лоадер.

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
  searchId: getSearchId(state),
  isChunkLoaded: getTicketsLoadingStatus(state),
});

const mapDispatch = (dispatch) => {
  const tickets = bindActions(ticketActions, dispatch);
  const search = bindActions(searchActions, dispatch);

  return { ...tickets, ...search };
};

const ConnectedApp = connect(mapState, mapDispatch)(App);
export default ConnectedApp;
