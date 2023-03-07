import React from 'react';

const OurProjects = () => {
    return (
        <section class="case-study-wrapper section-padding">
            <div class="container">
                <div class="row mb-50 align-items-center">
                    <div class="col-12 col-md-5">
                        <div class="section-title">
                            <p>our Recent project</p>
                            <h1>Latest Case Studies</h1>
                        </div>
                    </div>
                    <div class="col-12 col-md-7 mt-4 mt-md-0 text-md-right">
                        <div class="case-cat-filter">
                            <button data-filter="*" class="active">All</button>
                            <button data-filter=".business">Business</button>
                            <button data-filter=".consulting">Consulting</button>
                            <button data-filter=".product">Product</button>
                            <button data-filter=".engineering">Engineering</button>
                        </div>
                    </div>
                </div>

                <div class="row grid">
                    <div class="col-xl-4 col-md-6 grid-item business product engineering">
                        <div class="single-case-study">
                            <div class="features-thumb bg-cover" style={{ backgroundImage: `url(../assets/img/case/1.jpg)` }}>
                            </div>
                            <div class="content">
                                <h3>Business Knowledge</h3>
                                <p>IT Consultation</p>
                                <a href="project-details.html">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 grid-item product engineering">
                        <div class="single-case-study">
                            <div class="features-thumb bg-cover" style={{ backgroundImage: `url(../assets/img/case/2.jpg)` }}>
                            </div>
                            <div class="content">
                                <h3>Business Knowledge</h3>
                                <p>IT Consultation</p>
                                <a href="project-details.html">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 grid-item consulting product">
                        <div class="single-case-study">
                            <div class="features-thumb bg-cover" style={{ backgroundImage: `url(../assets/img/case/5.jpg)` }}>
                            </div>
                            <div class="content">
                                <h3>Relationship Buildup</h3>
                                <p>IT Consultation</p>
                                <a href="project-details.html">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 grid-item business engineering">
                        <div class="single-case-study">
                            <div class="features-thumb bg-cover" style={{ backgroundImage: `url(../assets/img/case/4.jpg)` }}>
                            </div>
                            <div class="content">
                                <h3>Financial Investment</h3>
                                <p>IT Consultation</p>
                                <a href="project-details.html">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 grid-item consulting business">
                        <div class="single-case-study">
                            <div class="features-thumb bg-cover" style={{ backgroundImage: `url(../assets/img/case/3.jpg)` }}>
                            </div>
                            <div class="content">
                                <h3>Research & Market Plan</h3>
                                <p>IT Consultation</p>
                                <a href="project-details.html">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 grid-item consulting product">
                        <div class="single-case-study">
                            <div class="features-thumb bg-cover" style={{ backgroundImage: `url(../assets/img/case/6.jpg)` }}>
                            </div>
                            <div class="content">
                                <h3>Business Knowledge</h3>
                                <p>IT Consultation</p>
                                <a href="project-details.html">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProjects;