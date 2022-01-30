import accounting from 'accounting';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Counter from '../actions/Counter';

const Detail = ({ tarea }) => {


    const params = useParams()
    const { id } = params
    const num = id.replace(/[^0-9]/g, '')
    const withNoDigits = id.replace(/[0-9]/g, '');

    const buscado = tarea.find((obj) => obj.id === Number(num));

    const { product, imagen, precio } = buscado


    const iconos = tarea.filter(function (element) {
        return element.clase === withNoDigits;
    });

    const drink = tarea.filter(function (element) {
        return element.clase === "Bebidas"
    })
    const eat = tarea.filter(function (element) {
        return element.clase === "Tamales"
    })
    console.log(withNoDigits);


    function Bebida() {
        return (
            <div>
                <p>Selecciona la bebida que más te guste y disfruta de tu desayuno.</p>

                {
                    drink.map(x => (
                        <Card key={x.id} style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={x.imagen} />
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                    {accounting.formatMoney(x.precio, "MXN")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        )
    }

    function Comida() {
        return (
            <div>
                <p>Selecciona la torta que más te guste y disfruta de tu desayuno</p>
                {
                    eat.map(x => (
                        <Card key={x.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={x.imagen} />
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                    {accounting.formatMoney(x.precio, "MXN")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        )
    }

    return (<div>
        <Link to="/producto">
        <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1643496365/guappjolotas/Vector_a8gtlb.png" alt="back" />
        </Link>
        <Link to="/carrito">
        <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1643496426/guappjolotas/shopping-cart_pbl62y.png" alt="carrito" />
        </Link>
        <img src={imagen} alt="product" />
        <h1>{product}</h1>
        <h4>{accounting.formatMoney(precio, "MXN")}</h4>
        <Counter />
        <h3>Sabor</h3>
        {
            iconos.map(i => (
                <div key={i.id}>
                    <Link to={`/detalle/${i.clase}${i.id}`}>
                        <img src={i.icono} alt={i.product} />
                    </Link>
                </div>
            ))
        }
        <h3>Guajolocombo</h3>
        {withNoDigits == "Tamales" ? <Bebida /> : withNoDigits === "Guajalotes" ? <Bebida /> : <Comida />}
        <div>
            <button>Agregar(cantidad) al carrito (valor)</button>
        </div>
    </div>);
};

export default Detail;
