import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';
// import { urlGuajolota } from '../helpers/Url';
import { Foto, Li, ListProducto, Precio, Producto, TProducto, Ul, Head } from '../styles/GuajolotesStyles';
import accounting from 'accounting';
// import getData from '../helpers/getData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Productos = ({ tarea }) => {
  const [lista, setLista] = useState("Guajalotes");

  const filtered = tarea.filter(function (element) {
    return element.clase === lista;
  });

  return (
    <div>
      <Imagenes>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png"
            alt=""
            width={62}
            height="auto"
          />
        </Link>

        <Carrito>
          <img
            src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/carrito_mlxzjd.png"
            alt=""
            width={20}
            height="auto"
          />
        </Carrito>
      </Imagenes>
      <Head>
        <Texto>
          <h1>Nada como una Guajolota para empezar el dia</h1>
        </Texto>
      </Head>

    const [produ, setProdu] = useState([]);
    const [tablaProductos, setTablaProductos] = useState([]);
    const [busqueda, setBusqueda] =useState("")

    const [open, setOpen] = useState(false);

    const peticionGet= async()=>{
        await axios.get("https://guappjolota.herokuapp.com/Productos")
        .then(response=>{
            setProdu(response.data);
            setTablaProductos(response.data)
        }).catch(error=>{
            console.log(error);
        })
    }

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar=(terminoBusqueda)=>{
       var resultadoBusqueda=tablaProductos.filter((elemento)=>{
           if(elemento.product.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
           || elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
           ){
               return elemento;
           }
       });
       setProdu(resultadoBusqueda);
    }

    useEffect(()=>{
        peticionGet();
    }, [])





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

              <div className=''>
                <input 
                className='form-control inputBuscar' 
                value={busqueda} 
                placeholder='Buscar Productos'
                onChange={handleChange} 
                />
                <button className='btn btn-success'
                     onClick={() => setOpen(!open)}
                     aria-controls="example-collapse-text"
                     aria-expanded={open}
                >
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
                <Collapse in={open} dimension="width">
                   <div id="example-collapse-text">
                   <Card body style={{width: '400px'}}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
                  </Card>
                  </div>
                </Collapse>
                </div>
           

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

      <Ul>
        <Guajolotes><Button onClick={() => setLista("Guajalotes")}>Guajalotas</Button></Guajolotes> 
        <Tamales><Button onClick={() => setLista("Tamales")}>Tamales</Button></Tamales> 
        <Bebidas><Button onClick={() => setLista("Bebidas")}>Bebidas</Button></Bebidas>
      </Ul>
      <ListProducto>
        {filtered.map((product) => (
          <Producto key={product.id}>
            <Link to={`/detalle/${product.clase}${product.id}`}>
              <Card style={{ width: "312px" }} border="light" bg="#FFF">
                <div className="row">
                  <div className="col">
                    <Foto variant="top" src={product.imagen} />
                  </div>
                  <div className="col">
                    <Card.Body style={{ width: "10rem" }}>
                      <TProducto>{product.name}</TProducto>
                      <Precio>
                        {accounting.formatMoney(product.precio, "MXN")}
                      </Precio>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Link>
          </Producto>
        ))}
      </ListProducto>
    </div>
  );
};

export default Productos;
