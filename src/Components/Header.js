import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [homeSubMenu, setHomeSubMenu] = useState(false);
    const [pageSubMenu, setPageSubMenu] = useState(false);

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
                                    <li><Link to="/">Home <i className="fas fa-angle-down"></i></Link>
                                        <ul className="sub-menu">
                                            <li><Link to="">home 1</Link></li>
                                            <li><Link to="">home 2</Link></li>
                                            <li><Link to="">home 3</Link></li>
                                            <li><Link to="">home 4</Link></li>
                                            <li><Link to="">home 5</Link></li>
                                            <li><Link to="">home 6</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="about">About</Link> </li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="#">Pages <i className="fas fa-angle-down"></i></Link>
                                        <ul className="sub-menu">
                                            <li><Link to="">case grid</Link></li>
                                            <li><Link to="">case details</Link></li>
                                            <li><Link to="">faq</Link></li>
                                            <li><Link to="">team</Link></li>
                                            <li><Link to="">case two</Link></li>
                                        </ul>
                                    </li>
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
                                            <li><Link className="has-arrow" to="#" onClick={() => setHomeSubMenu(!homeSubMenu)}>Homes</Link>
                                                {homeSubMenu ? <ul className="sub-menu">
                                                    <li><a href="index.html">Homepage 1</a></li>
                                                    <li><a href="index-2.html">Homepage 2</a></li>
                                                    <li><a href="index-3.html">Homepage 3</a></li>
                                                    <li><a href="index-4.html">Homepage 4</a></li>
                                                    <li><a href="index-5.html">Homepage 5</a></li>
                                                    <li><a href="index-6.html">Homepage 6</a></li>
                                                </ul> : ''}
                                            </li>
                                            <li><Link to="about.html">about</Link></li>
                                            <li><Link to="services.html">services</Link></li>
                                            <li>
                                                <Link className="has-arrow" onClick={() => setPageSubMenu(!pageSubMenu)} to="#">Pages</Link>
                                                {pageSubMenu ? <ul className="sub-menu">
                                                    <li><Link to="faq.html">faq</Link></li>
                                                    <li><Link to="services-details.html">services details</Link></li>
                                                    <li><Link to="team.html">Team</Link></li>
                                                    <li><Link to="cases-grid.html">Case Grid</Link></li>
                                                    <li><Link to="case-2.html">Case Grid 2</Link></li>
                                                </ul> : ''}
                                            </li>
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