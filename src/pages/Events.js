import React from 'react';
import './Events.css';

function Events() {
  const upcomingEvents = [
    {
      title: 'Youth Sunday Service',
      date: 'Every Sunday',
      time: '10:00 AM',
      description: 'Join us for worship, teaching, and fellowship with other young believers.'
    },
    {
      title: 'Midweek Bible Study',
      date: 'Every Wednesday',
      time: '6:00 PM',
      description: 'Dive deeper into God\'s Word through interactive study and discussion.'
    },
    {
      title: 'Youth Prayer Meeting',
      date: 'Every Friday',
      time: '7:00 PM',
      description: 'Come together in powerful prayer and intercession for our generation.'
    },
    {
      title: 'Monthly Youth Conference',
      date: 'Last Saturday of the Month',
      time: '2:00 PM',
      description: 'Special teaching sessions, worship, and fellowship activities.'
    }
  ];

  return (
    <div className="page events">
      <div className="page-header">
        <h1>Events & Activities</h1>
        <p>Join Us in Worship, Learning, and Fellowship</p>
      </div>

      <div className="container">
        <section className="events-section">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-header">
                  <h3>{event.title}</h3>
                </div>
                <div className="event-details">
                  <p className="event-date">
                    <strong>📅 {event.date}</strong>
                  </p>
                  <p className="event-time">
                    <strong>🕒 {event.time}</strong>
                  </p>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="calendar-info">
          <h2>Stay Connected</h2>
          <p>
            Don't miss out on any of our exciting events and activities! 
            Follow us on social media or contact us to get added to our 
            mailing list for updates on special events, conferences, and 
            youth gatherings.
          </p>
          <div className="info-box">
            <h3>Annual Events to Look Forward To:</h3>
            <ul>
              <li>Youth Summer Camp</li>
              <li>Leadership Conference</li>
              <li>Community Outreach Days</li>
              <li>Youth Talent Night</li>
              <li>Christmas Celebration</li>
              <li>New Year's Eve Service</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Events;
