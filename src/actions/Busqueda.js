import React, { useEffect, useState } from "react";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Foto, Link, ListProducto, Precio, Producto, TProducto } from "../styles/ProductosStyles";
import { urlGuajolota } from "../helpers/Url";
import { Card } from "react-bootstrap";
import accounting from "accounting";


function Busqueda() {

    const [produ, setProdu] = useState([]);
    const [tablaProductos, setTablaProductos] = useState([]);
    // const [busqueda, setBusqueda] = useState("")



    const peticionGet = async () => {
        await axios.get(urlGuajolota)
            .then(response => {
                setProdu(response.data);
                setTablaProductos(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = ({target}) => {
        console.log(target.value);
        //setBusqueda(target.value);
        filtrar(target.value);
    }

    const filtrar = (terminoBusqueda) => {
        // eslint-disable-next-line array-callback-return
        var resultadoBusqueda = tablaProductos.filter((elemento) => {
            if (elemento.product.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.clase.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
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
                type="Search"
                style={{
                    width: '312px', height: "60px",
                    position: "absolute", left: "615px",
                    top: "44px"
                }}
                border="radius"
                placeholder='Sabor de Guajolota,bebida.'
                onChange={handleChange}
            /> <br></br> <br></br><br></br> <br></br>
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
                                                <TProducto>{product.product}</TProducto>
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