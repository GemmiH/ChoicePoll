import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col, Button } from 'antd';
import {SmileOutlined} from '@ant-design/icons';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] =  useState([]);
  const [question, setQuestion] =  useState(1);

  useEffect(() => {
    const getRecords = async () => {
        axios.get("https://industrious-protective-hawk.glitch.me/questions/" + question)
        .then(response => {
            console.log(response.data)
            setList(response.data);
        })
        .catch(error => console.log('error', error));
    };
    getRecords();
  }, []);

  const setRecords = async (c1, c2) => {
    axios.put("https://industrious-protective-hawk.glitch.me/questions/" + question, 
    {
      question: list.question,
      choice1: list.choice1,
      choice1_count: list.choice1_count+c1,
      choice2: list.choice2,
      choice2_count: list.choice2_count+c2,
      id: list.id
    }
    )
    .then(response => {
        console.log(response.data)
        setList(response.data);
    })
    .catch(error => console.log('error', error));
};

  return (
    <div className="App">
      <Row>
        <Col span={8} 
          style={{
            fontSize: "20px",
            paddingLeft: "10px",
            paddingTop: "10px",
            paddingBottom: "9px"          
          }}
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
      }}
      >Choice Poll</Col>
    </Row>
    <Row style={{padding: "20px"}}>
      <Col span={24}
        style={{backgroundColor: "#6CC6F5",
          color: "#pOff00",
          fontsize: "65px" ,
          fontWeight: "800",
          textAlign: "left", rightalign: "leftborder(2.05)",
          borderRadius: "10px",
        }}
      >
        <Row style={{padding: "40px"}}></Row>
        <Row 
          style={{
            backgroundColor: "#fff",
            paddingInline: "25px",
            paddingBlock: "20px",
            fontSize: "30px",
          }}
        >
          {list.question}
        </Row>
        <Row style={{paddingBlock: "50px", 
          justifyContent: "center",
          
        }}>
          <Button style={{height: "50px"}} onClick={() => setRecords(1, 0)}><h1>
            {list.choice1_count + " " + list.choice1}
          </h1></Button>
          <Button style={{height: "50px"}} onClick={() => setRecords(0, 1)}><h1>
            {list.choice2_count + " " + list.choice2}
          </h1></Button>
        </Row>
      </Col>
    </Row>

    </div>
  );
}

export default App;
