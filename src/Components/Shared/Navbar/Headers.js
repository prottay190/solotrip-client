import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Headers.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/solotrip with white text.png';

const Headers = () => {
    return (
        <>
            <Navbar style={{fontFamily: 'var(--poppins-font)'}} bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand><img src={logo} alt='' width="80px" height="70px" />
                    <span className='headers-text'>Solo<span className='simple-text'>Trip</span></span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >  
                        </Nav>
                        <NavLink to="/home" className='menu-text'>Home</NavLink>
                        <NavLink to="/about" className='menu-text'>About</NavLink>
                        <NavLink to="/login" className='menu-text'>
                            <Button>LogIn</Button>
                        </NavLink>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    );
};

export default Headers;