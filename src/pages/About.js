import React from 'react';
import './About.css';

function About() {
  return (
    <div className="page about">
      <div className="page-header">
        <h1>About ZAOGA MICC Youth</h1>
        <p>Getting to Know Our Youth Ministry</p>
      </div>

      <div className="container">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            ZAOGA MICC Youth is a dynamic and passionate community of young believers 
            committed to growing in faith and making a difference in our world. We are 
            part of the Zimbabwe Assemblies of God Africa (ZAOGA) Forward in Faith 
            Ministries International - Majestic International Christian Centre (MICC).
          </p>
          <p>
            Our youth ministry provides a safe and welcoming space where young people 
            can explore their faith, build lasting friendships, and discover their 
            God-given purpose.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Faith</h3>
              <p>
                Deepening our relationship with God through prayer, worship, 
                and studying His Word.
              </p>
            </div>
            <div className="value-card">
              <h3>Fellowship</h3>
              <p>
                Building authentic relationships and supporting one another 
                in our spiritual journeys.
              </p>
            </div>
            <div className="value-card">
              <h3>Service</h3>
              <p>
                Using our gifts and talents to serve God and bless others 
                in our community and beyond.
              </p>
            </div>
            <div className="value-card">
              <h3>Growth</h3>
              <p>
                Continuously developing in spiritual maturity, character, 
                and leadership skills.
              </p>
            </div>
          </div>
        </section>

        <section className="what-we-do">
          <h2>What We Do</h2>
          <div className="activities">
            <div className="activity">
              <h3>Sunday Services</h3>
              <p>
                Energetic worship, relevant teaching, and opportunities to 
                connect with other young believers every Sunday morning.
              </p>
            </div>
            <div className="activity">
              <h3>Bible Studies</h3>
              <p>
                Weekly small group discussions where we dive deeper into 
                God's Word and apply it to our daily lives.
              </p>
            </div>
            <div className="activity">
              <h3>Community Service</h3>
              <p>
                Regular outreach programs where we serve those in need and 
                share God's love through practical action.
              </p>
            </div>
            <div className="activity">
              <h3>Youth Events</h3>
              <p>
                Special events, conferences, retreats, and social gatherings 
                that build community and create lasting memories.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
