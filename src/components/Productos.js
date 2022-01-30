import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Foto, Li, ListProducto, Precio, Producto, TProducto, Ul, Head, Texto, Carrito, Imagenes } from '../styles/ProductosStyles';
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

                <Imagenes>

                   <Link to="/">
                    <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='' width={62} height="auto" />
                </Link>

                <Carrito>
                <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/carrito_mlxzjd.png" alt="" width={20} height="auto" />
                </Carrito>
                
                <input type="text" />

                </Imagenes>

                
                <Texto><h1>Nada como una Guajolota para empezar el dia</h1></Texto>
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
                                <Card style={{ width: '312px' }} border="light" bg="#FFF">
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
