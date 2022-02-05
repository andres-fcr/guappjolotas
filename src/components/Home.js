import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Bienvenida, Botones, Centrar, Iniciar, Titulo } from '../styles/HomeStyles';

const Home = () => {
    return (<div>

        <Centrar>
            <Titulo>Bienvenidos</Titulo>
            <Bienvenida src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='' />
            <Botones>
                <Iniciar> <Link to="/iniciarSesion"><Button variant="primary">Iniciar Sesion</Button>{' '}</Link> <br></br> </Iniciar>
                <Iniciar> <Link to="/crearCuenta"><Button variant="primar">Crear Cuenta</Button>{' '}</Link><br></br></Iniciar>
            </Botones>
        </Centrar>

    </div>);
};

export default Home;

