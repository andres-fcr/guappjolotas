import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import {  urlGuajolota } from '../helpers/Url';
import { Foto } from '../styles/GuajolotesStyles';
import Counter from './Contador';
import Home from './Home'


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
        this.setState({productos: data})
        console.log(data)

    }


    render() {
        const state = this.state.productos

        return <div>
            <Home/>
            {
                state.map(product => (
                
                    <Card key={product.id}>
                    <Foto variant="top" src={product.imagen} />
                    <Card.Body>
                        <Card.Title>{product.product}</Card.Title>
                        <Card.Text>
                            {product.precio}
                        </Card.Text>
                    </Card.Body>
                    <Counter key={product.id}/>
                </Card>
                )) 
            };
        </div>
    }

    
}
