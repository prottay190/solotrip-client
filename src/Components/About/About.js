import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import Slider from '../Home/Carousel/Slider';
import HomeAboutSection from '../Home/Home/HomeAboutSection';
import Footer from '../Shared/Footer/Footer';
import Headers from '../Shared/Navbar/Headers';
import prottay from '../../images/team/prottay.jpg';
import shihab from '../../images/team/shihab.jpg';
import towsik from '../../images/team/towsik.jpg';
import hamim from '../../images/team/hamim.jpg';
import award1 from '../../images/Awards/award1.png';
import award2 from '../../images/Awards/award2.png';
import award3 from '../../images/Awards/award3.png';

const About = () => {
    return (
        <div>
            <Headers></Headers>
            <div className='contact-container'>
                <h2 style={{ color: '#323232', var: '--poppins-font' }}>About Us</h2>
                <a className='link-btn' to="/home">Home</a>/
                <a className='link-btn' to="/about">AboutUs</a>
            </div>
            <Slider></Slider>
            <HomeAboutSection></HomeAboutSection>
            <Container className='p-5'>
                <Row>
                    <h2 style={{color: '#60607a', textAlign: 'center', marginBottom: '50px'}}>Our Team Members</h2>
                    <Col sm={12} lg={3} className='team-member-container'>
                        <div>
                            <img src={prottay} className='img-fluid team-img' alt='Responsive image' />
                        </div>
                        <div className='team-member-text'>
                            <h2>Prottay Roy Arnob</h2>
                            <p>Developer</p>
                        </div>
                    </Col>
                    <Col sm={12} lg={3}>
                        <div>
                            <img src={shihab} className='img-fluid team-img' alt='Responsive image' />
                        </div>
                        <div className='team-member-text'>
                            <h2>Shihab Shumon</h2>
                            <p>Developer</p>
                        </div>
                    </Col>
                    <Col sm={12} lg={3}>
                        <div>
                            <img src={towsik} className='img-fluid team-img' alt='Responsive image' />
                        </div>
                        <div className='team-member-text'>
                            <h2>Ahmed Towsik</h2>
                            <p>Developer</p>
                        </div>
                    </Col>
                    <Col sm={12} lg={3}>
                        <div>
                            <img src={hamim} className='img-fluid team-img' alt='Responsive image' />
                        </div>
                        <div className='team-member-text'>
                            <h2>Rahman Hamim</h2>
                            <p>Developer</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='p-5'>
                    <h2 style={{color: '#60607a', textAlign: 'center', marginBottom: '50px'}}>Awards</h2>
                    <Col sm={12} lg={4}>
                        <img src={award1} className='img-fluid award-img' alt='Responsive image' />
                    </Col>
                    <Col sm={12} lg={4}>
                        <img src={award2} className='img-fluid award-img' alt='Responsive image' />
                    </Col>
                    <Col sm={12} lg={4}>
                        <img src={award3} className='img-fluid award-img' alt='Responsive image' />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;