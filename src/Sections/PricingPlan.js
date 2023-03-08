import React from 'react';

const PricingPlan = () => {
  return (
    <section className="our-pricing-wrapper section-bg section-padding">
      <div className="container">
        <div className="row mb-35">
          <div className="col-12 col-lg-12">
            <div className="section-title text-white text-center">
              <p>our pricing plan</p>
              <h1>Awesome Pricing Plan</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="single-pricing-plan">
              <h3>Basic Plan</h3>
              <p>Quis autem vel eum iure reprehes derit quin voluptate velite</p>
              <div className="pricing">
                <span>$</span>
                <h2>25.63</h2>
                <p>monthly</p>
              </div>
              <ul className="plan-features">
                <li className="active">IT Consulting</li>
                <li>Product Engineering</li>
                <li>Digital Solutions</li>
              </ul>
              <div className="buy-btn">
                <a href="contact.html" className="theme-btn">Get started <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single-pricing-plan active">
              <h3>Regular Plan</h3>
              <p>Quis autem vel eum iure reprehes derit quin voluptate velite</p>
              <div className="pricing">
                <span>$</span>
                <h2>54.99</h2>
                <p>monthly</p>
              </div>
              <ul className="plan-features">
                <li className="active">IT Consulting</li>
                <li className="active">Product Engineering</li>
                <li>Digital Solutions</li>
              </ul>
              <div className="buy-btn">
                <a href="contact.html" className="theme-btn">Get started <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single-pricing-plan">
              <h3>Premium Plan</h3>
              <p>Quis autem vel eum iure reprehes derit quin voluptate velite</p>
              <div className="pricing">
                <span>$</span>
                <h2>95.75</h2>
                <p>monthly</p>
              </div>
              <ul className="plan-features">
                <li className="active">IT Consulting</li>
                <li className="active">Product Engineering</li>
                <li className="active">Digital Solutions</li>
              </ul>
              <div className="buy-btn">
                <a href="contact.html" className="theme-btn">Get started <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;