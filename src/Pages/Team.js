import React from 'react';
import TopBanner from '../Components/TopBanner';
import Achievements from '../Sections/Achievements';
import AllTeamMembers from '../Sections/AllTeamMembers';
import BrandLogo from '../Sections/BrandLogo';
import FreeConsolations from '../Sections/FreeConsolations';
import PopularItServices2 from '../Sections/PopularItServices2';

const Team = () => {
    return (
        <>
            <TopBanner pageName="Team" page="Our Team" imagePath="assets/img/page-banner-4.jpg" />
            <AllTeamMembers />
            <Achievements extraClass="no-bg" />
            <PopularItServices2 />
            <BrandLogo />
            <FreeConsolations />
        </>
    );
};

export default Team;