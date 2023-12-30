import { Row, Col } from 'antd';

import './App.module.scss';
import { PriceFilter, TransferFilter } from './filters';
import Logo from './logo/Logo';

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
        </Col>
      </Row>
    </>
  );
}

export default App;
