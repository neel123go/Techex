import React from 'react';
import TopBanner from '../Components/TopBanner';
import AboutUs from '../Sections/AboutUs';
import WhyChooseUs from '../Sections/WhyChooseUs';

const About = () => {
    return (
        <>
            <TopBanner pageName="About" page="About Us" />
            <AboutUs />
            <WhyChooseUs />
        </>
    );
};

export default About;