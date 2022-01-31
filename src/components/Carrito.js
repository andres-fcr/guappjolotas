// import accounting from 'accounting';
// import React from 'react';
// import { Button } from 'react-bootstrap';

// const clave = "productos";
// const productos = obtener();


// const guardar = () => {
//    localStorage.setItem(clave, JSON.stringify(productos));
// }

// const obtener = () => {
//    const productosCodificados = localStorage.getItem(clave);
//    return JSON.parse(productosCodificados) || [];
// }

// const existe = (id) => {
//    return productos.find(producto => producto.id === id);
// }

// const Carrito = ({}) => {


//    const agregar = (producto) => {
//       if (!existe(producto.id)) {
//          productos.push(producto);
//          guardar();
//       }
//    }

//    const quitar = (id) => {
//       const indice = productos.findIndex(p => p.id === id);
//       if (indice != -1) {
//          productos.splice(indice, 1);
//          guardar();
//       }
//    }


//    return <div>
//       <button
//       // onClick={() => saveLocal()}
//       >Agregar al carrito {accounting.formatMoney(0, "MXN")}</button>   </div>;
// };

// export default Carrito;
