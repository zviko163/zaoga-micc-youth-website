import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="page contact">
      <div className="page-header">
        <h1>Get in Touch</h1>
        <p>We'd Love to Hear From You</p>
      </div>

      <div className="container">
        <section className="contact-section">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="intro-text">
                Whether you have questions, want to visit, or are interested 
                in getting involved, we're here to help!
              </p>

              <div className="info-item">
                <h3>📍 Address</h3>
                <p>
                  ZAOGA MICC Youth<br />
                  Harare, Zimbabwe
                </p>
              </div>

              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>Contact us through our church office</p>
              </div>

              <div className="info-item">
                <h3>✉️ Email</h3>
                <p>youth@zaogamicc.org</p>
              </div>

              <div className="info-item">
                <h3>🕒 Office Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: During service times
                </p>
              </div>
            </div>

            <div className="visit-info">
              <h2>Visit Us</h2>
              <p>
                We warmly welcome visitors to any of our services and events. 
                No appointment necessary - just come as you are!
              </p>
              
              <div className="service-times">
                <h3>Service Schedule</h3>
                <div className="time-slot">
                  <strong>Sunday Youth Service</strong>
                  <p>10:00 AM</p>
                </div>
                <div className="time-slot">
                  <strong>Wednesday Bible Study</strong>
                  <p>6:00 PM</p>
                </div>
                <div className="time-slot">
                  <strong>Friday Prayer Meeting</strong>
                  <p>7:00 PM</p>
                </div>
              </div>

              <div className="cta-box">
                <h3>New Here?</h3>
                <p>
                  If you're planning to visit for the first time, we'd love 
                  to know! Feel free to reach out so we can give you a warm 
                  welcome and answer any questions you might have.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="connect-section">
          <h2>Stay Connected</h2>
          <p>
            Follow us on social media to stay updated on events, announcements, 
            and inspiring content from our youth ministry.
          </p>
          <div className="social-links">
            <a href="#" className="social-item" aria-label="Visit our Facebook page">Facebook</a>
            <a href="#" className="social-item" aria-label="Visit our Instagram page">Instagram</a>
            <a href="#" className="social-item" aria-label="Visit our YouTube channel">YouTube</a>
            <a href="#" className="social-item" aria-label="Visit our Twitter page">Twitter</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
