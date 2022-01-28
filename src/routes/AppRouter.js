import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Guajolote from '../components/Guajolote';
import Home from '../components/Home';
import Login from '../components/Login';

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/crearCuenta" element={<Formulario />} />
          <Route path="/productos" element={<Guajolote />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
