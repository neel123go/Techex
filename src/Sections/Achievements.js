import React from 'react';

const Achievements = ({ extraClass }) => {
  return (
    <section className={`funfact-wrapper text-white ${extraClass}`}>
      <div className="container">
        <div className="funfact-content-grid bg-cover"
          style={{ backgroundImage: `url(../assets/img/funfact-line.png)` }}>
          <div className="single-funfact-item">
            <div className="icon">
              <i className="fal fa-gem"></i>
            </div>
            <h3>368</h3>
            <p>Project Completed</p>
          </div>
          <div className="single-funfact-item">
            <div className="icon">
              <i className="fal fa-drafting-compass"></i>
            </div>
            <h3>785</h3>
            <p>Expert Consultants</p>
          </div>
          <div className="single-funfact-item">
            <div className="icon">
              <i className="fal fa-stars"></i>
            </div>
            <h3>896</h3>
            <p>5 Stars Rating</p>
          </div>
          <div className="single-funfact-item">
            <div className="icon">
              <i className="fal fa-trophy-alt"></i>
            </div>
            <h3>125</h3>
            <p>Awards Winning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;