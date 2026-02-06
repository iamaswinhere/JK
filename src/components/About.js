import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import Aboutimg from '../Assets/1.png'

const About = () => {
    return (
        <section className="about-section" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="about-content">
                            <h2 className="about-title">Curating Timeless Environments</h2>
                            <p className="about-text">
                                At JK Interior, we believe that a home is more than just a place to live—it's a reflection of your journey. Founded on the principles of elegance and functionality, our studio specializes in creating bespoke interiors that stand the test of time.
                            </p>
                            <p className="about-text">
                                Our approach blends modern minimalism with classic warmth, ensuring every space we design feels both curated and comfortably lived-in.
                            </p>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <h4>15+</h4>
                                    <span>Years Experience</span>
                                </div>
                                <div className="stat-item">
                                    <h4>200+</h4>
                                    <span>Projects Completed</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        {/* This is logo image for abut section */}
                        <div className="about-image-wrapper">
                            <img
                                src={Aboutimg}
                                alt="Interior Design Studio"
                                className="about-img"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
