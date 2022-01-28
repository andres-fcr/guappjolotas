import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { urlGuajolota } from '../helpers/Url';
import { Foto, Li, ListProducto, Precio, Producto, TProducto, Ul, Head } from '../styles/GuajolotesStyles';
import accounting from 'accounting';

const Guajolote = () => {

    const [productos, setProductos] = useState([]);

    ///////////////State Filtro///////////////////////
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
    console.log(productos);


    //////////////////////Filtro Categorias//////////////////
    const filtered = productos.filter(function (element) {
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
            <Ul className='row'>
                <Li>
                    <Button
                        variant="link"
                        onClick={() => setLista("Guajalotes")}
                    >Guajalotas</Button>
                </Li>
                <Li>
                    <Button
                        variant="link"
                        onClick={() => setLista("Bebidas")}
                    >Bebidas</Button>
                </Li>
                <Li>
                    <Button
                        variant="link"
                        onClick={() => setLista("Tamales")}
                    >Tamales</Button>
                </Li>
            </Ul>
            <ListProducto>
                {
                    filtered.map(product => (

                        <Producto key={product.id} >
                            <Link style={{ textDecoration: "none" }} to={`/detalle/${product.id}`}>
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
<<<<<<< HEAD
                                    <div className="col">
                                        <Card.Body style={{ width: '10rem' }}>
                                            <TProducto>{product.product}</TProducto>
                                            <Precio>
                                                 {accounting.formatMoney(product.precio, "MXN")}
                                            </Precio>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card >
=======
                                </Card >
                            </Link>
>>>>>>> e10ecea0810c620e26e2b0b18ea2c4375536edee
                        </Producto >
                    ))
                }
            </ListProducto>
        </div >
    );
};

export default Guajolote;
