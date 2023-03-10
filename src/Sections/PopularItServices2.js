import React from 'react';
import { Link } from 'react-router-dom';

const PopularItServices2 = () => {
    return (
        <section class="our-skill-wrapper section-padding">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-xl-5">
                        <div class="section-title">
                            <p>Popular IT services</p>
                            <h1>Our Professional Solutions <br />
                                For IT Business</h1>
                        </div>
                        <p class="mt-20">Sed ut perspiciatis omnis natus error sit voluptatem accusan doloremque laudantium totam rem aperiam</p>

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

                    <div class="col-lg-5 offset-lg-1 col-xl-5 offset-xl-2">
                        <div class="skill-banner mt-5 mt-lg-0">
                            <img src="assets/img/skill_freatured_img.jpg" alt="" />
                            <div class="skill-popup-video d-flex justify-content-center align-items-center bg-cover"
                                style={{ backgroundImage: `url(../assets/img/skill_video_bg.jpg)` }}>
                                <div class="video-play-btn">
                                    <a href="https://www.youtube.com/watch?v=YUFcJiq2KMI" class="popup-video"><i class="fas fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularItServices2;