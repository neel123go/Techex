import React from 'react';

const FreeConsolations = () => {
  return (
    <section class="cta-banner">
      <div class="container-fluid bg-cover section-bg"
        style={{ backgroundImage: `url(../assets/img/cta_bg1.png)` }}>
        <div class="cta-content">
          <div class="row align-items-center">
            <div class="col-xl-7 text-white col-12 text-center text-xl-left">
              <h1>Ready To Get Free Consulations For <br /> Any Kind Of It Solutions ? </h1>
            </div>
            <div class="col-xl-5 col-12 text-center text-xl-right">
              <a href="contact.html" class="theme-btn mt-4 mt-xl-0">Get a quote <i
                class="fas fa-arrow-right"></i></a>
              <a href="services-details.html" class="ml-sm-3 mt-4 mt-xl-0 theme-btn minimal-btn">read more <i
                class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsolations;