import React from 'react';
import { Link } from 'react-router-dom';

const TeamMembers = () => {
    return (
        <section class="our-team-wrapper section-padding pb-0">
            <div class="container">
                <div class="row align-items-center mb-40">
                    <div class="col-12 col-md-6">
                        <div class="section-title">
                            <p>Exclusive Members</p>
                            <h1>Meet Our Experience Team Members</h1>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-3 mt-md-0 text-md-right">
                        <Link to="team.html" class="theme-btn off-white">View all Member <i
                            class="fas fa-arrow-right"></i></Link>
                    </div>
                </div>

                <div class="team-members-list row">
                    <div class="col-12 col-md-6 col-xl-3">
                        <div class="single-team-member">
                            <div class="member-img bg-cover bg-center"
                                style={{ backgroundImage: `url(../assets/img/team/team1.jpg)` }}>
                            </div>
                            <div class="member-bio">
                                <h4>Wallace S. Camacho</h4>
                                <p>Business Manager</p>
                            </div>
                            <div class="social-profile">
                                <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i class="fab fa-twitter"></i></Link>
                                <Link to="#"><i class="fab fa-behance"></i></Link>
                                <Link to="#"><i class="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-3">
                        <div class="single-team-member active">
                            <div class="member-img bg-cover bg-center"
                                style={{ backgroundImage: `url(../assets/img/team/team5.jpg)` }}>
                            </div>
                            <div class="member-bio">
                                <h4>Lawrence Pacheco</h4>
                                <p>Web Developer</p>
                            </div>
                            <div class="social-profile">
                                <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i class="fab fa-twitter"></i></Link>
                                <Link to="#"><i class="fab fa-behance"></i></Link>
                                <Link to="#"><i class="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-3">
                        <div class="single-team-member">
                            <div class="member-img bg-cover bg-center"
                                style={{ backgroundImage: `url(../assets/img/team/team3.jpg)` }}>
                            </div>
                            <div class="member-bio">
                                <h4>Timothy L. Figueroa</h4>
                                <p>Business Manager</p>
                            </div>
                            <div class="social-profile">
                                <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i class="fab fa-twitter"></i></Link>
                                <Link to="#"><i class="fab fa-behance"></i></Link>
                                <Link to="#"><i class="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-3">
                        <div class="single-team-member">
                            <div class="member-img bg-cover bg-center"
                                style={{ backgroundImage: `url(../assets/img/team/team4.jpg)` }}>
                            </div>
                            <div class="member-bio">
                                <h4>Michael L. Branch</h4>
                                <p>Product Manager</p>
                            </div>
                            <div class="social-profile">
                                <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i class="fab fa-twitter"></i></Link>
                                <Link to="#"><i class="fab fa-behance"></i></Link>
                                <Link to="#"><i class="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;