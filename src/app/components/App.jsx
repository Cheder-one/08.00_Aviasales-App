import { Row, Col } from 'antd';

import './App.module.scss';
import Logo from './logo/Logo';
import { PriceFilter, TransferFilter } from './filters';
import TicketCard from './ticketCard/TicketCard';

// TODO Изменить стили checkbox
// TODO Реализовать мобильный адаптив

function App() {
  return (
    <>
      <Logo />
      <Row justify="center" gutter={20}>
        <Col>
          <TransferFilter />
        </Col>
        <Col>
          <PriceFilter />
          <TicketCard />
        </Col>
      </Row>
    </>
  );
}

export default App;
