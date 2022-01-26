import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Formulario from '../components/Formulario';

import App from '../containers/App';

export default class AppRouter extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="*" element={<Navigate to ="/"/>}/>
            <Route path="/crearCuenta" element={<Formulario/>}/>
        </Routes>
        </BrowserRouter>
    ) 
  }
}
