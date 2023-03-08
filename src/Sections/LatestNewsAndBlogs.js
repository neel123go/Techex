import React from 'react';
import { Link } from 'react-router-dom';

const LatestNewsAndBlogs = () => {
  return (
    <section className="blog-section section-padding bg-contain" style={{ backgroundImage: `url(../assets/img/blog_bg.png)` }}>
      <div className="container">
        <div className="row mb-30">
          <div className="col-12 col-lg-12">
            <div className="section-title text-center">
              <p>Latest News & Blog</p>
              <h1>Get Every Single Updates</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6 col-12">
            <div className="single-blog-card">
              <div className="blog-featured-thumb bg-cover"
                style={{ backgroundImage: `url(../assets/img/blog1.jpg)` }}>
              </div>
              <div className="content">
                <div className="post-author">
                  <Link to="news-details.html"><i className="fal fa-user-circle"></i> Michael K. Steven</Link>
                </div>
                <h3><Link to="news-details.html">Make Honest Design Work As For Digital Business.</Link></h3>
                <div className="btn-link-share">
                  <Link to="news-details.html" className="theme-btn minimal-btn">read more <i
                    className="fas fa-arrow-right"></i></Link>
                  <Link to="#"><i className="fal fa-share-alt"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="single-blog-card active">
              <div className="blog-featured-thumb bg-cover"
                style={{ backgroundImage: `url(../assets/img/blog2.jpg)` }}>
              </div>
              <div className="content">
                <div className="post-author">
                  <Link to="news-details.html"><i className="fal fa-user-circle"></i> Salman Ahmed</Link>
                </div>
                <h3><Link to="news-details.html">Should You Do When A Webs Design Trend Becomes</Link></h3>
                <div className="btn-link-share">
                  <Link to="news-details.html" className="theme-btn minimal-btn">read more <i
                    className="fas fa-arrow-right"></i></Link>
                  <Link to="#"><i className="fal fa-share-alt"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="single-blog-card">
              <div className="blog-featured-thumb bg-cover"
                style={{ backgroundImage: `url(../assets/img/blog3.jpg)` }}>
              </div>
              <div className="content">
                <div className="post-author">
                  <Link to="news-details.html"><i className="fal fa-user-circle"></i> Michael K. Steven</Link>
                </div>
                <h3><Link to="news-details.html">How To Space And Kern Punct Marks Other Symbols</Link></h3>
                <div className="btn-link-share">
                  <Link to="news-details.html" className="theme-btn minimal-btn">read more <i
                    className="fas fa-arrow-right"></i></Link>
                  <Link to="#"><i className="fal fa-share-alt"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsAndBlogs;