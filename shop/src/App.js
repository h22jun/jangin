import logo from './logo.svg';
import {Button, Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

let [shoes] = useState()

function App() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">미르존</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">전체상품</Nav.Link>
          <Nav.Link href="#link">공지사항</Nav.Link>
          <NavDropdown title="메뉴" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">man</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              woman
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">child</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              고객센터
            </NavDropdown.Item>
          </NavDropdown>  
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


<div className='main-bg'></div>
<Row>
        <Col sm>
          <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"/>
          <h4>상품명</h4>
          <p>상세설명</p>
        </Col>
        <Col sm>          
        <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"/>
          <h4>상품명</h4>
          <p>상세설명</p>
          </Col>
        <Col sm>         
         <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"/>
          <h4>상품명</h4>
          <p>상세설명</p>
          </Col>
</Row>


</>

)}

export default App;
