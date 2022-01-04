import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link as a } from 'react-router-dom';
import Headers from '../Shared/Navbar/Headers';
import './Contact.css';
import map from '../../images/map-of-bangladesh.jpg';
import { FaLinkedin } from 'react-icons/fa';
import Footer from '../Shared/Footer/Footer';
import { Alert } from 'bootstrap';

const Contact = () => {
    const [fromData, setFromData] = useState({});

    const handleOnSubmit = e =>{
        alert('Massege send successfuly')
        e.preventDefault();
    }
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...fromData };
        newLoginData[field] = value;
        setFromData(newLoginData);
    }
    return (
        <>
            <Headers></Headers>
            <div className='contact-container'>
                <h2 style={{ color: '#323232', var: '--poppins-font' }}>Contact us</h2>
                <a className='link-btn' to="/home">Home</a>/
                <a className='link-btn' to="/contactus">ContactUs</a>
            </div>
            <Container className='p-5'>
                <Row>
                    <Col lg={7} sm={12}>
                        <Form onSubmit={handleOnSubmit} className='contact-from'>
                            <Row>
                                <Col>
                                    <Form.Control type="text" required onBlur={handleOnBlur} placeholder="Your Name" />
                                </Col>
                                <Col>
                                    <Form.Control type="number" required onBlur={handleOnBlur} placeholder="Your Number" />
                                </Col>
                            </Row>
                            <Row className='mt-5'>
                                <Col>
                                    <Form.Control type="email" required onBlur={handleOnBlur} placeholder="Enter Email" />
                                </Col>
                                <Col>
                                    <Form.Control type="text" required onBlur={handleOnBlur} placeholder="Subject" />
                                </Col>
                            </Row>
                            <Row className='mt-5'>
                                <Col>
                                    <Form.Control as="textarea" required onBlur={handleOnBlur} placeholder='Your Massage' rows={8} />
                                </Col>
                            </Row>
                            <Form.Check className='mt-4' label="Accept Terms and Conditions" />
                            <Row className='p-5'>
                                <Col>
                                    <button style={{ padding: '15px', borderRadius: '10px', fontSize: '16px' }} className="btn-regular navbar-book-btn" type="submit">Send Your Massege Now</button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={5} sm={12}>
                        <img src={map} className='img-fluid' alt='Responsive image' />
                        <Row className='p-2'>
                            <Col><a href='https://www.linkedin.com/in/prottay-roy-arnob-791181213/'><FaLinkedin style={{fontSize: '35px', color: '#0077b5', borderRadius: '10px'}} /></a></Col>
                            <Col><a href='https://www.linkedin.com/in/shihab-shumon/?fbclid=IwAR3EQdnJGIaTNpQiSS2NRuBUaGHvHnJqkyFzg6zE_FfgCLgb2qlQpxHyOEk'><FaLinkedin style={{fontSize: '35px', color: '#0077b5', borderRadius: '10px'}} /></a></Col>
                            <Col><a href='https://www.linkedin.com/in/ahmed-towsik?fbclid=IwAR0O6jNm5vDeAG90Rr2m6tBBRsRBPuUb2aEFJtaCpPkv9VysiuS_m_Pq5Mo'><FaLinkedin style={{fontSize: '35px', color: '#0077b5', borderRadius: '10px'}} /></a></Col>
                            <Col><a href=''><FaLinkedin style={{fontSize: '35px', color: '#0077b5', borderRadius: '10px'}} /></a></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Contact;