import React from 'react';
import { Formik } from 'formik';
import { urlUser } from '../helpers/Url';
import axios from 'axios';
import { Centrar, Contrasenana, Correo, Inicio } from '../styles/LoginStyles';

const Login = () => {

  // const getUser = () => {
  //   const getLocal = localStorage.getItem("User")
  //   console.log(JSON.parse(getLocal));
  // }
  // useEffect(() => {
  //   getUser()
  // }, []);

const iniciarSesion = (valores) => {
  axios.get(urlUser, { params: { email: valores.email, password: valores.password } })
    .then(response => {
      console.log(response.data.length); 
      if (response.data.length > 0) {
        alert("se ha iniciado sesion")
      }else{
        alert("nope")
      }
    })
    .catch(error => {
      console.log(error);
    })
}

  return (<>
    <Formik
      initialValues={{
        correo: '',
        contrasena: '',
      }}
      onSubmit={(valores) => {
        console.log(valores);
        iniciarSesion(valores)
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        <form className='formulario' onSubmit={handleSubmit}>
<Centrar>

<Inicio>
  <h1> ¿Tienes cuenta? Inicia sesión. </h1>
</Inicio>

        <Correo>
            <label htmlFor='correo'>Ingresa tu email</label>
            <input
              type="email"
              id='correo'
              name='correo'
              placeholder="Introduce tu correo"
              value={values.correo}
              onChange={handleChange}
              onBlur={handleBlur}
              style = {{ width: "640px", height: "64px" }}
            />
          </Correo>
          <Contrasenana>
            <label htmlFor='contrasena'>Contraseña</label>
            <input
              type="password"
              id='contrasena'
              name='contrasena'
              placeholder='Contraseña'
              value={values.contrasena}
              onChange={handleChange}
              onBlur={handleBlur}
              style = {{ width: "640px", height: "64px" }}
            />
          </Contrasenana>
          </Centrar>
          <button type='submit' >Iniciar Sesión</button>
        </form>
      )}
    </Formik>
  </>
  );
};

export default Login ;
