import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollLink = (e, targetId) => {
        e.preventDefault();
        setExpanded(false);

        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: targetId } });
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Handle scroll on mount if navigating from another page
    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            // Clear state to prevent scrolling on refresh ?? 
            // Actually router state persists, but effect runs on location change.
            // Good enough for now.
        }
        // Also handle hash links if user types them directly
        else if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`navbar-custom ${scrolled || expanded || location.pathname !== '/' ? 'scrolled' : ''}`}
            expanded={expanded}
        >
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={() => window.scrollTo(0, 0)}>
                    JK INTERIOR
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                >
                    {expanded ?
                        <X color={scrolled || expanded || location.pathname !== '/' ? "black" : "white"} /> :
                        <Menu color={scrolled || expanded || location.pathname !== '/' ? "black" : "white"} />
                    }
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#services" onClick={(e) => handleScrollLink(e, 'services')}>Services</Nav.Link>
                        {/* <Nav.Link as={Link} to="/portfolio" onClick={() => setExpanded(false)}>Portfolio</Nav.Link> */}
                        <Nav.Link href="#about" onClick={(e) => handleScrollLink(e, 'about')}>About</Nav.Link>
                        <Button
                            href="#contact"
                            variant="primary"
                            className="btn-nav-cta ms-lg-3"
                            onClick={(e) => handleScrollLink(e, 'contact')}
                        >
                            Book a Consultation
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
