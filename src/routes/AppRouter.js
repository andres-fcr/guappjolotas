import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Guajolote from '../components/Guajolote';

const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Guajolote />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/crearCuenta" element={<Formulario />} />
    </Routes>
    </BrowserRouter>
    );
};

export default AppRouter;
