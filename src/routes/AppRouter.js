
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Detail from '../components/Detail';
import Formulario from '../components/Formulario';
import Guajolote from '../components/Productos';
import Home from '../components/Home';
import Login from '../components/Login';
import Productos from '../components/Productos';
import getData from '../helpers/getData';

const AppRouter = () => {

  const [tarea, setTarea] = useState([]);

  const traerDatos = async () => {
    const datos = await getData();
    setTarea(datos);
  };

  useEffect(() => {
    traerDatos();
  }, []);

  const asd = tarea
  console.log(asd);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/producto" element={<Productos tarea={tarea} />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Guajolote />} />
          <Route path="/crearCuenta" element={<Formulario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detalle/:id" element={<Detail tarea={tarea} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
