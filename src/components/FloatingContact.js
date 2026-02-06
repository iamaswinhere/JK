import React from 'react';
import { RiWhatsappFill, RiPhoneFill } from 'react-icons/ri';
import './FloatingContact.css';

const FloatingContact = () => {
    const phoneNumber = "+919847389972";
    const whatsappNumber = "9847389972";

    return (
        <div className="floating-contact-container">
            <a
                href={`https://wa.me/${whatsappNumber}`}
                className="floating-btn whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <RiWhatsappFill size={30} />
                <span className="tooltip-text">Chat with Us</span>
            </a >

            <a
                href={`tel:${phoneNumber}`}
                className="floating-btn call-btn"
                aria-label="Call Us"
            >
                <RiPhoneFill size={24} />
                <span className="tooltip-text">Call Now</span>
            </a>
        </div >
    );
};

export default FloatingContact;
