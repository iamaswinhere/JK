import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal';
import './Services.css';
import residentialImg from '../Assets/Residetialimg.png';
import commercialImg from '../Assets/commercialimg.png';
import furnitureImg from '../Assets/furniture.png';


const services = [
    {
        image: residentialImg,
        title: "Residential Design",
        description: "Crafting intimate and luxurious retreats tailored to your lifestyle and personal aesthetics.",
        link: "#"
    },
    {
        image: commercialImg,
        title: "Commercial Spaces",
        description: "Elevating brand identity through sophisticated and functional work environments.",
        link: "#"
    },
    {
        image: furnitureImg,
        title: "Furniture Curation",
        description: "Access to exclusive global collections and custom-built artisanal pieces.",
        link: "#"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = ({ onInquiry }) => {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedService, setSelectedService] = React.useState(null);

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    return (
        <div className="services-section" id="services">
            <Container>
                <div className="text-center mb-5">
                    <span className="services-pretitle">Excellence in Design</span>
                    <h2 className="services-title">Our Bespoke Services</h2>
                </div>
                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <Col md={6} lg={4} key={index}>
                            <motion.div className="service-card-new" variants={itemVariants}>
                                <div className="service-img-wrapper">
                                    <img src={service.image} alt={service.title} className="service-img" />
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <button
                                        className="service-link btn-link-custom"
                                        onClick={() => handleServiceClick(service)}
                                    >
                                        Explore <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </motion.div>
            </Container>

            <ServiceModal
                show={showModal}
                onHide={() => setShowModal(false)}
                service={selectedService}
                onInquiry={onInquiry}
            />
        </div>
    );
};

export default Services;
