import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Headers.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo-main.png";

const Headers = () => {
 return (
  <>
   <Navbar bg="light" expand="lg">
    <Container>
     <Navbar.Brand href="#home">
      <img src={logo} alt="" height="60px" />
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
       <Link to="/" className="navbar-link-custom">
        HOME
       </Link>
       <Link to="/rooms" className="navbar-link-custom">
        ROOMS
       </Link>
       <Link to="/about" className="navbar-link-custom">
        ABOUT
       </Link>
       <Link to="/contactus" className="navbar-link-custom">
        CONTACT US
       </Link>
      </Nav>
     </Navbar.Collapse>
     <Link to="/home">
      <button className="btn-regular navbar-book-btn">Book Now</button>
     </Link>
    </Container>
   </Navbar>
  </>
 );
};

export default Headers;
