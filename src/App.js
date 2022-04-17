import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col, Button } from 'antd';
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
            //fontFamily: "Comic Sans",
            //paddingLeft: "25px",
            fontWeight: "600",
            textAlign: "left", rightalign: "leftborder(2.05)",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          <Row style={{height: "70px"}}></Row>
          <Row style={{backgroundColor: "#ffffff",
            height: "70px",
            fontSize: "25px",
            paddingLeft: "20px", 
            paddingTop: "10px"
          }}>
            Hamburger or Pizza?
          </Row>
          <Row style={{height: "190px",
            paddingTop:"30px",
            justifyContent:"center",
          }}>
            <Button style={{height:"60px",borderRadius:"10px"}}><h1>🍔</h1></Button>
            <Button style={{height:"60px",borderRadius:"10px"}}><h1>🍕</h1></Button>
          </Row>
      </Col>



    </Row>

    </div>
  );
}

export default App;
