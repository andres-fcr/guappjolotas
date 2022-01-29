import accounting from 'accounting';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Counter from './Counter';

const Detail = ({ tarea }) => {

    const params = useParams()
    const { id } = params
    const num = id.replace(/[^0-9]/g,'')
    const withNoDigits = id.replace(/[0-9]/g, '');

    const buscado = tarea.find((obj) => obj.id === Number(num));

    const { product, imagen, precio, clase } = buscado

    const iconos = tarea.filter(function (element) {
        return element.clase === withNoDigits;
    });

    // const combo = () => {
    //         (iconos.clase === "Tamales" || "Guajalotes") ?
    //             console.log("Poop") :
    //             console.log("Piss")
    // }
    // useEffect(() => {
    //   combo();
      
    // }, []);
    
    return (<div>
        <img src="" alt="" />
        <img src="" alt="" />
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
        <p>Selecciona la bebida que más te guste y disfruta de tu desayuno.</p>
        {
            tarea.map(x => (
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

    </div>);
};

export default Detail;
