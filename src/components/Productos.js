import React, {  useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Foto, Li, ListProducto, Precio, Producto, TProducto, Ul, Head } from "../styles/ProductosStyles"
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
                <Link to="/" style={{ position: "absolute", left: "50px",
                                     width: "64px", height: "64px", top: "24px"}} >
                    <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='' width={62} height="auto" />
                </Link>
                <Link to="/carrito"  style={{ position: "absolute", right: "50px", 
                                      top: "44px", width: "24px", height: "24px", opacity: "0.9" }}>
                <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/carrito_mlxzjd.png" alt="" width={20} height="auto" />
                </Link>
            </Head>
            <br></br><br></br><br></br><br></br>

            <h1  style={{ position: "absolute", width: "312px",height: 
                        "123px",left: "540px",top: "120px" }}
            > Nada como una Guajolota para empezar el dia</h1>
            <br></br><br></br><br></br><br></br><br></br><br></br>

            <Link to="/busqueda">
            <input 
            type="Search"
            style={{ width: '312px', height: "40px",
            position: "absolute", left: "530px", border: "100%"}} 
            
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
