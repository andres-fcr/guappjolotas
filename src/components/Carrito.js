// import { render } from '@testing-library/react';
// import accounting from 'accounting';
// import React from 'react';
// import { Button } from 'react-bootstrap';



// const Carrito = ({buscado}) => {
    
//     const clave = "productos";
//     const productos = obtener();
    
//     const guardar = () => {
//         localStorage.setItem(clave, JSON.stringify(productos));
//     }

//     const obtener = () => {
//         const productosCodificados = localStorage.getItem(clave);
//         return JSON.parse(productosCodificados) || [];
//     }

//     const existe = (id) => {
//         return productos.find(producto => producto.id === id);
//     }

//     const agregar = (buscado) => {
//         if (!existe(buscado.id)) {
//             productos.push(buscado);
//             guardar();
//         }
//     }

//     const quitar = (id) => {
//         const indice = productos.findIndex(p => p.id === id);
//         if (indice != -1) {
//             productos.splice(indice, 1);
//             guardar();
//         }
//     }


// };

// export default Carrito;
