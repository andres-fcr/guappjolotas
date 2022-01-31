import React from 'react';
import { Formik } from 'formik';
import { urlUser } from '../helpers/Url';
import axios from 'axios';
import { Button, Centrar, Cinput, Contrasenana, Correo, Div, Inicio, Linput } from '../styles/LoginStyles';

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
            <label htmlFor='correo'></label>
            <Linput
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
            <label htmlFor='contrasena'></label>
            <Cinput
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
         <Div><Button type='submit' >Iniciar Sesión</Button></Div>
        </form>
      )}
    </Formik>
  </>
  );
};

export default Login ;
