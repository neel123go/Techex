import React from 'react';
import TopBanner from '../Components/TopBanner';
import FreeConsolations from '../Sections/FreeConsolations';
import NewsFeed from '../Sections/NewsFeed';

const Blogs = () => {
    return (
        <>
            <TopBanner page="Blogs" pageName="Blogs" imagePath="assets/img/page-banner-3.jpg" />
            <NewsFeed />
            <FreeConsolations />
        </>
    );
};

export default Blogs;