import axios from "axios";
import React from "react";
import { Container, Form, Button, Row, Col} from "react-bootstrap";
import app from "../../app.json";
import './login.css'
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calcularExpirarSesion } from "../helper/helper";
import Loading from '../loading/loading'

const {APIHOST} = app;
const cookies = new Cookies()


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, 
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion(){
    this.setState({loading: true});
    axios.post(`${APIHOST}/usuarios/login`,{
      usuario: this.state.usuario,
      pass: this.state.pass,
    })
    .then((response) => {
      if (isNull(response.data.token)){
        alert("datos invalidos");
      }
      else{
        cookies.set('_s', response.data.token,
        {
          path: '/',
          expires: calcularExpirarSesion(),
        });
        this.props.history.push(window.open('/empleados'));
      } 
      this.setState({loading: false});
      
    })
    .catch((error) => {
      console.log(error);
      this.setState({loading: false});
    })
    }

  
    render() {
    return (
      <Container id="login-container">
        <Loading show={this.state.loading} />
        <Row>
          <Col sm="12" xs="12"
            md={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            xl={{ span: 4, offset: 4 }}>
            <Row>
              <h2>Iniciar Sesion</h2>
            </Row>
          </Col>
        </Row>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-label">Usuario</Form.Label>
            <Form.Control
              onChange={(e) => this.setState({ usuario: e.target.value })}
              placeholder="Ingrese Usuario" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Contraseña</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => this.setState({ pass: e.target.value })}
              placeholder=" Ingrese contraseña" />
          </Form.Group>

          <Button variant="primary"
            onClick={() => {
              this.iniciarSesion();

            } }>
            Iniciar Sesion{" "}
          </Button>
        </Form>
      </Container>
        
    );
  }
}
