import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import './ServiceModal.css';

const ServiceModal = ({ show, onHide, service, onInquiry }) => {
    return (
        <AnimatePresence>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
                className="service-modal"
                contentClassName="premium-service-content"
            >
                {service && (
                    <Modal.Body className="p-0 position-relative overflow-hidden">
                        <Button className="custom-close-btn-service" onClick={onHide}>
                            <RiCloseLine size={32} />
                        </Button>

                        <div className="service-modal-hero position-relative">
                            <motion.img
                                src={service.image}
                                alt={service.title}
                                className="w-100 h-100 object-fit-cover"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                            <div className="service-overlay-gradient"></div>
                            <motion.div
                                className="service-title-wrapper"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="display-5 text-white mb-0">{service.title}</h2>
                            </motion.div>
                        </div>

                        <div className="p-5">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h5 className="text-uppercase tracking-wide text-muted mb-4">Our Approach</h5>
                                <p className="lead text-dark mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {service.description} We believe that {service.title.toLowerCase()} should not only look stunning but also function seamlessly.
                                    Our team works closely with you to understand your unique needs and translate them into a reality that exceeds expectations.
                                </p>

                                <h5 className="text-uppercase tracking-wide text-muted mb-4">What We Offer</h5>
                                <ul className="service-features-grid">
                                    {['Customized Design Strategy', 'Premium Material Selection', 'End-to-End Project Management', 'Post-Completion Support'].map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + (idx * 0.1) }}
                                        >
                                            <span className="icon-wrapper"><FaCheck size={16} /></span>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="text-center mt-5 pt-4 border-top">
                                    <Button
                                        variant="dark"
                                        size="lg"
                                        className="rounded-0 px-5 py-3"
                                        onClick={() => {
                                            if (onInquiry) onInquiry(service.title);
                                            onHide();
                                        }}
                                    >
                                        Request Consultation
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </Modal.Body>
                )}
            </Modal>
        </AnimatePresence>
    );
};

export default ServiceModal;
