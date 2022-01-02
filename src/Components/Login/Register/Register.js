import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Headers from '../../Shared/Navbar/Headers';
import './Register.css'

const Register = () => {
    const [logInData, setLoginData] = useState({});
    const handleLoginSubmit = e => {
        alert('hello')
        e.preventDefault();
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <div>
            <Headers></Headers>
            <div className='register-form'>
                <h2 className='register-text'>Please Register</h2>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="text" onChange={handleOnChange}  placeholder="Enter your Name" />
                </Form.Group>
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' onChange={handleOnChange} placeholder="Password" />
                    </Form.Group>
                    <Button type='submit'>Register</Button> <br />
                    <NavLink style={{ textDecoration: 'none' }} to='/login'>Already Registered? please LogIn</NavLink>
                </Form>
            </div>
        </div>
    );
};

export default Register;