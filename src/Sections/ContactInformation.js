import React from 'react';

const ContactInformation = () => {
    return (
        <section class="contact-page-wrap section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-contact-card card1">
                            <div class="top-part">
                                <div class="icon">
                                    <i class="fal fa-envelope"></i>
                                </div>
                                <div class="title">
                                    <h4>Email Address</h4>
                                    <span>Sent mail asap anytime</span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="info">
                                    <p>info@example.com</p>
                                    <p>jobs@example.com</p>
                                </div>
                                <div class="icon">
                                    <i class="fal fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-contact-card card2">
                            <div class="top-part">
                                <div class="icon">
                                    <i class="fal fa-phone"></i>
                                </div>
                                <div class="title">
                                    <h4>Phone Number</h4>
                                    <span>call us asap anytime</span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="info">
                                    <p>098-098-098-09</p>
                                    <p>+(098) 098-098-765</p>
                                </div>
                                <div class="icon">
                                    <i class="fal fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-contact-card card3">
                            <div class="top-part">
                                <div class="icon">
                                    <i class="fal fa-map-marker-alt"></i>
                                </div>
                                <div class="title">
                                    <h4>Office Address</h4>
                                    <span>Sent mail asap anytime</span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="info">
                                    <p>B2, Miranda City Tower</p>
                                    <p>New York, US</p>
                                </div>
                                <div class="icon">
                                    <i class="fal fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-12">
                        <div class="contact-map-wrap">
                            <div id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5457.875323165521!2d144.90402300269133!3d-37.792722838344716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612018663424!5m2!1sen!2sbd" frameborder="0" style={{ border: 0, width: '100%' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row section-padding pb-0">
                    <div class="col-12 text-center mb-20">
                        <div class="section-title">
                            <p>send us  message</p>
                            <h1>Don’t Hesited To Contact Us <br /> Say Hello or Message</h1>
                        </div>
                    </div>

                    <div class="col-12 col-lg-12">
                        <div class="contact-form">
                            <form action="#" class="row conact-form">
                                <div class="col-md-6 col-12">
                                    <div class="single-personal-info">
                                        <label for="fname">Full Name</label>
                                        <input type="text" id="fname" placeholder="Enter Name" />
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="single-personal-info">
                                        <label for="email">Email Address</label>
                                        <input type="email" id="email" placeholder="Enter Email Address" />
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="single-personal-info">
                                        <label for="phone">Phone Number</label>
                                        <input type="text" id="phone" placeholder="Enter Number" />
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="single-personal-info">
                                        <label for="subject">Subject</label>
                                        <input type="text" id="subject" placeholder="Enter Subject" />
                                    </div>
                                </div>
                                <div class="col-md-12 col-12">
                                    <div class="single-personal-info">
                                        <label for="subject">Enter Message</label>
                                        <textarea placeholder="Enter message"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12 col-12 text-center">
                                    <button type="submit" class="theme-btn">send  message <i class="fas fa-arrow-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInformation;