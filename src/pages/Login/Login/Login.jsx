import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router';
import { AuthContext } from '../../../provaider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location?.state?.form?.pathname || '/category/0';

    const hanldeSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace : true});
        })
        .catch(error =>{
            console.log(error);
        })
    }


    return (
        <Container >
            <h2>Please Login</h2>
            <Form className='w-25 mx-auto' onSubmit={hanldeSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted">
                    Don't Have an account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;