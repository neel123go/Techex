import React from 'react';
import TopBanner from '../Components/TopBanner';
import AboutUs from '../Sections/AboutUs';
import Achievements from '../Sections/Achievements';
import BrandLogo from '../Sections/BrandLogo';
import FreeConsolations from '../Sections/FreeConsolations';
import PopularItServices from '../Sections/PopularItServices';
import Review from '../Sections/Review';
import TeamMembers from '../Sections/TeamMembers';
import WhyChooseUs from '../Sections/WhyChooseUs';

const About = () => {
    return (
        <>
            <TopBanner pageName="About" page="About Us" />
            <AboutUs />
            <WhyChooseUs />
            <TeamMembers />
            <br />
            <br />
            <br />
            <br />
            <Achievements extraClass="bottom" />
            <PopularItServices />
            <Review />
            <BrandLogo />
            <FreeConsolations />
        </>
    );
};

export default About;