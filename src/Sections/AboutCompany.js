import React from 'react';

const AboutCompany = () => {
    return (
        <section class="about-us-wrapper section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 pr-lg-5 order-2 order-lg-1 mt-5 mt-lg-0">
                        <div class="section-title mb-30">
                            <p>About Company</p>
                            <h1>Get’s IT Solutions For <br />
                                Expert Consultants</h1>
                        </div>

                        <p class="pr-5">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque
                            laudantium totam rem aperiamea queipsa quae abillo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.</p>

                        <div class="about-icon-box">
                            <div class="icon">
                                <i class="fal fa-users"></i>
                            </div>
                            <div class="content">
                                <h3>Professinoal Consultants</h3>
                                <p>Quis autem vel eum iure reprehenderit
                                    quin voluptate velit esse quam</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 pl-lg-5 col-12 order-1 order-lg-2">
                        <span class="dot-circle"></span>
                        <div class="about-us-img bg-cover"
                            style={{ backgroundImage: `url(../assets/img/home1/about-us.jpg)` }}>
                        </div>
                        <span class="triangle-bottom-right"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;