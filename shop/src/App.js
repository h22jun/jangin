import logo from './logo.svg';
import {Button, Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import Detail from './Detail.js';
import Menubar from './Menubar.js';
import Event from './Event.js';
import React from 'react';
import axios from 'axios';
import {Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom';
import Cart from './Cart.js';

function App() {
  let [shoes, setShoes] = useState(data)
  let [더보기count, setCount] = useState(2)

  return (
    <>
    <Routes>
      <Route path="/" element={<>
        <Menubar/>
        <div className='main-bg'></div>
        <Row>
        <Card shoes={shoes} setShoes={setShoes} 더보기count={더보기count} setCount={setCount}></Card>
        </Row>
      </>}/>

      <Route path="/detail/:id" element={<>
        <Menubar/>
  <Detail shoes={shoes}/>
      </>}/>
        <Route path='/event' element={<><Menubar/><Event/></>}>
          <Route path='one' element={<div>
            <p>첫 주문시 양배추즙 서비스</p>
          </div>}/>
          <Route path='two' element={<div>
            <p>생일기념 쿠폰 받기</p>
          </div>}/>

        </Route>
        <Route path='/cart' element={<Cart/>}>

        </Route>
 </Routes>
            


</>

)}


function Card(props){
  return (
    <>
    
    <React.Fragment >
      {props.shoes.map((a, i) => (
        <Col sm={4} key={a.id}>
          <Link to={`/detail/${a.id}`}>
          <img src={`https://codingapple1.github.io/shop/shoes${a.id+1}.jpg`} width="80%"/>
          <h4>{a.title}</h4>
          <p>{a.price}</p>
          <p>{a.content}</p>
          </Link>
          </Col>
      ))}
      
      </React.Fragment>

      {
  props.더보기count <= 3 && (
    <button onClick={() => {
      //로딩중~
      axios.get(`https://codingapple1.github.io/shop/data${props.더보기count}.json`).then((결과) => {
        console.log(결과.data);
        props.setShoes(currentData => [...currentData, ...결과.data]);
        props.setCount((a) => a + 1);
        console.log(props.더보기count);
        //로딩중~ 숨기기
      }).catch(() => {
        //로딩중~ 숨기기
        console.log('실패함 ㅅㄱ');
      });
    }}>
      더보기
    </button>
  )
}

    </>
  );
}





export default App;
