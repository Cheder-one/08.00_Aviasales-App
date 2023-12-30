import { Row, Col } from 'antd';

import './App.module.scss';
import withTicketList from '../hoc/withTicketList';

import Logo from './logo/Logo';
import { PriceFilter, TransferFilter } from './filters';
import TicketCard from './ticketCard/TicketCard';
import ShowMore from './showMore/ShowMore';

// TODO Реализовать мобильный адаптив

const data = Array(10).fill(0);

function App() {
  const TicketList = withTicketList(TicketCard);

  return (
    <>
      <Logo />
      <Row justify="center" gutter={20}>
        <Col>
          <TransferFilter />
        </Col>
        <Col>
          <PriceFilter />
          <TicketList data={data} />
          <ShowMore text="Показать еще 5 билетов!" />
        </Col>
      </Row>
    </>
  );
}

export default App;
