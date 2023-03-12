import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <section class="team-member-wrapper section-padding">
            <div class="container">
                <div class="member-details-wrap">
                    <div class="row justify-content-between">

                        <div class="col-xl-4 col-12 col-lg-6">
                            <div class="member-card mr-0 mr-xl-3">
                                <div class="member-photo bg-cover" style={{ backgroundImage: `url(../assets/img/team/team3.jpg)` }}></div>
                                <div class="member-info">
                                    <h4>Wallace S. Camacho</h4>
                                    <p>Business Manager</p>
                                    <div class="social-link">
                                        <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i class="fab fa-twitter"></i></Link>
                                        <Link to="#"><i class="fab fa-behance"></i></Link>
                                        <Link to="#"><i class="fab fa-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 mt-5 col-lg-6 col-12 mt-lg-0">
                            <div class="member-about">
                                <div class="sec-title">
                                    <h2>Abuot Me</h2>
                                </div>
                                <p>Sed ut perspiciatis unde omnis natus sit voluptatem accusa ntium doloremque ntium totam rem aperiameaqueipsa quae inventore veritatis quasi architect beatae vitae dicta sunt explicabo.</p>
                                <p>Doloremque lauda ntium totam reameaq ueipsa quae inventore veritatis</p>

                                <div class="sec-title mt-4">
                                    <h2>Contact Me</h2>
                                </div>

                                <div class="member-contact-info mt-4">
                                    <div class="single-contact-info d-flex">
                                        <div class="icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div class="contact-info">
                                            <p>256 Elizaberth Ave, 90025</p>
                                        </div>
                                    </div>
                                    <div class="single-contact-info d-flex">
                                        <div class="icon">
                                            <i class="fas fa-envelope-open-text"></i>
                                        </div>
                                        <div class="contact-info">
                                            <p>info@supportexam.com</p>
                                        </div>
                                    </div>
                                    <div class="single-contact-info d-flex">
                                        <div class="icon">
                                            <i class="fas fa-phone"></i>
                                        </div>
                                        <div class="contact-info">
                                            <p>+012 (345) 678 99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 mt-5 col-lg-12 col-12 mt-xl-0">
                            <div class="member-skills">
                                <div class="sec-title">
                                    <h2>Skills</h2>
                                </div>
                                <p>Accusa ntium doloremque ntium totam rem aperiameaqueipsa quae  inventore veritatis quasi architect beatae</p>

                                <div class="single-skill-bar">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4>Product Engineering</h4>
                                        <span>95%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                                <div class="single-skill-bar">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4>Digital Solutions</h4>
                                        <span>85%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div class="single-skill-bar">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4>IT Consultancy</h4>
                                        <span>90%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div class="single-skill-bar">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4>UX/UI Strategy</h4>
                                        <span>70%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style={{ width: '70%' }}></div>
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

export default AboutMe;