import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col } from 'antd';


function App() {
  return (
    <div className="App">
      <Row>
        <Col span={8}>1</Col>
        <Col span={16}>2</Col>
      </Row>
      <Row>
      <Col span={24}>3</Col>
      </Row>
      <Row>
        <Col span={24}>4</Col>
      </Row>
    </div>
  );
}

export default App;
