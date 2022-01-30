import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Bienvenida, Botones, Centrar, Iniciar } from '../styles/HomeStyles';

const Home = () => {
    return (<div>

        <Centrar>
        <h1>Bienvenido.</h1>
        <Bienvenida src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='' />
        <Botones>
       <Iniciar> <Link to="/iniciarSesion"><Button type='button'>Iniciar sesión</Button></Link> <br></br> </Iniciar>
        <Iniciar> <Link to="/crearCuenta"><Button type='button'>Crear cuenta</Button></Link> </Iniciar>
        <Iniciar><Link to="/producto">prods</Link></Iniciar> 
        </Botones>
        </Centrar>

    </div>);
};

export default Home;

