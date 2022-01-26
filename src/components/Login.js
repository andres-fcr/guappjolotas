import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const Login = () => {
    return (<>
        <fieldset>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button type="submit">Submit</Button>
        </fieldset>
    </>);
};

export default Login;
