import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleSubstract = () => {
        setCounter(counter - 1)
    }

    const handleAdd = () => {
        setCounter(counter + 1)
    }
return (
  
      <div>
         
        <div className="mb-2">
      <Button variant="primary" onClick={handleSubstract}>
        -
      </Button>{' '} 
      
      <h1>{counter}</h1>
      
      <Button variant="secondary" onClick={handleAdd} >
        +
      </Button>
     </div>
      </div>
    );
  }
  
  export default Counter;