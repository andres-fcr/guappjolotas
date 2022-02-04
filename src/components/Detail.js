import accounting from 'accounting';
import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Counter from '../actions/Counter';
import { Beba, Boto, Cafe, Carro, Contenido, Contodo, Flecha, Foto, Fotografias, Nombre, Prepio } from '../styles/SliderStyles';
// import Carrito from './Carrito'; 




const Detail = ({ tarea }) => {

  const clave = "productos";
  const params = useParams()
  const { id } = params
  const num = id.replace(/[^0-9]/g, '')
  const withNoDigits = id.replace(/[0-9]/g, '');

  const buscado = tarea.find((obj) => obj.id === Number(num));

  const { product, imagen, precio } = buscado

  const info = tarea.filter(function (element) {
    return element.clase === buscado.clase;
  });

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

  const obtener = () => {
    const productosCodificados = localStorage.getItem(clave);
    return JSON.parse(productosCodificados) || [];
  }
  const productos = obtener();

  const guardar = () => {
    localStorage.setItem(clave, JSON.stringify(productos));
  }


  const existe = (id) => {
    return productos.find(producto => producto.id === id);
  }

  const agregar = (buscado) => {
    if (!existe(buscado.id)) {
      productos.push(buscado);
      guardar();
    }
  }

  // const quitar = (id) => {
  //     const indice = productos.findIndex(p => p.id === id);
  //     if (indice !== -1) {
  //         productos.splice(indice, 1);
  //         guardar();
  //     }
  // }


  function Bebida() {
    return (
      <div>
        <p>Selecciona la bebida que más te guste y disfruta de tu desayuno.</p>
        <Contodo>
          {
            drink.map(x => (
              <Cafe key={x.id} style={{ width: '10rem' }}>
                <Beba variant="top" src={x.imagen} />
                <Card.Body>
                  <Card.Title>{x.name}</Card.Title>
                  <Card.Text>
                    {accounting.formatMoney(x.precio, "MXN")}
                  </Card.Text>
                </Card.Body>
              </Cafe>
            ))
          }
        </Contodo>
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

  return (
   <Card>
    <div>
      <Link to="/producto">
        <Flecha
          src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1643496365/guappjolotas/Vector_a8gtlb.png"
          alt="back"
        />
      </Link>
      <Link to="/carrito">
        <Carro
          src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1643496426/guappjolotas/shopping-cart_pbl62y.png"
          alt="carrito"
        />
      </Link>{" "}
      <br /> <br />
      <br /> <br />


      <Carousel>
        {
          info.map((cs) => (

            <Carousel.Item key={cs.id}>
              <Fotografias className="d-block w-100" src={cs.imagen} width="3500%" height="350px" alt="" /><br /> <br /><br /> <br /><br /> <br />
              <Carousel.Caption>
                <Nombre>{cs.product}</Nombre>
                <Prepio>{cs.precio}</Prepio>
              </Carousel.Caption>
            </Carousel.Item>

          ))
        }
      </Carousel>



      {/* <Coma src={imagen} alt="product" />
        <h1>{product}</h1>
        <h4>{accounting.formatMoney(precio, "MXN")}</h4> */}
      <Counter />
      <h3>Sabor</h3>
      <Contenido>
        {iconos.map((i) => (
          <div key={i.id}>
            <Link to={`/detalle/${i.clase}${i.id}`}>
              <Foto src={i.icono} alt={i.product} />
            </Link>
          </div>
        ))}
      </Contenido>
      <h3>Guajolocombo</h3>
      {withNoDigits === "Tamales" ? (
        <Bebida />
      ) : withNoDigits === "Guajalotes" ? (
        <Bebida />
      ) : (
        <Comida />
      )}

      <br /><br />
      <Boto onClick={() => agregar()}>
        Agregar al carrito {accounting.formatMoney(precio, "MXN")}
      </Boto>

    </div>
   </Card>
  );
};

export default Detail;
