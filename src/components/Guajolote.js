import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { urlGuajolota } from '../helpers/Url';
import { Foto, ListProducto, Precio, Producto, TProducto } from '../styles/GuajolotesStyles';


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
            <ListProducto>
                <Producto>Guajolotas</Producto>
                <Producto>Bebidas</Producto>
                <Producto>Tamales</Producto>
            </ListProducto>
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
