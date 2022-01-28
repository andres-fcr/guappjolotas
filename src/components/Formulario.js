import React from 'react';
import { Formik } from "formik";


const Formulario = () => {

  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          correo: '',
          contrasena: '',
          repetirContrasena: ''

        }}
        onSubmit={(valores) => {
          console.log(valores);
          console.log("Cuenta Creada");

        }}

      >

        {({values, handleSubmit, handleChange, handleBlur}) => (
          <form className='formulario' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='nombre'>Nombre Completo</label>
              <input
                type="text"
                id='nombre'
                name='nombre'
                placeholder='Ejemplo: Maria Perez Castro'
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div>
              <label htmlFor='correo'>Correo Electrónico</label>
              <input
                type="email"
                id='correo'
                name='correo'
                placeholder='Ejemplo: MariaPerez@gmail.com'
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div>
              <label htmlFor='contrasena'>Escriba su Contraseña</label>
              <input
                type="password"
                id='contrasena'
                name='contrasena'
                placeholder='Ejemplo:Maria452152'
                value={values.contrasena}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div>
              <label htmlFor='contrasena'>Repita su Contraseña</label>
              <input
                type="password"
                id='contrasena2'
                name='repetirContrasena'
                placeholder='Ejemplo: Maria452152'
                value={values.repetirContrasena}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button type='submit'>Crear Cuenta</button>
          </form>

        )}
      </Formik>
    </>
  );
};

export default Formulario;
