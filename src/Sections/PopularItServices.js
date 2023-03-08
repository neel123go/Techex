import React from 'react';

const PopularItServices = () => {
    return (
        <section className="services-wrapper service-1 section-padding section-bg">
            <div className="container">
                <div className="row mb-4 mb-lg-5">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-white text-center">
                            <p>Popular IT services</p>
                            <h1>Our Professional Solutions <br />
                                For IT Business</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-xl-3 col-12">
                        <div className="single-service-item">
                            <div className="icon">
                                <img src="assets/img/icon/sicon1.png" alt="service" />
                            </div>
                            <h4>Manage IT Services</h4>
                            <p>Sed perspicias unde omnis natus error volute</p>
                            <a href="services-details.html">learn more <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 col-12">
                        <div className="single-service-item">
                            <div className="icon">
                                <img src="assets/img/icon/sicon2.png" alt="service" />
                            </div>
                            <h4>Product Engineering</h4>
                            <p>Sed perspicias unde omnis natus error volute</p>
                            <a href="services-details.html">learn more <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 col-12">
                        <div className="single-service-item">
                            <div className="icon">
                                <img src="assets/img/icon/sicon3.png" alt="service" />
                            </div>
                            <h4>Web Development</h4>
                            <p>Sed perspicias unde omnis natus error volute</p>
                            <a href="services-details.html">learn more <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 col-12">
                        <div className="single-service-item">
                            <div className="icon">
                                <img src="assets/img/icon/sicon4.png" alt="service" />
                            </div>
                            <h4>Digital Solutions</h4>
                            <p>Sed perspicias unde omnis natus error volute</p>
                            <a href="services-details.html">learn more <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularItServices;