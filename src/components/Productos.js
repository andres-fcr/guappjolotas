import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
// import { urlGuajolota } from '../helpers/Url';
import { Foto, Li, ListProducto, Precio, Producto, TProducto, Ul, Head } from "../styles/ProductosStyles"
import accounting from 'accounting';
// import getData from '../helpers/getData';
import { Link } from 'react-router-dom';
import { BsArrowLeftSquareFill, BsSearch } from "react-icons/bs";

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
                <Link to="/">
                    <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/carrito_mlxzjd.png" alt="" width={20} height="auto" />
                </Link>
            </Head>
            <h1>Nada como una Guajolota para empezar el dia</h1>
            <Link to="/busqueda">
            <input 
            type="Search"
            style={{ width: '312px', height: "60px",
            position: "absolute", left: "530px" }} 
            border="radius"
            placeholder='Sabor de Guajolota,bebida.'
            
            />
            </Link>
            <br></br><br></br><br></br><br></br>
            <Ul >
                <Button
                    variant="link"
                    onClick={() => setLista("Guajalotes")}
                >Guajalotas</Button>
                <Button
                    variant="link"

                    onClick={() => setLista("Tamales")}
                >Tamales</Button>
                <Button
                    variant="link"

                    onClick={() => setLista("Bebidas")}
                >Bebidas</Button>
            </Ul>
            <ListProducto>
                {
                    filtered.map(product => (

                        <Producto key={product.id} >
                            <Link to={`/detalle/${product.clase}${product.id}`}>
                                <Card style={{ width: '312px' }} border="secondary" >
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
