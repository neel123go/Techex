import React from 'react';
import { Link } from 'react-router-dom';

const LatestNewsAndBlogs = () => {
  return (
    <section class="blog-section section-padding bg-contain" style={{ backgroundImage: `url(../assets/img/blog_bg.png)` }}>
      <div class="container">
        <div class="row mb-30">
          <div class="col-12 col-lg-12">
            <div class="section-title text-center">
              <p>Latest News & Blog</p>
              <h1>Get Every Single Updates</h1>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4 col-md-6 col-12">
            <div class="single-blog-card">
              <div class="blog-featured-thumb bg-cover"
                style={{ backgroundImage: `url(../assets/img/blog1.jpg)` }}>
              </div>
              <div class="content">
                <div class="post-author">
                  <Link to="news-details.html"><i class="fal fa-user-circle"></i> Michael K. Steven</Link>
                </div>
                <h3><Link to="news-details.html">Make Honest Design Work As For Digital Business.</Link></h3>
                <div class="btn-link-share">
                  <Link to="news-details.html" class="theme-btn minimal-btn">read more <i
                    class="fas fa-arrow-right"></i></Link>
                  <Link to="#"><i class="fal fa-share-alt"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-12">
            <div class="single-blog-card active">
              <div class="blog-featured-thumb bg-cover"
                style={{ backgroundImage: `url(../assets/img/blog2.png)` }}>
              </div>
              <div class="content">
                <div class="post-author">
                  <Link to="news-details.html"><i class="fal fa-user-circle"></i> Salman Ahmed</Link>
                </div>
                <h3><Link to="news-details.html">Should You Do When A Webs Design Trend Becomes</Link></h3>
                <div class="btn-link-share">
                  <Link to="news-details.html" class="theme-btn minimal-btn">read more <i
                    class="fas fa-arrow-right"></i></Link>
                  <Link to="#"><i class="fal fa-share-alt"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-12">
            <div class="single-blog-card">
              <div class="blog-featured-thumb bg-cover"
                style={{ backgroundImage: `url(../assets/img/blog3.png)` }}>
              </div>
              <div class="content">
                <div class="post-author">
                  <Link to="news-details.html"><i class="fal fa-user-circle"></i> Michael K. Steven</Link>
                </div>
                <h3><Link to="news-details.html">How To Space And Kern Punct Marks Other Symbols</Link></h3>
                <div class="btn-link-share">
                  <Link to="news-details.html" class="theme-btn minimal-btn">read more <i
                    class="fas fa-arrow-right"></i></Link>
                  <Link to="#"><i class="fal fa-share-alt"></i></Link>
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