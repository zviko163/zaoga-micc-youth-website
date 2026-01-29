import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ZAOGA MICC Youth</h1>
          <p className="hero-subtitle">
            Empowering Young Lives Through Faith, Fellowship, and Service
          </p>
          <p className="hero-description">
            Join us in our mission to inspire and equip the next generation 
            to live out their faith with passion and purpose.
          </p>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="info-cards">
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                To build a vibrant community of young believers who are 
                rooted in faith, united in fellowship, and committed to 
                making a positive impact in the world.
              </p>
            </div>
            <div className="card">
              <h3>Our Vision</h3>
              <p>
                To see young people transformed by the power of God's love, 
                growing in spiritual maturity, and becoming leaders who 
                reflect Christ in every area of their lives.
              </p>
            </div>
            <div className="card">
              <h3>Join Us</h3>
              <p>
                Whether you're looking for spiritual growth, meaningful 
                relationships, or opportunities to serve, you'll find a 
                welcoming home in our youth community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule-section">
        <div className="container">
          <h2>Service Times</h2>
          <div className="schedule">
            <div className="schedule-item">
              <h4>Sunday Youth Service</h4>
              <p>Every Sunday at 10:00 AM</p>
            </div>
            <div className="schedule-item">
              <h4>Midweek Bible Study</h4>
              <p>Every Wednesday at 6:00 PM</p>
            </div>
            <div className="schedule-item">
              <h4>Youth Prayer Meeting</h4>
              <p>Every Friday at 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
