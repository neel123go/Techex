import React from 'react';

const AboutUs = () => {
    return (
        <section class="about-us-wrapper section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 pr-5">
                        <div class="section-title mb-30">
                            <p>About Company</p>
                            <h1>Get’s IT Solutions For <br />
                                Expert Consultants</h1>
                        </div>

                        <p class="pr-lg-5">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam.</p>

                        <div class="about-icon-box style-2">
                            <div class="icon">
                                <i class="fal fa-users"></i>
                            </div>
                            <div class="content">
                                <h3>Professinoal Consultants</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque</p>
                            </div>
                        </div>
                        <div class="about-icon-box style-2">
                            <div class="icon">
                                <i class="fal fa-bullseye-arrow"></i>
                            </div>
                            <div class="content">
                                <h3>Managed IT Solutions</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-6 pl-lg-5 mt-5 mt-lg-0 col-12">
                        <div class="about-right-img">
                            <span class="dot-circle"></span>
                            <div class="about-us-img bg-cover"
                                style={{ backgroundImage: `url(../assets/img/home1/about-us.jpg)` }}>
                            </div>
                            <span class="triangle-bottom-right"></span>
                        </div>
                    </div>
                </div>

                <div class="row mpt-50 pt-100">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-features-item">
                            <div class="icon">
                                <i class="flaticon-speech-bubble"></i>
                            </div>
                            <div class="content">
                                <h3>IT Consultancy</h3>
                                <p>Faster & Smarter Solutions</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-features-item">
                            <div class="icon">
                                <i class="flaticon-unlock"></i>
                            </div>
                            <div class="content">
                                <h3>Cyber Security</h3>
                                <p>Faster & Smarter Solutions</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-features-item">
                            <div class="icon">
                                <i class="flaticon-mobile-app"></i>
                            </div>
                            <div class="content">
                                <h3>Development</h3>
                                <p>Faster & Smarter Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;