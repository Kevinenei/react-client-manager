import React, { Component } from 'react';
import {Switch,Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import AgregarClientes from './components/AgregarClientes';
import Datoscliente from './components/Datoscliente';
import E404 from './components/E404';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/clientes/" component={AgregarClientes}/>
        <Route path="/clientes/:id" component={AgregarClientes}/>
        <Route path="/cliente/:dni" component={Datoscliente}/>
        <Route component={E404} />
        </Switch>

      </div>
    );
  }
}

export default App;
