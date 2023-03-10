import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Header = () => {
    const [menu, setMenu] = useState(false);

    return (


        <div>
            <header className="header-wrap header-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-sm-5 col-xl-2">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-7 d-none d-xl-block">
                            <div className="main-menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="about">About</Link> </li>
                                    <li><Link to="services">Services</Link></li>
                                    <li><Link to="case-study">Case Study </Link></li>
                                    <li><Link to="news.html">News</Link></li>
                                    <li><Link to="contact.html">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 d-none d-sm-block pl-xl-0 text-right">
                            <Link to="contact.html" className="theme-btn">Consultancy <i className="fas fa-arrow-right"></i></Link>
                        </div>
                        <div className="mobile-nav-bar d-block col-sm-1 col-6 d-xl-none">
                            <div className="mobile-nav-wrap">
                                <div id="hamburger" onClick={() => setMenu(!menu)}>
                                    <i className="fal fa-bars"></i>
                                </div>

                                {/* mobile menu - responsive menu */}

                                <div className={menu === true ? 'mobile-nav show' : 'mobile-nav'}>
                                    <button type="button" onClick={() => setMenu(!menu)} className="close-nav">
                                        <i className="fal fa-times-circle"></i>
                                    </button>

                                    <nav className="sidebar-nav">
                                        <ul className="metismenu" id="mobile-menu">
                                            <li><Link to="#">Homes</Link></li>
                                            <li><Link to="about.html">about</Link></li>
                                            <li><Link to="services.html">services</Link></li>
                                            <li><Link to="#">Pages</Link></li>
                                            <li><Link to="news.html">News</Link></li>
                                            <li><Link to="contact.html">Contact</Link></li>
                                        </ul>
                                    </nav>

                                    <div className="action-bar">
                                        <Link to="mailto:modinatheme@gmail.com"><i className="fal fa-envelope-open-text"></i>info@webmail.com</Link>
                                        <Link to="tel:123-456-7890"><i className="fal fa-phone"></i>987-098-098-09</Link>
                                        <Link to="contact.html" className="d-btn theme-btn black">Consultancy</Link>
                                    </div>

                                </div>
                            </div>
                            <div className={menu === true ? 'overlay active' : 'overlay'}></div>
                        </div>
                    </div>
                </div>
            </header >
        </div>
    );
};

export default Header;