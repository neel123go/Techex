import React, { useState } from 'react';
import Logo from '../../../assets/img/logo.png';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [homeSubMenu, setHomeSubMenu] = useState(false);
    const [pageSubMenu, setPageSubMenu] = useState(false);

    return (
        <header className="header-wrap header-1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 col-sm-5 col-xl-2">
                        <div className="logo">
                            <a href="index.html">
                                <img src={Logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7 d-none d-xl-block">
                        <div className="main-menu">
                            <ul>
                                <li><a href="#">Home <i className="fas fa-angle-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="index.html">home 1</a></li>
                                        <li><a href="index-2.html">home 2</a></li>
                                        <li><a href="index-3.html">home 3</a></li>
                                        <li><a href="index-4.html">home 4</a></li>
                                        <li><a href="index-5.html">home 5</a></li>
                                        <li><a href="index-6.html">home 6</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a> </li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="#">Pages <i className="fas fa-angle-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="cases-grid.html">case grid</a></li>
                                        <li><a href="project-details.html">case details</a></li>
                                        <li><a href="faq.html">faq</a></li>
                                        <li><a href="team.html">team</a></li>
                                        <li><a href="case-2.html">case two</a></li>
                                    </ul>
                                </li>
                                <li><a href="news.html">News</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 d-none d-sm-block pl-xl-0 text-right">
                        <a href="contact.html" className="theme-btn">Consultancy <i className="fas fa-arrow-right"></i></a>
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
                                        <li><a className="has-arrow" href="#" onClick={() => setHomeSubMenu(!homeSubMenu)}>Homes</a>
                                            {homeSubMenu ? <ul className="sub-menu">
                                                <li><a href="index.html">Homepage 1</a></li>
                                                <li><a href="index-2.html">Homepage 2</a></li>
                                                <li><a href="index-3.html">Homepage 3</a></li>
                                                <li><a href="index-4.html">Homepage 4</a></li>
                                                <li><a href="index-5.html">Homepage 5</a></li>
                                                <li><a href="index-6.html">Homepage 6</a></li>
                                            </ul> : ''}
                                        </li>
                                        <li><a href="about.html">about</a></li>
                                        <li><a href="services.html">services</a></li>
                                        <li>
                                            <a className="has-arrow" onClick={() => setPageSubMenu(!pageSubMenu)} href="#">Pages</a>
                                            {pageSubMenu ? <ul className="sub-menu">
                                                <li><a href="faq.html">faq</a></li>
                                                <li><a href="services-details.html">services details</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="cases-grid.html">Case Grid</a></li>
                                                <li><a href="case-2.html">Case Grid 2</a></li>
                                            </ul> : ''}
                                        </li>
                                        <li><a href="news.html">News</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>

                                <div className="action-bar">
                                    <a href="mailto:modinatheme@gmail.com"><i className="fal fa-envelope-open-text"></i>info@webmail.com</a>
                                    <a href="tel:123-456-7890"><i className="fal fa-phone"></i>987-098-098-09</a>
                                    <a href="contact.html" className="d-btn theme-btn black">Consultancy</a>
                                </div>

                            </div>
                        </div>
                        <div className={menu === true ? 'overlay active' : 'overlay'}></div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;