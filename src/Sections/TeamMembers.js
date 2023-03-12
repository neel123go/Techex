import React from 'react';
import { Link } from 'react-router-dom';

const TeamMembers = () => {
    return (
        <section className="our-team-wrapper section-padding pb-0">
            <div className="container">
                <div className="row align-items-center mb-40">
                    <div className="col-12 col-md-6">
                        <div className="section-title">
                            <p>Exclusive Members</p>
                            <h1>Meet Our Experience Team Members</h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-md-0 text-md-right">
                        <Link to="team" className="theme-btn off-white">View all Member <i
                            className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>

                <div className="team-members-list row">
                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="single-team-member">
                            <div className="member-img bg-cover bg-center"
                                style={{ backgroundImage: `url(../assets/img/team/team1.jpg)` }}>
                            </div>
                            <div className="member-bio">
                                <h4>Wallace S. Camacho</h4>
                                <p>Business Manager</p>
                            </div>
                            <div className="social-profile">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-behance"></i></Link>
                                <Link to="#"><i className="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="single-team-member active">
                            <div className="member-img bg-cover bg-center"
                                style={{ backgroundImage: `url(../assets/img/team/team2.jpg)` }}>
                            </div>
                            <div className="member-bio">
                                <h4>Lawrence Pacheco</h4>
                                <p>Web Developer</p>
                            </div>
                            <div className="social-profile">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-behance"></i></Link>
                                <Link to="#"><i className="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="single-team-member">
                            <div className="member-img bg-cover bg-center"
                                style={{ backgroundImage: `url(../assets/img/team/team3.jpg)` }}>
                            </div>
                            <div className="member-bio">
                                <h4>Timothy L. Figueroa</h4>
                                <p>Business Manager</p>
                            </div>
                            <div className="social-profile">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-behance"></i></Link>
                                <Link to="#"><i className="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="single-team-member">
                            <div className="member-img bg-cover bg-center"
                                style={{ backgroundImage: `url(../assets/img/team/team5.jpg)` }}>
                            </div>
                            <div className="member-bio">
                                <h4>Michael L. Branch</h4>
                                <p>Product Manager</p>
                            </div>
                            <div className="social-profile">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-behance"></i></Link>
                                <Link to="#"><i className="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;