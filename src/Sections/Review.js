import React from 'react';

const Review = () => {
    return (
        <section class="testimonial-wrapper section-padding">
            <div class="testimonial-bg bg-cover"
                style={{ backgroundImage: `url(../assets/img/testi_bg.jpg)` }}></div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8 offset-lg-4 col-xl-5 offset-xl-7">
                        <div class="testimonial-carousel-active owl-carousel owl-theme">
                            <div class="single-testimonial">
                                <div class="icon">
                                    <i class="flaticon-right-quote"></i>
                                </div>
                                <h2>On the other hand denounc with
                                    ghteo indignation and dislike men
                                    who so beguiled and demoralized
                                    the charms of pleasure the momen
                                    blinded by desire cannot foresee
                                    the pain and trouble.</h2>
                                <div class="client-info">
                                    <div class="client-img bg-cover"
                                        style={{ backgroundImage: `url(../assets/img/home1/testi1.jpg)` }}></div>
                                    <div class="client-bio">
                                        <h3>Salman Ahmed</h3>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>

                            <div class="single-testimonial">
                                <div class="icon">
                                    <i class="flaticon-right-quote"></i>
                                </div>
                                <h2>On the other hand denounc with
                                    ghteo indignation and dislike men
                                    who so beguiled and demoralized
                                    the charms of pleasure the momen
                                    blinded by desire cannot foresee
                                    the pain and trouble.</h2>
                                <div class="client-info">
                                    <div class="client-img bg-cover"
                                        style={{ backgroundImage: `url(../assets/img/home1/testi1.jpg)` }}></div>
                                    <div class="client-bio">
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