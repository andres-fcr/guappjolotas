import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Bienvenida, Centrar } from '../styles/HomeStyles';

const Home = () => {
    return (<div>

        <Centrar>
            <h1>Bienvenido.</h1>
                <Bienvenida src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='' />
            <Link to="/login">
                <Button type='button'>Login</Button>
            </Link>
            <Link to="/crearCuenta">
                <Button type='button'>Crear cuenta</Button>
            </Link>
            <Link to="/productos">Productos (delete later)</Link>
        </Centrar>

    </div>);
};

export default Home;

