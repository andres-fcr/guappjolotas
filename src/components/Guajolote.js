import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { urlGuajolota } from '../helpers/Url';
import { Foto, Li, ListProducto, Precio, Producto, TProducto, Ul, Head } from '../styles/GuajolotesStyles';


const Guajolote = () => {

    const [productos, setProductos] = useState([]);

    const [lista, setLista] = useState("Guajalotes");

    useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        axios.get(urlGuajolota)
            .then(response => {
                setProductos(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const listar = productos.map(prod => prod.clase === lista)
    

    return (
        <div>
            <Head>
                <Link to="/">
                    <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='' width={62} height="auto" />
                </Link>
                <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/carrito_mlxzjd.png" alt="" width={20} height="auto" />
                <h1>Nada como una Guajolota para empezar el dia</h1>
                <input type="text" />
            </Head>
            <Ul className='row'>
                <Li><a href="/">Guajolotas</a></Li>
                <Li><a href="/">Bebidas</a></Li>
                <Li><a href="/">Tamales</a></Li>
            </Ul>
            <ListProducto>
                {
                    productos.map(product => (

                        <Producto key={product.id} >
                            <Card style={{ width: '312px' }} border="light" >
                                <div className="row">
                                    <div className="col">
                                        <Foto variant="top" src={product.imagen} />
                                    </div>
                                    <div className="col">
                                        <Card.Body style={{ width: '10rem' }}>
                                            <TProducto>{product.product}</TProducto>
                                            <Precio>
                                                $ {product.precio} MXN
                                            </Precio>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card >
                        </Producto >
                    ))
                }
            </ListProducto>
        </div >
    );
};

export default Guajolote;
