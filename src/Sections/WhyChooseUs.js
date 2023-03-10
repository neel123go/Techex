import React from 'react';

const WhyChooseUs = () => {
    return (
        <section class="faq-section section-padding">
            <div class="faq-bg bg-cover d-none d-lg-block"
                style={{ backgroundImage: `url(../assets/img/faq_home_2.jpg)` }}></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-6 offset-lg-6 offset-xl-7">
                        <div class="col-12 col-lg-12 mb-40">
                            <div class="section-title">
                                <p>Why choose us</p>
                                <h1>Innovating Solutions <br /> Digital Mindset</h1>
                            </div>
                        </div>

                        <div class="faq-content">
                            <div class="faq-accordion">
                                <div id="accordion" class="accordion">
                                    <div class="card">
                                        <div class="card-header" id="faq1">
                                            <p class="mb-0 text-capitalize">
                                                <a class="collapsed" role="button" data-toggle="collapse" aria-expanded="false" href="#faq-1">
                                                    Can I Get Internet In My Area?
                                                </a>
                                            </p>
                                        </div>
                                        <div id="faq-1" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faq2">
                                            <p class="mb-0 text-capitalize">
                                                <a class="collapsed" role="button" data-toggle="collapse" aria-expanded="true" href="#faq-2">
                                                    How Helping Solve Climate Change ?
                                                </a>
                                            </p>
                                        </div>
                                        <div id="faq-2" class="collapse show" data-parent="#accordion">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <p class="mb-0 text-capitalize">
                                                <a class="collapsed" role="button" data-toggle="collapse" aria-expanded="false" href="#faq-3">
                                                    How To Integrate Social Mobile Web ?
                                                </a>
                                            </p>
                                        </div>
                                        <div id="faq-3" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <p class="mb-0 text-capitalize">
                                                <a class="collapsed" role="button" data-toggle="collapse" aria-expanded="false" href="#faq-4">
                                                    Mobile Emails Increase Conversion ?
                                                </a>
                                            </p>
                                        </div>
                                        <div id="faq-4" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin
                                            </div>
                                        </div>
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

export default WhyChooseUs;