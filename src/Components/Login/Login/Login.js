import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Headers from '../../Shared/Navbar/Headers';
import './Login.css';

const Login = () => {
    const [logInData, setLoginData] = useState({});
    const handleLoginSubmit = e =>{
        alert('hello')
        e.preventDefault();
    }

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={ ...logInData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <>
            <Headers></Headers>

            <div className='login-form' style={{fontFamily: 'var(--poppins-font)'}} >
                <h2 className='login-text'>Please LogIn</h2>
                <Form onSubmit={ handleLoginSubmit }>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' onChange={handleOnChange} placeholder="Password" />
                    </Form.Group>
                    <Button type='submit'>LogIn</Button> <br />
                    <NavLink style={{textDecoration: 'none'}} to='/register'>New User? please Register</NavLink> 
                </Form>

            </div>
        </>
    );
};

export default Login;