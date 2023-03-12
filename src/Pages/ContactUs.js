import React from 'react';
import TopBanner from '../Components/TopBanner';
import ContactInformation from '../Sections/ContactInformation';
import FreeConsolations from '../Sections/FreeConsolations';

const ContactUs = () => {
    return (
        <>
            <TopBanner page="Contact" pageName="Contact Us" imagePath="assets/img/page-banner-3.jpg" />
            <ContactInformation />
            <FreeConsolations />
        </>
    );
};

export default ContactUs;