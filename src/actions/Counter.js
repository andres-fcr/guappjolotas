import React, { useReducer, useState } from 'react';
import { Button } from 'react-bootstrap';
import { contadorInitalState, contadorReducer } from '../reducers/contadorReducer';
import { TYPES } from './contadorActions';





const Counter = () => {

    const [state, dispatch] = useReducer(contadorReducer, contadorInitalState);
    const handleSubstract = () => {
        dispatch({ type: TYPES.DECREMENT })
    }
    const handleAdd = () => {
        dispatch({ type: TYPES.INCREMENT })
    }
    
    return (
        <div className="mb-2">
            <Button variant="primary" onClick={handleSubstract}>
                -
            </Button>
            <h1>{state.contador}</h1>
            <Button variant="secondary" onClick={handleAdd} >
                +
            </Button>
        </div>
    );
}

export default Counter;