import React from 'react';
import { Formik } from 'formik';
import { urlUser } from '../helpers/Url';
import axios from 'axios';
import { Cinput, Contrasenana, Correo, Div, Inicio, Linput } from '../styles/LoginStyles';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {

  const navigate = useNavigate()

  const iniciarSesion = (valores) => {
    axios.get(urlUser, { params: { email: valores.email, password: valores.password } })
      .then(response => {
        console.log(response.data);
        if (response.data.length > 0) {
          alert("se ha iniciado sesion")
          navigate('/producto')
        } else {
          alert("Ususario o contraseña incorrectos")
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (<>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(valores) => {
        console.log(valores);
        iniciarSesion(valores)
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        <form className='formulario' onSubmit={handleSubmit}>
          <Div>
            <Link to="/">
            <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" width={100} height="auto" alt="" />
            </Link>
            <Inicio>
              <h1> ¿Tienes cuenta? Inicia sesión. </h1>
            </Inicio>

            <Correo>
              <label htmlFor='email'></label>
              <Linput
                type="email"
                id='email'
                name='email'
                placeholder="Introduce tu correo"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Correo>

            <Contrasenana>
              <label htmlFor='password'></label>
              <Cinput
                type="password"
                id='password'
                name='password'
                placeholder='Contraseña'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Contrasenana>

            <Button type='submit' className='mb-2'>Iniciar Sesión</Button>
            <p className='mb-2 fs-6'>O...</p>
            <Button type='button' as={Link} to="/crearCuenta" variant="primar">Registrate</Button>
          </Div>
        </form>
      )}
    </Formik>
  </>
  );
};

export default Login;
