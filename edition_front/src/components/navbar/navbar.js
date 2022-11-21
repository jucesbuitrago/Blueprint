import React from "react";
import { Container, Nav, Navbar, DropdownButton,Dropdown, Row} from "react-bootstrap";
import './navbar.css'
import { GiUnicorn } from 'react-icons/gi';


export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar  fixed="top" id="navbar" bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Empleados.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Catalogo</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario">              
              <Dropdown.Header>
                <Row>
                <h1><GiUnicorn /></h1>
                </Row>
                <Row>
                   #USUARIO# 
                </Row>              
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
