import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-1 footer-wrap">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-3 col-12 pr-xl-4">
                            <div className="single-footer-wid site_footer_widget newsletter_widget">
                                <Link to="/">
                                    <img src="assets/img/logo.png" alt="" />
                                </Link>
                                <p className="mt-4">Sed ut perspiciatis unde omnis natus voluptatem accusa ntiumy doloremque
                                    laudantium.</p>
                                <div className="newsletter_box">
                                    <form action="#">
                                        <input type="email" placeholder="Email address" required />
                                        <button className="submit-btn" type="submit"><i
                                            className="fal fa-envelope-open-text"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-2 col-12">
                            <div className="single-footer-wid">
                                <div className="wid-title">
                                    <h4>Company</h4>
                                </div>
                                <ul>
                                    <li><Link to="about">About Us</Link></li>
                                    <li><Link to="about">Company History</Link></li>
                                    <li><Link to="contact-us">Need a Career</Link></li>
                                    <li><Link to="blogs">Blog Post</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid recent_post_widget">
                                <div className="wid-title">
                                    <h4>Latest News</h4>
                                </div>
                                <div className="recent-post-list">
                                    <div className="single-recent-post">
                                        <div className="thumb bg-cover"
                                            style={{ backgroundImage: `url(../assets/img/blog/b1.jpg)` }}></div>
                                        <div className="post-data">
                                            <span><i className="fal fa-calendar-alt"></i>24th Nov 2020</span>
                                            <h5><Link to="news-details.html">User’s Perspes Using Story Structure</Link></h5>
                                        </div>
                                    </div>
                                    <div className="single-recent-post">
                                        <div className="thumb bg-cover"
                                            style={{ backgroundImage: `url(../assets/img/blog/b2.jpg)` }}></div>
                                        <div className="post-data">
                                            <span><i className="fal fa-calendar-alt"></i>15th July 2021</span>
                                            <h5><Link to="news-details.html">Optimiz For Assistive Technology Users</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid contact_widget_2">
                                <div className="wid-title">
                                    <h4>Contact Us</h4>
                                </div>
                                <div className="contact-us">
                                    <div className="single-contact-info">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact-info">
                                            <p>256 Elizaberth Ave,
                                                Brooklyn, CA, 90025</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-info">
                                        <div className="icon">
                                            <i className="fas fa-envelope-open-text"></i>
                                        </div>
                                        <div className="contact-info">
                                            <p>info@supportexam.com</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-info">
                                        <div className="icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="contact-info">
                                            <p>+012 (345) 678 99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container text-center">
                    <div className="footer-bottom-content">
                        © 2023 <Link to="/">Techex</Link>. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;