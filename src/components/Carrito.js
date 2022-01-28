// //llamando atraves de la api 
// document.addEventListener('DOMContentLoaded', () => {
//     fetchData()
// })


// const fetchData = async () => {
//  try {
//      const res = await fetch(' http://localhost:3000/Productos')
//      const data = await res.json()
//       console.log(data)
//       pintarProductos(data)
//       detectarBotones(data)
//  } catch(error) {
//      console.log(error)
//  }
// }

// const contenedorProductos = document.querySelector('#contenedor-productos')
// const pintarProductos = (data) => {
//      const template = document.querySelector('#template-productos').content
//      const fragment = document.createDocumentFragment()

//      data.forEach(producto =>{
        
//          template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
//          template.querySelector('h5').textContent = producto.title
//          template.querySelector('p span').textContent = producto.precio
//          template.querySelector('button').dataset.id = producto.id
         
//          const clone = template.cloneNode(true)
//          fragment.appendChild(clone)
//      })
//      contenedorProductos.appendChild(fragment)
// }

// //Agregando al carrito
// let carrito = {}

// const detectarBotones = (data) => {
//     const botones = document.querySelectorAll('.card button')

//     botones.forEach(btn => {
//         btn.addEventListener('click', () => {
            
//             const producto  = data.find(item => item.id === parseInt(btn.dataset.id))
//               producto.cantidad = 1
//             if (carrito.hasOwnProperty(producto.id)) {
//               producto.cantidad = carrito[producto.id].cantidad + 1
//             }

//            carrito[producto.id] = { ...producto }
        
//             pintarCarrito()
//         })
//     })
// }

// // pintando los productos en la pagina
// const items = document.querySelector('#items')

//  const pintarCarrito = () => {
 
 
//     items.innerHTML = ''

//   const template = document.querySelector('#template-carrito').content
//   const fragment = document.createDocumentFragment()


//   Object.values(carrito).forEach(producto => {
    
//       template.querySelector('th').textContent = producto.id
//       template.querySelectorAll('td')[0].textContent = producto.title
//       template.querySelectorAll('td')[1].textContent = producto.cantidad
//       template.querySelector('span').textContent = producto.precio * producto.cantidad
      
      
//       template.querySelector('.btn-info').dataset.id = producto.id
//       template.querySelector('.btn-success').dataset.id = producto.id


//      const clone = template.cloneNode(true)
//       fragment.appendChild(clone)

//   })
 
//   items.appendChild(fragment)

//   pintarFooter()
//   accionBotones()



//  }



// //pintando informacion en el Carrito

//  const footer = document.querySelector('#footer-carrito')
//  const pintarFooter = () => {

//     footer.innerHTML = ''

//     if (Object.keys(carrito).length === 0) {
//         footer.innerHTML =  `
//         <th scope="row" colspan="5">Carrito vacio</th>
//         `
//         return
//     }

//   const template = document.getElementById('template-footer').content
//   const fragment = document.createDocumentFragment()


//   const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
//   const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)


//   template.querySelectorAll('td')[0].textContent = nCantidad
//   template.querySelector('span').textContent = nPrecio

//   const clone = template.cloneNode(true)
//   fragment.appendChild(clone)

//   footer.appendChild(fragment)


//   const boton = document.querySelector('#vaciar-carrito')
//   boton.addEventListener('click', () => {
//       carrito = {}
//       pintarCarrito()
//   })

//  }

//  // funcionalidad de los botones dentro del carrito.
//  const accionBotones = () =>  {
//     const botonAgregar = document.querySelectorAll('#items .btn-info')
//     const botonEliminar = document.querySelectorAll('#items .btn-success')

    

//     botonAgregar.forEach(btn => {
//         btn.addEventListener('click', () => {
            
//             const producto = carrito[btn.dataset.id]
//             producto.cantidad ++
//             carrito[btn.dataset.id] = {...producto}
//             pintarCarrito()
//         })
//     })


//     botonEliminar.forEach(btn => {
//         btn.addEventListener('click', () => {
//             console.log('eliminando..')
//             const producto = carrito[btn.dataset.id]
//             producto.cantidad --
//             if (producto.cantidad === 0) {
//                 delete carrito[btn.dataset.id]
//             } else {
//                 carrito[btn.dataset.id] = {...producto}
//             }
//             pintarCarrito()
//         })
//     })
//  }