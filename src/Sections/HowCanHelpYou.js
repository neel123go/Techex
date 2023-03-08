import React from 'react';

const HowCanHelpYou = () => {
    return (
        <section className="features-wrapper features-1 section-padding  pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            <p>How can help you</p>
                            <h1>We Help Your IT Business</h1>
                        </div>
                    </div>
                </div>

                <div className="row mt-3 mt-lg-5">
                    <div className="col-xl-4 d-none d-xl-block">
                        <div className="features-banner mt-30 bg-cover"
                            style={{ backgroundImage: `url(../assets/img/home1/feature_img.jpg)` }}>
                        </div>
                    </div>
                    <div className="col-xl-8 col-12">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="single-features-item">
                                    <div className="icon">
                                        <i className="flaticon-speech-bubble"></i>
                                    </div>
                                    <div className="content">
                                        <h3>IT Consultancy</h3>
                                        <p>Faster & Smarter Solutions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="single-features-item">
                                    <div className="icon">
                                        <i className="flaticon-unlock"></i>
                                    </div>
                                    <div className="content">
                                        <h3>Cyber Security</h3>
                                        <p>Faster & Smarter Solutions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="single-features-item">
                                    <div className="icon">
                                        <i className="flaticon-mobile-app"></i>
                                    </div>
                                    <div className="content">
                                        <h3>Development</h3>
                                        <p>Faster & Smarter Solutions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="single-features-item">
                                    <div className="icon">
                                        <i className="flaticon-joystick"></i>
                                    </div>
                                    <div className="content">
                                        <h3>UX/UI Strategy</h3>
                                        <p>Faster & Smarter Solutions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="feature-cta bg-cover bg-center text-white"
                                    style={{ backgroundImage: `url(../assets/img/home1/wave.png)` }}>
                                    <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium
                                        doloremque laudantium totam rem aperiam eaque quae</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowCanHelpYou;