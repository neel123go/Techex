import React from 'react';
import TopBanner from '../Components/TopBanner';
import AboutUs from '../Sections/AboutUs';

const About = () => {
    return (
        <>
            <TopBanner pageName="About" page="About Us" />
            <AboutUs />
        </>
    );
};

export default About;