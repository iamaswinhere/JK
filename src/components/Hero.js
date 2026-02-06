import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import './Hero.css';
import Logo from '../Assets/1.png'

const Hero = () => {
    return (
        <div className="hero-section" id="home">
            <div className="hero-background">
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/Gemini_Generated_Image_zdxj88zdxj88zdxj.png"
                >
                    {/* Keeping the video as per user original preference, but styling content to match new design */}
                    <source src="/JK Intro.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
            </div>

            <Container className="hero-content">
                <img src={Logo} alt="JK Interior Logo" className="hero-logo-main" />
            </Container>

            <div className="scroll-indicator">
                <span className="scroll-text">Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </div>
    );
};

export default Hero;
