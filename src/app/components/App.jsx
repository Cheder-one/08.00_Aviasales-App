import { Row, Col } from 'antd';

import withTicketList from '../hoc/withTicketList';

import _ from './App.module.scss';
import Logo from './logo/Logo';
import ShowMore from './showMore/ShowMore';
import TicketCard from './ticketCard/TicketCard';
import { TypeFilter, TransferFilter } from './filters';

const data = Array(10).fill(0);

function App() {
  const TicketList = withTicketList(TicketCard);

  return (
    <>
      <Logo />
      <Row className={_.main_row} justify="center" gutter={20}>
        <Col>
          <TransferFilter />
        </Col>
        <Col>
          <TypeFilter />
          <TicketList data={data} />
          <ShowMore text="Показать еще 5 билетов!" />
        </Col>
      </Row>
    </>
  );
}

export default App;
