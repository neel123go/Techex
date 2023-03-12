import React from 'react';
import TopBanner from '../Components/TopBanner';
import BrandLogo from '../Sections/BrandLogo';
import FreeConsolations from '../Sections/FreeConsolations';
import OurProjects from '../Sections/OurProjects';

const Portfolio = () => {
    return (
        <>
            <TopBanner pageName="Portfolio" page="Portfolio Projects" imagePath="assets/img/page-banner-1.jpg" />
            <OurProjects />
            <BrandLogo />
            <FreeConsolations />
        </>
    );
};

export default Portfolio;