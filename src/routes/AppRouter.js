import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Home from '../components/Home';

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/crearCuenta" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
