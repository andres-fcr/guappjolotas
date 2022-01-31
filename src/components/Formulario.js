import React, { useState } from 'react';
import { Formik } from "formik";
import { urlUser } from '../helpers/Url';
import axios from 'axios';
import { Botoncito, Dinput, Email, Formula, NombreCompleto, Password, Tinput, Titulo, Ynput } from '../styles/FormularioStyles';



const Formulario = () => {

  const [cuentaCreada, cambiarCuentaCreada] = useState(false);


  const envioData = (valores) => {
    axios.post(urlUser, valores)

      .then(response => {
        console.log(response.data)
        // Swal.fire({
        //   icon: 'successs',
        //   text: 'Te has registardo con éxito',
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     window.location.href = "/"
        //   }
        // })
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <div className='Container'>
        <Formik
          initialValues={{
            nombre: '',
            correo: '',
            contrasena: ''
          }}

          validate={(valores) => {
            let errores = {};
            //validacion Nombre
            if (!valores.nombre) {
              errores.nombre = ("Por favor ingresa un nombre");
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
              errores.nombre = "Escribe solo letras y espacio"
            }

            //validacion correo
            if (!valores.correo) {
              errores.correo = ("Por favor ingresa un correo electronico");
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
              errores.correo = "El correo solo puede contener letras, numero, puntos, guion bajo"
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
            
            <Formula  className='formulario' onSubmit={handleSubmit}>
              <Titulo><h1>Registrate.</h1></Titulo>
              <NombreCompleto>
                 <label htmlFor='nombre'></label>
                <Dinput
                  type="text"
                  id='nombre'
                  name='nombre'
                  placeholder='Nombre Completo'
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style = {{ width: "640px", height: "64px" }}
                />
                {errors.nombre && <div className='erro'>{errors.nombre}</div>}
              </NombreCompleto> 
               
              <Email>
                <label htmlFor='correo'/>
                <Tinput
                  type="email"
                  id='correo'
                  name='correo'
                  placeholder='Correo Electrónico Ej: User@gmail.com'
                  value={values.correo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style = {{ width: "640px", height: "64px" }}
                />
                {errors.correo && <div className='erro'>{errors.correo}</div>}
              </Email>

              <Password>
                <label htmlFor='contrasena'></label>
                <Ynput
                  type="password"
                  id='contrasena'
                  name='contrasena'
                  placeholder='Escriba su Contraseña'
                  value={values.contrasena}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style = {{ width: "640px", height: "64px" }}
                />
              </Password>
              
              <div><Botoncito type='submit'>Crear Cuenta</Botoncito></div>
              {cuentaCreada && <p className="exito">Cuenta Creada con Éxito!</p>}
              
            </Formula>

          )
        
          }
        </Formik>
      </div>
    </>
  );
};

export default Formulario;
