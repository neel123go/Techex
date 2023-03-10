import React from 'react';
import AboutCompany from '../Sections/AboutCompany';
import Banner from '../Sections/Banner';
import HowCanHelpYou from '../Sections/HowCanHelpYou';
import PopularItServices from '../Sections/PopularItServices';
import Achievements from '../Sections/Achievements';
import TeamMembers from '../Sections/TeamMembers';
import OurProjects from '../Sections/OurProjects';
import BrandLogo from '../Sections/BrandLogo';
import PricingPlan from '../Sections/PricingPlan';
import Review from '../Sections/Review';
import LatestNewsAndBlogs from '../Sections/LatestNewsAndBlogs';
import FreeConsolations from '../Sections/FreeConsolations';

const Home = () => {
    return (
        <>
            <Banner />
            <HowCanHelpYou />
            <AboutCompany />
            <PopularItServices />
            <Achievements extraClass="" />
            <TeamMembers />
            <OurProjects />
            <BrandLogo />
            <PricingPlan />
            <Review />
            <LatestNewsAndBlogs />
            <FreeConsolations />
        </>
    )
}

export default Home;