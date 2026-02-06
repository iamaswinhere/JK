import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactFocus.css';
import Contactimg from '../Assets/cnctimg.png'

const ContactFocus = ({ prefill }) => {
    const formRef = useRef();
    const [validated, setValidated] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [error, setError] = React.useState(null);

    // Controlled state for form fields to support autofill
    const [formData, setFormData] = React.useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        project_type: '',
        budget: '',
        message: ''
    });

    // Handle Autofill from Home/Services
    React.useEffect(() => {
        if (prefill) {
            setFormData(prev => ({
                ...prev,
                message: prefill.message || prev.message,
                project_type: prefill.type === 'inquiry' ? 'Residential' : prev.project_type
            }));
        }
    }, [prefill]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            const serviceID = 'service_jedlz6p';
            const templateID = 'template_cpejlv7';
            const publicKey = 'l1hFPXZ_9Yi1N2zq6';

            // EmailJS Integration
            emailjs.sendForm(
                serviceID,
                templateID,
                formRef.current,
                publicKey
            )
                .then((result) => {
                    console.log('Email successfully sent!', result.text);
                    setSubmitted(true);
                }, (error) => {
                    console.error('Failed to send email:', error);
                    setError(`Failed to send message: ${error.text || "Unknown error"}`);
                    setSubmitted(false);
                });
        }

        setValidated(true);
    };

    return (
        <div className="contact-focus-section" id="contact">

            {/* Left Side - Form */}
            <div className="contact-form-wrapper">
                <h2 className="contact-title">Design Your Dream Space</h2>
                <p className="contact-desc">
                    Ready to elevate your environment? Tell us about your project and our lead architect will reach out within 24 hours.
                </p>

                {submitted ? (
                    <div className="alert alert-success mt-4 d-flex align-items-center" role="alert">
                        <div>
                            <h4 className="alert-heading">Message Sent!</h4>
                            <p className="mb-0">Thank you for reaching out. We will be in touch shortly.</p>
                        </div>
                    </div>
                ) : error ? (
                    <div className="alert alert-danger mt-4" role="alert">
                        {error}
                        <Button variant="link" onClick={() => setError(null)}>Try Again</Button>
                    </div>
                ) : (
                    <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        required
                                        type="text"
                                        name="user_name"
                                        placeholder="Full Name"
                                        className="form-control-custom"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Select
                                        className="form-select-custom"
                                        name="project_type"
                                        value={formData.project_type}
                                        onChange={handleChange}
                                    >
                                        <option value="">Project Type</option>
                                        <option value="Residential">Residential</option>
                                        <option value="Commercial">Commercial</option>
                                        <option value="Renovation">Renovation</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        required
                                        type="email"
                                        name="user_email"
                                        placeholder="Email Address"
                                        className="form-control-custom"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        required
                                        type="tel"
                                        name="user_phone"
                                        placeholder="Phone Number"
                                        className="form-control-custom"
                                        value={formData.user_phone}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide your phone number.</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Select
                                        className="form-select-custom"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                    >
                                        <option value="">Budget Range</option>
                                        <option value="$50k - $100k">$50k - $100k</option>
                                        <option value="$100k - $500k">$100k - $500k</option>
                                        <option value="$500k+">$500k+</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                name="message"
                                placeholder="Briefly describe your vision..."
                                className="form-control-custom"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">Please tell us about your project.</Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100 d-flex justify-content-between align-items-center mt-3">
                            <span>Send Inquiry</span>
                            <ArrowRight size={20} />
                        </Button>
                    </Form>
                )}
            </div>

            <div className="contact-image-wrapper">
                <img
                    src={Contactimg}
                    alt="Architect working"
                    className="contact-bg-img"
                />
                {/* <div className="testimonial-overlay-card">
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-overlay-text">
                        "A seamless experience from initial sketch to final installation.
                        The attention to detail in every corner of our home is simply breath-taking."
                    </p>
                    <div className="testimonial-user">
                        <div className="user-avatar" style={{ backgroundImage: 'url(/Gemini_Generated_Image_81jmt381jmt381jm.png)', backgroundSize: 'cover' }}></div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Sarah Jenkins</div>
                            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>Private Estate Owner</div>
                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default ContactFocus;
