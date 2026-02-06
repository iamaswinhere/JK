import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Testimonials.css';

const testimonials = [
    {
        text: "JK Interior transformed our house into a dream home. The attention to detail and ability to capture our personality in the design was phenomenal.",
        author: "Sarah Jenkins",
        role: "Homeowner"
    },
    {
        text: "Professional, creative, and strictly on budget. They completely revitalized our office space, and employee satisfaction has soared.",
        author: "Michael Ross",
        role: "CEO, Ross Tech"
    },
    {
        text: "An absolute pleasure to work with. Their taste is impeccable, and the execution was flawless from start to finish.",
        author: "Eleanor & David",
        role: "Private Clients"
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-section" id="testimonials">
            <Container>
                <h2 className="section-title"><span>Client Reviews</span></h2>
                <Carousel className="testimonial-carousel" indicators={true} controls={false} interval={5000}>
                    {testimonials.map((item, index) => (
                        <Carousel.Item key={index}>
                            <div className="testimonial-content">
                                <p className="testimonial-text">"{item.text}"</p>
                                <span className="testimonial-author">{item.author}</span>
                                <span className="testimonial-role">{item.role}</span>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    );
};

export default Testimonials;
