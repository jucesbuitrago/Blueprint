import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  DropdownButton,
  Dropdown,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    cookies.remove('_s');
    window.location.reload();
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="primary" variant="dark">
        <Container>
          {/* Logo
            <img
              id="navbar-img"
              src={
                'https://www.misiontic2022.gov.co/746/channels-642_misiontic_logo.png'
              }
            />
              */}
          <Navbar.Brand href="/" id="navbar-in">
            Misión Tic
            <span id="navbar-sub-brand"> 2022</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>*/}
            </Nav>

            <DropdownButton title="Usuario">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>#USUARIO#</Row>
              </Dropdown.Header>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/login">Iniciar Sesion</Dropdown.Item>
              <Dropdown.Item href="/empleados">Empleados</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.logout()}>
                Cerrar sesión
              </Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
