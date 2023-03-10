import React from 'react';
import TopBanner from '../Components/TopBanner';
import Achievements from '../Sections/Achievements';
import BrandLogo from '../Sections/BrandLogo';
import FreeConsolations from '../Sections/FreeConsolations';
import HowCanHelpYou2 from '../Sections/HowCanHelpYou2';
import PopularItServices from '../Sections/PopularItServices';
import PopularItServices2 from '../Sections/PopularItServices2';

const Services = () => {
    return (
        <>
            <TopBanner pageName="Services" page="Services" imagePath="assets/img/page-banner-2.jpg" />
            <HowCanHelpYou2 />
            <PopularItServices />
            <Achievements extraClass="" />
            <PopularItServices2 />
            <BrandLogo />
            <FreeConsolations />
        </>
    );
};

export default Services;