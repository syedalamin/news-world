import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provaider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handlerRegister = event =>{
        event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const photo = form.photo.value;
       const email = form.email.value;
       const password = form.password.value;
       
       console.log(name, photo, email, password)
       createUser(email, password)
       .then(result =>{
        const createdUser = result.user;
        console.log(createdUser);
       })
       .catch(error =>{
        console.log(error);
       })

    }
    
    const handlerAccepted = event =>{
        setAccepted(event.target.checked)
    }
    return (
        <Container >
            <h2>Please Register</h2>
            <Form className='w-25 mx-auto' onSubmit={handlerRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handlerAccepted}
                    type="checkbox" 
                    name='accept' 
                    label={<>Accetp <Link to='/terms'>Terms and contitions</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit" >
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted">
                    Already Have an account? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;