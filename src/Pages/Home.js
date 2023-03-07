import React from 'react';
import AboutCompany from '../Sections/AboutCompany';
import Banner from '../Sections/Banner';
import HowCanHelpYou from '../Sections/HowCanHelpYou';
import PopularItServices from '../Sections/PopularItServices';
import Achievements from '../Sections/Achievements';
import TeamMembers from '../Sections/TeamMembers';
import OurProjects from '../Sections/OurProjects';
import BrandLogo from '../Sections/BrandLogo';

const Home = () => {
    return (
        <>
            <Banner />
            <HowCanHelpYou />
            <AboutCompany />
            <PopularItServices />
            <Achievements />
            <TeamMembers />
            <OurProjects />
            <BrandLogo />
        </>
    )
}

export default Home;