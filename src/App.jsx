import { useEffect } from 'react';
import { Row, Col, FloatButton } from 'antd';
import { bindActionCreators as combine } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { ticketActions, ticketSelectors } from '@/reducers/tickets';
import { searchActions, searchSelectors } from '@/reducers/searchId';

import { Loader, Logo } from './app/ui';
import { useFirstRender } from './app/hooks';
import _ from './App.module.scss';
import { TypeFilter, TransferFilter } from './app/components/filters';
import { TicketCard, withTicketList } from './app/components/ticket';

const { getTickets, getTicketsLoadingStatus } = ticketSelectors;

const { getSearchId } = searchSelectors;

function App() {
  const dispatch = useDispatch();
  const isFirstRender = useFirstRender();
  const tickets = useSelector(getTickets());
  const searchId = useSelector(getSearchId());
  const isLoading = useSelector(getTicketsLoadingStatus());

  const { ticketsChunkLoaded } = combine(ticketActions, dispatch);
  const { searchIdWasSet } = combine(searchActions, dispatch);

  useEffect(() => {
    searchIdWasSet();
  }, []);

  useEffect(() => {
    if (isFirstRender) return;
    ticketsChunkLoaded();
  }, [searchId]);

  const TicketList = withTicketList(TicketCard);

  // TODO Реализовать фильтрацию билетов
  // TODO Реализовать "Рейсов, подходящих под заданные фильтры, не найдено"
  // TODO Реализовать запись и отображение ошибки при неудачной загрузке
  // TODO ?Загрузить 10к и сделать лоадер.

  return !isLoading ? (
    <>
      <Logo />
      <Row className={_.main_row} justify="center" gutter={20}>
        <Col>
          <TransferFilter />
        </Col>
        <Col>
          <TypeFilter />
          <TicketList tickets={tickets} chunkNum={5} />
        </Col>
      </Row>
      {/* <ConnectionStatus /> */}
      <FloatButton.BackTop />
    </>
  ) : (
    <Loader />
  );
}

export default App;
