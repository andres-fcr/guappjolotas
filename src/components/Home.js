import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (<div>
        <h1>Bienvenid@ a</h1>
        <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='' />
        <Button type='button'>Login</Button>
<<<<<<< HEAD
        
=======
>>>>>>> 36e058bafe73b3ba4817c545e7875f4e8c97670a
        <Link to="/crearCuenta"><Button type='button'>Crear cuenta</Button></Link>
    </div>);
};

export default Home;
