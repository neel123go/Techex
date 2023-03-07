import React from 'react';
import AboutCompany from '../Sections/AboutCompany';
import Banner from '../Sections/Banner';
import HowCanHelpYou from '../Sections/HowCanHelpYou';
import PopularItServices from '../Sections/PopularItServices';

const Home = () => {
    return (
        <>
            <Banner />
            <HowCanHelpYou />
            <AboutCompany />
            <PopularItServices />
        </>
    )
}

export default Home;