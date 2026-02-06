import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Portfolio from '../components/Portfolio'; // Reusing the portfolio grid
import './PortfolioPage.css';

const PortfolioPage = () => {
    return (
        <div className="portfolio-page">
            <div className="portfolio-hero">
                <Container>
                    <h1 className="display-4 text-center mb-4">Our Work</h1>
                    <p className="lead text-center text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        A curated selection of our finest interior design projects, showcasing our commitment to elegance, functionality, and timeless style.
                    </p>
                </Container>
            </div>

            {/* Reusing existing Portfolio component but potentially forcing "All" filter or expanded view if we modify it later */}
            <Portfolio />

        </div>
    );
};

export default PortfolioPage;
