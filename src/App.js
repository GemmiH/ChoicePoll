import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col } from 'antd';
import {SmileOutlined} from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={8} 
          style={{
            fontSize: "20px",
            paddingLeft: "10px",
            paddingTop: "10px",
            paddingBottom: "9px"          }}
        ><SmileOutlined /></Col>
        
        <Col span={16} 
         style={{
           fontSize: "17px",
           textAlign: "right",
           paddingRight: "10px",
           paddingTop: "13px"
         }}
        >Suggest poll</Col>
      </Row>
      <Row>
      <Col span={24} 
      style={{
        fontSize:"25px",
        paddingLeft: "10px",

      }
      }
      >Choice Poll</Col>
        
       
    </Row>
      <Row>
        <Col span={24}
          style={{backgroundColor: "#6CC6F5",
            color: "#pOff00",
            fontsize: "65px" ,
            fontFamily: "cursive",
            paddingLeft: "25px",
            fontWeight: "800",
            textAlign: "left", rightalign: "leftborder(2.05)",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
        Poll
      </Col>
    </Row>

    </div>
  );
}

export default App;
