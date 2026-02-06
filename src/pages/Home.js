import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ContactFocus from '../components/ContactFocus';
import Reveal from '../components/Reveal';

const Home = () => {
    const [inquiryPreset, setInquiryPreset] = React.useState(null);

    const handleInquiry = (serviceTitle) => {
        setInquiryPreset({
            type: 'inquiry',
            message: `I am interested in learning more about your ${serviceTitle} services.`
        });

        // Smooth scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Hero />
            <Reveal width="100%">
                <About />
            </Reveal>
            <Reveal width="100%">
                <Services onInquiry={handleInquiry} />
            </Reveal>
            {/* <Reveal width="100%">
                <Portfolio />
            </Reveal> */}
            <Reveal width="100%">
                <ContactFocus prefill={inquiryPreset} />
            </Reveal>
        </>
    );
};

export default Home;
