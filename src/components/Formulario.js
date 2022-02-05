import React, { useState } from 'react';
import { Formik } from "formik";
import { urlUser } from '../helpers/Url';
import axios from 'axios';
import { Cinput, Contrasenana, Correo, Div, Inicio, Linput } from '../styles/LoginStyles';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const Formulario = () => {

  const [cuentaCreada, cambiarCuentaCreada] = useState(false);


  const envioData = (valores) => {
    axios.post(urlUser, valores)

      .then(response => {
        console.log(response.data)

      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <div className='Container'>
        <Formik
          initialValues={{
            // name: '',
            email: '',
            password: ''
          }}

          validate={(valores) => {
            let errores = {};

            // if (!valores.name) {
            //   errores.name = ("Por favor ingresa un nombre");
            // } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            //   errores.name = "Escribe solo letras y espacio"
            // }


            if (!valores.email) {
              errores.email = ("Por favor ingresa un correo electronico");
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
              errores.email = "El correo solo puede contener letras, numero, puntos, guion bajo"
            }
            return errores
          }}

          onSubmit={(valores) => {
            console.log(valores);
            console.log("Cuenta Creada");
            cambiarCuentaCreada(true);
            setTimeout(() => cambiarCuentaCreada(false), 5000);
            localStorage.setItem("User", JSON.stringify(valores))
            envioData(valores)
          }}

        >

          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (

            <form className='formulario' onSubmit={handleSubmit}>
              <Div>
                <Link to="/">
                  <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" width={100} height="auto" alt="" />
                </Link>

                <Inicio><h1>Registrate.</h1></Inicio>
                {/* <Correo>
                  <label htmlFor='name'></label>
                  <Linput
                    type="text"
                    id='name'
                    name='name'
                    placeholder='Nombre Completo'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && <div className='erro'>{errors.name}</div>}
                </Correo> */}

                <Contrasenana>
                  <label htmlFor='email' />
                  <Cinput
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Correo Electrónico Ej: User@gmail.com'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && <div className='erro'>{errors.email}</div>}
                </Contrasenana>

                <Contrasenana>
                  <label htmlFor='password'></label>
                  <Cinput
                    type="password"
                    id='password'
                    name='password'
                    placeholder='Escriba su Contraseña'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Contrasenana>

                <Button type='submit' className='mb-2'>Crear Cuenta</Button>
                <p className='mb-2 fs-6'>O si ya tienes una cuenta</p>
                <Button type='button' as={Link} to="/iniciarSesion" variant="primar">Iniciar sesión</Button>
                {cuentaCreada && <p className="exito">Cuenta Creada con Éxito! Ya puedes iniciar sesión</p>}

              </Div>
            </form>

          )

          }
        </Formik>
      </div>
    </>
  );
};

export default Formulario;
