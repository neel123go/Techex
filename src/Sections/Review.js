import React from 'react';

const Review = () => {
    return (
        <section className="testimonial-wrapper section-padding">
            <div className="testimonial-bg bg-cover"
                style={{ backgroundImage: `url(../assets/img/testi_bg.jpg)` }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 offset-lg-4 col-xl-5 offset-xl-7">
                        <div className="testimonial-carousel-active owl-carousel owl-theme">
                            <div className="single-testimonial">
                                <div className="icon">
                                    <i className="flaticon-right-quote"></i>
                                </div>
                                <h2>On the other hand denounc with
                                    ghteo indignation and dislike men
                                    who so beguiled and demoralized
                                    the charms of pleasure the momen
                                    blinded by desire cannot foresee
                                    the pain and trouble.</h2>
                                <div className="client-info">
                                    <div className="client-img bg-cover"
                                        style={{ backgroundImage: `url(../assets/img/home1/testi1.jpg)` }}></div>
                                    <div className="client-bio">
                                        <h3>Salman Ahmed</h3>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="single-testimonial">
                                <div className="icon">
                                    <i className="flaticon-right-quote"></i>
                                </div>
                                <h2>On the other hand denounc with
                                    ghteo indignation and dislike men
                                    who so beguiled and demoralized
                                    the charms of pleasure the momen
                                    blinded by desire cannot foresee
                                    the pain and trouble.</h2>
                                <div className="client-info">
                                    <div className="client-img bg-cover"
                                        style={{ backgroundImage: `url(../assets/img/home1/testi1.jpg)` }}></div>
                                    <div className="client-bio">
                                        <h3>Steven M. McLean</h3>
                                        <p>UI Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;