import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Headers.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo-main.png";
import TopBar from "../TopBar/TopBar";

const Headers = () => {
  return (
    <>
      <TopBar />
      <Navbar bg="light" expand="lg">
        <Container className="headers-container">
          <NavLink
            to="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="d-flex align-items-center">
              <img src={logo} alt="" height="60px" />
              <p className="nav-logo-text my-0">
                Solo<span className="nav-logo-text-span">Trip</span>
              </p>
            </div>
          </NavLink>
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
            <Link className="d-lg-none" to="/home">
              <button className="btn-regular navbar-book-btn">Book Now</button>
            </Link>
          </Navbar.Collapse>
          <Link className="d-none d-lg-block" to="/home">
            <button className="btn-regular navbar-book-btn">Book Now</button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
