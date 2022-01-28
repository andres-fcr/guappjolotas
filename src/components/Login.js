import React from 'react';
import { Formik } from 'formik';

const Login = () => {
    return (<>
        <Formik
        initialValues={{
          nombre: '',
          contrasena: '',
        }}
        onSubmit={(valores) => {
          console.log(valores);
          console.log("Cuenta Creada");

        }}
      >
        {({values, handleSubmit, handleChange, handleBlur}) => (
          <form className='formulario' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='nombre'>Nombre de Usuario</label>
              <input
                type="text"
                id='nombre'
                name='nombre'
                placeholder=''
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor='contrasena'>Contraseña</label>
              <input
                type="password"
                id='contrasena'
                name='contrasena'
                placeholder=''
                value={values.contrasena}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button type='submit'>Iniciar Sesión</button>
          </form>
        )}
      </Formik>
    </>
    );
};

export default Login;
