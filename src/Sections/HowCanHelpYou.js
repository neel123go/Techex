import React from 'react';

const HowCanHelpYou = () => {
    return (
        <section class="features-wrapper features-1 section-padding  pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <div class="section-title text-center">
                            <p>How can help you</p>
                            <h1>We Help Your IT Business</h1>
                        </div>
                    </div>
                </div>

                <div class="row mt-3 mt-lg-5">
                    <div class="col-xl-4 d-none d-xl-block">
                        <div class="features-banner mt-30 bg-cover"
                            style={{ backgroundImage: `url(../assets/img/home1/feature_img.jpg)` }}>
                        </div>
                    </div>
                    <div class="col-xl-8 col-12">
                        <div class="row">
                            <div class="col-md-6 col-12">
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
                            <div class="col-md-6 col-12">
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
                            <div class="col-md-6 col-12">
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
                            <div class="col-md-6 col-12">
                                <div class="single-features-item">
                                    <div class="icon">
                                        <i class="flaticon-joystick"></i>
                                    </div>
                                    <div class="content">
                                        <h3>UX/UI Strategy</h3>
                                        <p>Faster & Smarter Solutions</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="feature-cta bg-cover bg-center text-white"
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