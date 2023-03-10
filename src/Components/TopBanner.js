import React from 'react';

const TopBanner = ({ pageName, page }) => {
    return (
        <section class="page-banner-wrap bg-cover top-banner"
            style={{ backgroundImage: `url(../assets/img/page-banner.jpg)` }}>
            <div class="banner-text">{pageName}</div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-12 col-12">
                        <div class="page-heading text-white">
                            <div class="page-title">
                                <h1>{page}</h1>
                            </div>
                        </div>

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{pageName}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;