import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <Container>
                <Row className="gy-5">
                    <Col lg={6} md={6}>
                        <span className="footer-brand">JK INTERIOR</span>
                        <p className="footer-desc">
                            Bespoke interior architecture tailored for those who value elegance, functionality, and timeless design.
                        </p>
                        {/* Social icons moved to the right */}
                    </Col>

                    <Col lg={3} md={6} xs={6}>
                        <span className="footer-col-title">Explore</span>
                        <ul className="footer-links">
                            <li><a href="#studio">Our Studio</a></li>
                            {/* <li><a href="#portfolio">Portfolio</a></li> */}
                        </ul>
                    </Col>

                    <Col lg={3} md={6} xs={6}>
                        <span className="footer-col-title">Connect</span>
                        <ul className="footer-links">
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                        <div className="footer-social-icons mt-3">
                            <a href="#"><Instagram size={18} /></a>
                            <a href="#"><Twitter size={18} /></a>
                            <a href="#"><Facebook size={18} /></a>
                        </div>
                    </Col>
                </Row>

                <div className="footer-bottom">
                    <div className="d-flex gap-4">
                        <span>© JK INTERIOR ARCHITECTURE</span>
                        <span>ALL RIGHTS RESERVED</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
