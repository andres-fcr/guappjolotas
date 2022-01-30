import React, { useState } from 'react';
import { Formik } from "formik";


const Formulario = () => {
  
  const [cuentaCreada, cambiarCuentaCreada] = useState(false);
  
  const [agregar, setAgregar] = useState([]);
  

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


            setAgregar.unshift(valores)
            localStorage.setItem()
            console.log(agregar);
          }}

        >

          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form className='formulario' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='nombre'>Nombre Completo</label>
                <input
                  type="text"
                  id='nombre'
                  name='nombre'
                  placeholder=''
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.nombre && <div className='erro'>{errors.nombre}</div>}
              </div>

              <div>
                <label htmlFor='correo'>Correo Electrónico</label>
                <input
                  type="email"
                  id='correo'
                  name='correo'
                  placeholder='Ej: MariaPerez@gmail.com'
                  value={values.correo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.correo && <div className='erro'>{errors.correo}</div>}
              </div>

              <div>
                <label htmlFor='contrasena'>Escriba su Contraseña</label>
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

              <button type='submit'>Crear Cuenta</button>
              {cuentaCreada && <p className="exito">Cuenta Creada con Éxito!</p>}
            </form>

          )

          }
        </Formik>
      </div>
    </>
  );
};

export default Formulario;
