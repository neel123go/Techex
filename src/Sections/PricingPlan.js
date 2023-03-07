import React from 'react';

const PricingPlan = () => {
  return (
    <section class="our-pricing-wrapper section-bg section-padding">
      <div class="container">
        <div class="row mb-35">
          <div class="col-12 col-lg-12">
            <div class="section-title text-white text-center">
              <p>our pricing plan</p>
              <h1>Awesome Pricing Plan</h1>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="single-pricing-plan">
              <h3>Basic Plan</h3>
              <p>Quis autem vel eum iure reprehes derit quin voluptate velite</p>
              <div class="pricing">
                <span>$</span>
                <h2>25.63</h2>
                <p>monthly</p>
              </div>
              <ul class="plan-features">
                <li class="active">IT Consulting</li>
                <li>Product Engineering</li>
                <li>Digital Solutions</li>
              </ul>
              <div class="buy-btn">
                <a href="contact.html" class="theme-btn">Get started <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="single-pricing-plan active">
              <h3>Regular Plan</h3>
              <p>Quis autem vel eum iure reprehes derit quin voluptate velite</p>
              <div class="pricing">
                <span>$</span>
                <h2>54.99</h2>
                <p>monthly</p>
              </div>
              <ul class="plan-features">
                <li class="active">IT Consulting</li>
                <li class="active">Product Engineering</li>
                <li>Digital Solutions</li>
              </ul>
              <div class="buy-btn">
                <a href="contact.html" class="theme-btn">Get started <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="single-pricing-plan">
              <h3>Premium Plan</h3>
              <p>Quis autem vel eum iure reprehes derit quin voluptate velite</p>
              <div class="pricing">
                <span>$</span>
                <h2>95.75</h2>
                <p>monthly</p>
              </div>
              <ul class="plan-features">
                <li class="active">IT Consulting</li>
                <li class="active">Product Engineering</li>
                <li class="active">Digital Solutions</li>
              </ul>
              <div class="buy-btn">
                <a href="contact.html" class="theme-btn">Get started <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;