import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';
import './ProjectModal.css';

const ProjectModal = ({ show, onHide, project }) => {
    return (
        <AnimatePresence>
            <Modal
                show={show}
                onHide={onHide}
                size="xl"
                centered
                className="project-modal"
                dialogClassName="modal-90w"
                contentClassName="premium-modal-content"
            >
                {project && (
                    <Modal.Body className="p-0">
                        <Button className="custom-close-btn" onClick={onHide}>
                            <RiCloseLine size={32} />
                        </Button>
                        <Row className="g-0 h-100">
                            <Col lg={8} className="p-0 overflow-hidden">
                                <motion.div
                                    className="modal-img-wrapper"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="img-fluid w-100 h-100 object-fit-cover"
                                    />
                                </motion.div>
                            </Col>
                            <Col lg={4} className="d-flex flex-column justify-content-center">
                                <motion.div
                                    className="modal-content-details p-5"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <h5 className="modal-category text-uppercase text-muted tracking-wide mb-2">{project.category}</h5>
                                    <h2 className="modal-title display-6 mb-4">{project.title}</h2>

                                    <p className="project-description mb-5">
                                        Experience the essence of <strong>{project.title}</strong>.
                                        This project represents our commitment to blending functionality with aesthetic perfection.
                                        Every corner is designed to tell a story of luxury and comfort.
                                    </p>

                                    <div className="project-meta">
                                        <div className="meta-item border-bottom py-2 d-flex justify-content-between">
                                            <strong>Client</strong> <span>Private Commission</span>
                                        </div>
                                        <div className="meta-item border-bottom py-2 d-flex justify-content-between">
                                            <strong>Completed</strong> <span>2024</span>
                                        </div>
                                        <div className="meta-item border-bottom py-2 d-flex justify-content-between">
                                            <strong>Location</strong> <span>New York, NY</span>
                                        </div>
                                    </div>

                                    <Button variant="outline-dark" className="mt-5 w-100 rounded-0 py-3 text-uppercase tracking-wide" onClick={onHide}>
                                        View Case Study
                                    </Button>
                                </motion.div>
                            </Col>
                        </Row>
                    </Modal.Body>
                )}
            </Modal>
        </AnimatePresence>
    );
};

export default ProjectModal;
