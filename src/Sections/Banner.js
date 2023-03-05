import React from 'react';
// import Hero1 from '../assets/img/home1/hero1.jpg';

const Banner = () => {
    return (
        <section className="hero-slide-wrapper hero-1">
            <div className="hero-slider-active owl-carousel">
                <div className="single-slide bg-cover">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xl-8 col-lg-10">
                                <div className="hero-contents">
                                    <h2>Solutions For</h2>
                                    <h1 className="fs-lg">IT Business</h1>
                                    <p>We Have 25 Years Of Experience In IT Solutions</p>
                                    <a href="services.html" className="theme-btn">Service we provide <i
                                        className="fas fa-arrow-right"></i></a>
                                    <a href="about.html" className="theme-btn minimal-btn">learn more <i
                                        className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-top-img d-none d-lg-block bg-overlay bg-cover"
                        style={{ backgroundImage: `url(../assets/img/home1/hero1.jpg)` }}></div>
                    <div className="slide-bottom-img d-none d-xl-block bg-overlay bg-cover"
                        style={{ backgroundImage: `url(../assets/img/home1/hero2.jpg)` }}></div>
                </div>
            </div>
        </section >
    );
};

export default Banner;