import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import { FaElementor, FaPhoneSquareAlt, FaMobile, FaFacebook, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
        <Container className='footer-con p-4'>
            <Row>
               <Col lg={3} md={6} sm={12}>
                   <h3 className="footer-heading">Solo Trip</h3>
                   <p className="footer-textp">Solo travelers enjoy the intimacy of our small groups of never more than 16 guests. Our Journeys Without a Crowd offer a lighter footprint with a more authentic, caring and sustainable experience enhanced by our native-born guides.</p>
                   
                  
               </Col>
               <Col lg={3} md={6} sm={12}>
                   <h3 className="footer-heading">Latest Update</h3>
                   <div className="footer-texth">
                       <h6><FaElementor /> Solo Trip in pictures</h6>  
                   </div>
                   <div className="footer-texth mt-3">
                       <h6><FaElementor /> Our Team</h6>
                   </div>
                   <div className="footer-texth mt-3">
                       <h6><FaElementor /> 10 Things You Should Know</h6>
                   </div>
                   <div className="footer-texth mt-3">
                       <h6><FaElementor /> Together We Can Do So Much</h6>
                   </div>
                   <div className="footer-texth mt-3">
                       <h6><FaElementor /> Post without feuatured image</h6>
                   </div>
               </Col>
               <Col lg={3} md={6} sm={12}>
                   <h3 className="footer-heading">Contact</h3>
                   <div className="footer-text">
                       <h6>Our HotLIne: solotrip@gmail.com</h6>
                       <h6><FaPhoneSquareAlt /> Our TelePhone: 123-12345678</h6>
                       <h6>Our Email: contact@solotrip.com</h6>
                       <h6><FaMobile /> Our Mobile: 01711111110</h6>
                   </div>
               </Col>
               <Col lg={3} md={6} sm={12}>
               <h4 className="footer-heading">Get Social</h4>
                   <small><FaFacebook style={{fontSize: '25px'}}/></small>
                   <small><FaInstagramSquare style={{fontSize: '25px', marginLeft: '15px'}}/></small>
                   <small><FaTwitterSquare style={{fontSize: '25px', marginLeft: '15px'}}/></small>
                   <small> <FaLinkedin style={{fontSize: '25px', marginLeft: '15px'}}/></small>
               </Col>
            </Row>
            <Row>
                <h5 className="footer-content">© Copyright 2022 -Solo Trip  </h5>
            </Row>
        </Container>
    </div>
    );
};

export default Footer;