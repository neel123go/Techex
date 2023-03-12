import React from 'react';
import TopBanner from '../Components/TopBanner';
import AboutMe from '../Sections/AboutMe';
import Achievements from '../Sections/Achievements';
import BrandLogo from '../Sections/BrandLogo';
import FreeConsolations from '../Sections/FreeConsolations';
import LatestNewsAndBlogs from '../Sections/LatestNewsAndBlogs';

const TeamDetails = () => {
    return (
        <>
            <TopBanner page="Neel Paul" pageName="Team Details" imagePath="assets/img/page-banner-3.jpg" />
            <AboutMe />
            <Achievements extraClass="no-bg" />
            <LatestNewsAndBlogs />
            <BrandLogo />
            <FreeConsolations />
        </>
    );
};

export default TeamDetails;