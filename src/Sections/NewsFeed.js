import React from 'react';
import { Link } from 'react-router-dom';

const NewsFeed = () => {
    return (
        <section class="blog-wrapper news-wrapper section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div class="blog-posts">
                            <div class="single-blog-post">
                                <div class="post-featured-thumb bg-cover"
                                    style={{ backgroundImage: `url(../assets/img/blog/b1.jpg)` }}></div>
                                <div class="post-content">
                                    <h2><Link to="news-details">Beyond Tools How Building A Design System
                                        Can Improve How You Work</Link></h2>
                                    <div class="post-meta">
                                        <span><i class="fal fa-eye"></i>232 Views</span>
                                        <span><i class="fal fa-comments"></i>35 Comments</span>
                                        <span><i class="fal fa-calendar-alt"></i>24th March 2021</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <div class="d-flex justify-content-between align-items-center mt-30">
                                        <div class="author-info">
                                            <div class="author-img" style={{ backgroundImage: `url(../assets/img/blog/author_img.jpg)` }}></div>
                                            <h5><Link to="#">by Hetmayar</Link></h5>
                                        </div>
                                        <div class="post-link">
                                            <Link to="news-details"><i class="fal fa-arrow-right"></i> Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-blog-post">
                                <div class="post-featured-thumb bg-cover"
                                    style={{ backgroundImage: `url(../assets/img/blog/b2.jpg)` }}></div>
                                <div class="post-content">
                                    <h2><Link to="news-details">Adobe XD Contest: Create An App Prototype With Your City’s Best-Kept Secrets</Link></h2>
                                    <div class="post-meta">
                                        <span><i class="fal fa-eye"></i>232 Views</span>
                                        <span><i class="fal fa-comments"></i>35 Comments</span>
                                        <span><i class="fal fa-calendar-alt"></i>17th July 2020</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <div class="d-flex justify-content-between align-items-center mt-30">
                                        <div class="author-info">
                                            <div class="author-img"
                                                style={{ backgroundImage: `url(../assets/img/blog/author3.jpg)` }}></div>
                                            <h5><Link to="#">by Michael K. Steven</Link></h5>
                                        </div>
                                        <div class="post-link">
                                            <Link to="news-details"><i class="fal fa-arrow-right"></i> Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-blog-post format-video video-post">
                                <div class="post-featured-thumb bg-cover"
                                    style={{ backgroundImage: `url(../assets/img/blog/b3.jpg)` }}>
                                    <div class="video-play-btn">
                                        <Link to="https://www.youtube.com/watch?v=E1xkXZs0cAQ" class="play-video popup-video"><i class="fas fa-play"></i></Link>
                                    </div>
                                </div>
                                <div class="post-content">
                                    <h2><Link to="news-details">Beyond Tools How Building A Design System
                                        Can Improve How You Work</Link></h2>
                                    <div class="post-meta">
                                        <span><i class="fal fa-eye"></i>232 Views</span>
                                        <span><i class="fal fa-comments"></i>35 Comments</span>
                                        <span><i class="fal fa-calendar-alt"></i>12th May 2020</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <div class="d-flex justify-content-between align-items-center mt-30">
                                        <div class="author-info">
                                            <div class="author-img"
                                                style={{ backgroundImage: `url(../assets/img/blog/author_img.jpg)` }}></div>
                                            <h5><Link to="#">by Hetmayar</Link></h5>
                                        </div>
                                        <div class="post-link">
                                            <Link to="news-details"><i class="fal fa-arrow-right"></i> Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-blog-post">
                                <div class="post-featured-thumb bg-cover"
                                    style={{ backgroundImage: `url(../assets/img/blog/b4.jpg)` }}></div>
                                <div class="post-content">
                                    <h2><Link to="news-details">Designing For User Interfaces Icons As Visual Elements For Screen Design</Link></h2>
                                    <div class="post-meta">
                                        <span><i class="fal fa-eye"></i>232 Views</span>
                                        <span><i class="fal fa-comments"></i>35 Comments</span>
                                        <span><i class="fal fa-calendar-alt"></i>24th March 2019</span>
                                    </div>
                                    <p>Malnutrition is a condition that results from eating a diet lacking in nutrients. Malnutrition in children is especially harmful. The damage to physical and cognitive development during the first two years of a child’s life is largely irreversible.</p>
                                    <div class="d-flex justify-content-between align-items-center mt-30">
                                        <div class="author-info">
                                            <div class="author-img"
                                                style={{ backgroundImage: `url(../assets/img/blog/author_img.jpg)` }}></div>
                                            <h5><Link to="#">by Michael K. Steven</Link></h5>
                                        </div>
                                        <div class="post-link">
                                            <Link to="news-details"><i class="fal fa-arrow-right"></i> Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-blog-post quote-post format-quote">
                                <div class="post-content text-white bg-cover">
                                    <div class="quote-content">
                                        <div class="icon">
                                            <i class="fas fa-quote-left"></i>
                                        </div>
                                        <div class="quote-text">
                                            <h2>Excepteur sint occaecat cupida tat non proident, sunt in.</h2>
                                            <div class="post-meta">
                                                <span><i class="fal fa-eye"></i>232 Views</span>
                                                <span><i class="fal fa-comments"></i>35 Comments</span>
                                                <span><i class="fal fa-calendar-alt"></i>24th March 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page-nav-wrap mt-60 text-center">
                            <ul>
                                <li><Link to="#"><i class="fal fa-long-arrow-left"></i></Link></li>
                                <li><Link to="#">01</Link></li>
                                <li><Link to="#">02</Link></li>
                                <li><Link to="#">..</Link></li>
                                <li><Link to="#">10</Link></li>
                                <li><Link to="#">11</Link></li>
                                <li><Link to="#"><i class="fal fa-long-arrow-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="main-sidebar">
                            <div class="single-sidebar-widget author-box-widegts">
                                <div class="wid-title">
                                    <h3>About Me</h3>
                                </div>
                                <div class="author-info text-center">
                                    <div class="author-img"
                                        style={{ backgroundImage: `url(../assets/img/blog/author_img.jpg)` }}></div>
                                    <h4>Rosalina D. Willaimson</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <div class="social-profile">
                                        <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i class="fab fa-twitter"></i></Link>
                                        <Link to="#"><i class="fab fa-instagram"></i></Link>
                                        <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
                                        <Link to="#"><i class="fab fa-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h3>Search Objects</h3>
                                </div>
                                <div class="search_widget">
                                    <form action="#">
                                        <input type="text" placeholder="Search your keyword..." />
                                        <button type="submit"><i class="fal fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h3>Popular Feeds</h3>
                                </div>
                                <div class="popular-posts">
                                    <div class="single-post-item">
                                        <div class="thumb bg-cover"
                                            style={{ backgroundImage: `url(../assets/img/blog/pp1.jpg)` }}></div>
                                        <div class="post-content">
                                            <h5><Link to="news-details">Lorem ipsum dolor sit cing elit, sed do.</Link></h5>
                                            <div class="post-date">
                                                <i class="far fa-calendar-alt"></i>24th March 2019
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-post-item">
                                        <div class="thumb bg-cover"
                                            style={{ backgroundImage: `url(../assets/img/blog/pp2.jpg)` }}></div>
                                        <div class="post-content">
                                            <h5><Link to="news-details">Lorem ipsum dolor sit cing elit, sed do.</Link></h5>
                                            <div class="post-date">
                                                <i class="far fa-calendar-alt"></i>25th March 2019
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-post-item">
                                        <div class="thumb bg-cover"
                                            style={{ backgroundImage: `url(../assets/img/blog/pp3.jpg)` }}></div>
                                        <div class="post-content">
                                            <h5><Link to="news-details">Lorem ipsum dolor sit cing elit, sed do.</Link></h5>
                                            <div class="post-date">
                                                <i class="far fa-calendar-alt"></i>26th March 2019
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-post-item">
                                        <div class="thumb bg-cover"
                                            style={{ backgroundImage: `url(../assets/img/blog/pp4.jpg)` }}></div>
                                        <div class="post-content">
                                            <h5><Link to="news-details">Lorem ipsum dolor sit cing elit, sed do.</Link></h5>
                                            <div class="post-date">
                                                <i class="far fa-calendar-alt"></i>29th March 2019
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h3>Categories</h3>
                                </div>
                                <div class="widget_categories">
                                    <ul>
                                        <li><Link to="news">Consultant <span>23</span></Link></li>
                                        <li><Link to="news">Help <span>24</span></Link></li>
                                        <li><Link to="news">Education <span>11</span></Link></li>
                                        <li><Link to="news">Technology <span>05</span></Link></li>
                                        <li><Link to="news">business <span>06</span></Link></li>
                                        <li><Link to="news">Events <span>10</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h3>Never Miss News</h3>
                                </div>
                                <div class="social-link">
                                    <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                                    <Link to="#"><i class="fab fa-twitter"></i></Link>
                                    <Link to="#"><i class="fab fa-instagram"></i></Link>
                                    <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
                                    <Link to="#"><i class="fab fa-youtube"></i></Link>
                                </div>
                            </div>
                            <div class="single-sidebar-widget instagram-widget">
                                <div class="wid-title">
                                    <h3>Instagram Feeds</h3>
                                </div>
                                <div class="instagram-gallery">
                                    <Link to="assets/img/blog/ip1.jpg" class="single-photo-item bg-cover popup-gallery" style={{ backgroundImage: `url(../assets/img/blog/ip1.jpg)` }}>
                                    </Link>
                                    <Link to="assets/img/blog/ip2.jpg" class="single-photo-item bg-cover popup-gallery" style={{ backgroundImage: `url(../assets/img/blog/ip2.jpg)` }}>
                                    </Link>
                                    <Link to="assets/img/blog/ip3.jpg" class="single-photo-item bg-cover popup-gallery" style={{ backgroundImage: `url(../assets/img/blog/ip3.jpg)` }}>
                                    </Link>
                                    <Link to="assets/img/blog/ip4.jpg" class="single-photo-item bg-cover popup-gallery" style={{ backgroundImage: `url(../assets/img/blog/ip4.jpg)` }}>
                                    </Link>
                                    <Link to="assets/img/blog/ip5.jpg" class="single-photo-item bg-cover popup-gallery" style={{ backgroundImage: `url(../assets/img/blog/ip5.jpg)` }}>
                                    </Link>
                                    <Link to="assets/img/blog/ip7.jpg" class="single-photo-item bg-cover popup-gallery" style={{ backgroundImage: `url(../assets/img/blog/ip6.jpg)` }}>
                                    </Link>
                                </div>
                            </div>
                            <div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h3>Popular Tags</h3>
                                </div>
                                <div class="tagcloud">
                                    <Link to="#">event</Link>
                                    <Link to="#">help</Link>
                                    <Link to="#">ux</Link>
                                    <Link to="#">food</Link>
                                    <Link to="#">ui</Link>
                                    <Link to="#">water</Link>
                                    <Link to="#">charity</Link>
                                    <Link to="#">donate</Link>
                                </div>
                            </div>
                            <div class="sidebar-ad-widget">
                                <div class="ad-wraper">
                                    <Link to="#" target="_blank">
                                        <img src="assets/img/blog/blog-ad.jpg" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsFeed;