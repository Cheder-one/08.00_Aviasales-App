import { Row, Col, Spin, Flex } from 'antd';
import { bindActionCreators as combine } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import withTicketList from '../hoc/withTicketList';
import {
  ticketActions,
  ticketSelectors,
} from '../store/reducers/tickets';

import _ from './App.module.scss';
import Logo from './logo/Logo';
import ShowMore from './showMore/ShowMore';
import TicketCard from './ticketCard/TicketCard';
import { TypeFilter, TransferFilter } from './filters';

const { getTickets, getTicketsLoadingStatus } = ticketSelectors;

function App() {
  const tickets = useSelector(getTickets());
  const isLoading = useSelector(getTicketsLoadingStatus());
  const dispatch = useDispatch();

  const { tasksLoaded } = combine(ticketActions, dispatch);

  useEffect(() => {
    tasksLoaded();
  }, []);

  const TicketList = withTicketList(TicketCard);

  return !isLoading ? (
    <>
      <Logo />
      <Row className={_.main_row} justify="center" gutter={20}>
        <Col>
          <TransferFilter />
        </Col>
        <Col>
          <TypeFilter />
          <TicketList tickets={tickets} />
          <ShowMore text="Показать еще 5 билетов!" />
        </Col>
      </Row>
    </>
  ) : (
    <Flex justify="center" align="center" style={{ height: '100vh' }}>
      <Spin size="large" />
    </Flex>
  );
}

export default App;
