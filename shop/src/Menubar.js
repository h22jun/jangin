import {Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';

import {useNavigate} from 'react-router-dom';


function Menubar(){

  let navigate = useNavigate();
return(

<Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href='/'>미르존</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={()=> {navigate('/event')}}>이벤트</Nav.Link>
          <Nav.Link onClick={()=> {navigate('/detail')}}>공지사항</Nav.Link>
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
)
}

export default Menubar;