import logo from './logo.svg';
import {Button, Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import Detail from './Detail.js';
import Menubar from './Menubar.js';
import Event from './Event.js';
import React from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function App() {
  let [shoes] = useState(data)

  return (
    <>
    <Routes>
      <Route path="/" element={<>
        <Menubar/>
        <div className='main-bg'></div>
        <Row>
        <Card shoes={shoes}></Card>
        </Row>
      </>}/>

      <Route path="/detail" element={<>
        <Menubar/>
  <Detail element={shoes={shoes}}/>
      </>}/>
        <Route path='/event' element={<><Menubar/><Event/></>}>
          <Route path='one' element={<div>
            <p>첫 주문시 양배추즙 서비스</p>
          </div>}/>
          <Route path='two' element={<div>
            <p>생일기념 쿠폰 받기</p>
          </div>}/>

        </Route>




    </Routes>



</>

)}


function Card(props){
  return (
    <React.Fragment >
      {props.shoes.map((a, i) => (
        <Col sm key={a.id}>
          <img src={`https://codingapple1.github.io/shop/shoes${a.id+1}.jpg`} width="80%"/>
          <h4>{a.title}</h4>
          <p>{a.price}</p>
          <p>{a.content}</p>
          </Col>
      ))}
      </React.Fragment>
    
  );
}





export default App;
