<<<<<<< HEAD
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
=======
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
>>>>>>> f749ebe4a4a1e46b0c09cb7acb462e68d2091470
import Detail from '../components/Detail';
import Formulario from '../components/Formulario';
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


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/producto" element={<Productos tarea={tarea} />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Productos />} />
          <Route path="/crearCuenta" element={<Formulario />} />
          <Route path="/iniciarSesion" element={<Login />} />
          <Route path="/detalle/:id" element={<Detail tarea={tarea} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
