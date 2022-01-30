import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Foto, Link, ListProducto, Precio, Producto, TProducto } from "../styles/ProductosStyles";
import { urlGuajolota } from "../helpers/Url";
import { Card } from "react-bootstrap";
import accounting from "accounting";


function Busqueda() {

    const [produ, setProdu] = useState([]);
    const [tablaProductos, setTablaProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("")



    const peticionGet = async () => {
        await axios.get(urlGuajolota)
            .then(response => {
                setProdu(response.data);
                setTablaProductos(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = tablaProductos.filter((elemento) => {
            if (elemento.product.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setProdu(resultadoBusqueda);
    }

    useEffect(() => {
        peticionGet();
    }, [])



    return (
        <div className='busca'>
            <input
                className='form-control inputBuscar'
                value={busqueda}
                placeholder='Buscar Productos'
                onChange={handleChange}
            />
            <button className='btn btn-success'>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
                type="Search"
                style={{
                    width: '312px', height: "60px",
                    position: "absolute", left: "530px"
                }}
                border="radius"
                placeholder='Sabor de Guajolota,bebida.'

            />
            <ListProducto>
                {
                    produ.map(product => (

                        <Producto key={product.id} >
                            <Link to={`/detalle/${product.clase}${product.id}`}>
                                <Card style={{ width: '300px' }} border="secondary" >
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

        </div>
    )


}

export default Busqueda;