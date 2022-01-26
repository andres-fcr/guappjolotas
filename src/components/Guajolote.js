import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { urlGuajolota } from '../helpers/Url';
import { Foto, Li, ListProducto, Precio, Producto, TProducto, Ul, Head } from '../styles/GuajolotesStyles';
import Login from './Login';


export default class Guajolote extends Component {

    constructor() {

        super();
        this.state = {
            productos: []

        }
    }
    componentDidMount() {
        this.getData()
    }

    async getData() {
        const respuesta = await fetch(urlGuajolota)
        const data = await respuesta.json()
        this.setState({ productos: data })
        console.log(data)

    }


    render() {
        const state = this.state.productos

        return <div>
            <Head>
            <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='' width={62} height="auto" />
            <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/carrito_mlxzjd.png" alt="" width={20} height="auto" />
            <h1>Nada como una Guajolota para empezar el dia</h1>
            <input type="text" />
            </Head>
            <Ul class="row">
                <Li><a href="">Guajolotas</a></Li>
                <Li><a href="">Bebidas</a></Li>
                <Li><a href="">Tamales</a></Li>
            </Ul>
            <ListProducto>
                {
                    state.map(product => (

                        <Producto key={product.id} >
                            <Card style={{ width: '312px' }} border="light" >
                                <div class="row">
                                    <div class="col">
                                        <Foto variant="top" src={product.imagen} />
                                    </div>
                                    <div class="col">
                                        <Card.Body style={{ width: '10rem' }}>
                                            <TProducto>{product.product}</TProducto>
                                            <Precio>
                                                ${product.precio} MXN
                                            </Precio>
                                        </Card.Body>
                                    </div>
                                </div>
                                {/* <Counter key={product.id} /> */}
                            </Card>
                        </Producto>
                    ))
                }
            </ListProducto>
        </div >
    }


}
