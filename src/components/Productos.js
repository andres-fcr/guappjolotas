import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Foto, Li, ListProducto, Precio, Producto, TProducto, Ul, Head, Cartas } from '../styles/ProductosStyles';
import accounting from 'accounting';
import { Link } from 'react-router-dom';


const Productos = ({ tarea }) => {

    const [lista, setLista] = useState("Guajalotes");

    const filtered = tarea.filter(function (element) {
        return element.clase === lista;
    });


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
            <Ul >
                <Button
                    onClick={() => setLista("Guajalotes")}
                >Guajalotas</Button>
                <Button
                    onClick={() => setLista("Tamales")}
                >Tamales</Button>
                <Button
                    onClick={() => setLista("Bebidas")}
                >Bebidas</Button>
            </Ul>
            <ListProducto>
                {
                    filtered.map(product => (

                        <Producto key={product.id} >
                            <Link to={`/detalle/${product.clase}${product.id}`}>
<<<<<<< HEAD
                                <Cartas style={{ width: '312px' }} border="light" bg="#FFF">
=======
                                <Card style={{ width: '312px' }} border="secondary" >
>>>>>>> 7f0f68ee84e5f2e0b076ae5e1c60b84c69d14027
                                    <div className="row">
                                        <div className="col">
                                            <Foto variant="top" src={product.imagen} />
                                        </div>
                                        <div className="col">
                                            <Card.Body style={{ width: '10rem' }}>
                                                <TProducto>{product.name}</TProducto>
                                                <Precio>
                                                    {accounting.formatMoney(product.precio, "MXN")}
                                                </Precio>
                                            </Card.Body>
                                        </div>
                                    </div>
                                </Card >
                            </Link>
                        </Producto >
                    ))
                }
            </ListProducto>
        </div >
    );
};

export default Productos;
