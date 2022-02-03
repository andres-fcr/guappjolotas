import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Busqueda from '../actions/Busqueda';
// import Counter from '../actions/Counter';
// import BusquedaPage from '../components/BusquedaPage';
// import Carrito from '../components/Carrito';
import Detail from '../components/Detail';
import Formulario from '../components/Formulario';
import Home from '../components/Home';
import Login from '../components/Login';
// import NoEncontrado from '../components/NoEncontrado';
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
          <Route path="/busqueda" element={<Busqueda tarea={tarea} />} />
          {/* <Route path="/carrito" element={<Carrito />} /> */}
          {/* <Route path="/a" element={<NoEncontrado/>}/> */}
          {/* <Route path="/b" element={<BusquedaPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
