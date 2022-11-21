//import logo from './logo.svg';
import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from 'react-bootstrap';
//import Login from './components/login/login';
import Menu from './components/navbar/navbar';
import AppRoutes from './components/router/router';
//import Inicio from './components/index/index'


// login --> Función para llamar los componentes
function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        {/* <Inicio /> */}
        <AppRoutes />
      </Container>
    </div>
  );
}

export default App;