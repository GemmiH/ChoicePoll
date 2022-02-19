import logo from './logo.svg';
import './App.css';
//import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={8} />
        <Col span={16} />
      </Row>
      <Row>
       <Col span={24} />
      </Row>
      <Row>
        <Col span={24} />
      </Row>
    </div>
  );
}

export default App;
