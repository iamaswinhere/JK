import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';
import './Portfolio.css';
import Kitimg from '../Assets/kitchimg.png'
import Bathimg from '../Assets/bathimg.png'
import Ghdine from '../Assets/Ghdine.png'
import Livingroom from '../Assets/Livingroom.png'
import Terrace from '../Assets/Teraceliving.png'
import Artspace from '../Assets/artspace.png'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Portfolio = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const handleProjectClick = (title, category, image) => {
        setSelectedProject({ title, category, image });
        setShowModal(true);
    };

    return (
        <div className="portfolio-section" id="portfolio">
            <Container>
                <div className="portfolio-header">
                    <div>
                        <h2 className="portfolio-section-title">Portfolio Highlights</h2>
                        <p className="portfolio-subtitle">Selected works from our global studio</p>
                    </div>
                    <Link to="/portfolio" className="portfolio-link-all">View All Projects</Link>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <Row>
                        {/* Left Large Column */}
                        <Col lg={5} className="mb-4 mb-lg-0">
                            <motion.div
                                className="portfolio-grid-item ratio-tall"
                                variants={itemVariants}
                                onClick={() => handleProjectClick("Nordic Minimalism", "Residential", Kitimg)}
                            >
                                <img src={Kitimg} alt="Kitchen" className="portfolio-img" />
                                <div className="portfolio-info">
                                    <h4>Nordic Minimalism</h4>
                                    <span>Residential</span>
                                </div>
                            </motion.div>
                        </Col>

                        {/* Right Column Grid */}
                        <Col lg={7}>
                            <Row>
                                <Col md={6}>
                                    <motion.div
                                        className="portfolio-grid-item ratio-sq"
                                        variants={itemVariants}
                                        onClick={() => handleProjectClick("Marble Sanctuary", "Bath", Bathimg)}
                                    >
                                        <img src={Bathimg} alt="Bath" className="portfolio-img" />
                                        <div className="portfolio-info">
                                            <h4>Marble Sanctuary</h4>
                                            <span>Bath</span>
                                        </div>
                                    </motion.div>
                                </Col>
                                <Col md={6}>
                                    <motion.div
                                        className="portfolio-grid-item ratio-sq"
                                        variants={itemVariants}
                                        onClick={() => handleProjectClick("Golden Hour Dining", "Hospitality", Ghdine)}
                                    >
                                        <img src={Ghdine} alt="Dining" className="portfolio-img" />
                                        <div className="portfolio-info">
                                            <h4>Golden Hour Dining</h4>
                                            <span>Hospitality</span>
                                        </div>
                                    </motion.div>
                                </Col>
                            </Row>
                            <motion.div
                                className="portfolio-grid-item ratio-wide mt-3"
                                variants={itemVariants}
                                onClick={() => handleProjectClick("Urban Loft Scale", "Living", Livingroom)}
                            >
                                <img src={Livingroom} alt="Living" className="portfolio-img" />
                                <div className="portfolio-info">
                                    <h4>Urban Loft Scale</h4>
                                    <span>Living</span>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col md={6}>
                            <motion.div
                                className="portfolio-grid-item ratio-wide"
                                variants={itemVariants}
                                onClick={() => handleProjectClick("Terrace Living", "Outdoor", Terrace)}
                            >
                                <img src={Terrace} alt="Outdoor" className="portfolio-img" />
                                <div className="portfolio-info">
                                    <h4>Terrace Living</h4>
                                    <span>Outdoor</span>
                                </div>
                            </motion.div>
                        </Col>
                        <Col md={6}>
                            <motion.div
                                className="portfolio-grid-item ratio-wide"
                                variants={itemVariants}
                                onClick={() => handleProjectClick("Art & Space", "Commercial", Artspace)}
                            >
                                <img src={Artspace} alt="Art" className="portfolio-img" />
                                <div className="portfolio-info">
                                    <h4>Art & Space</h4>
                                    <span>Commercial</span>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>

            <ProjectModal
                show={showModal}
                onHide={() => setShowModal(false)}
                project={selectedProject}
            />
        </div>
    );
};

export default Portfolio;
