import React from 'react';
import './Schedule.css';
import rehearsalDinnerImage from './Rehaersal-dinner.png'; // Update this path to your images
import ceremonyImage from './the-ceremony.jpeg';
import ReceptionImage from './Reception.jpg';
import PreweddingImage from './prewedding.jpg';

const Schedule = () => {
  const events = [

    {
      title: 'Pre-Wedding',
      date: 'July 28, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Full Gospel Churches of Kenya, Runyenjes',
      image: PreweddingImage
    },
    {
      title: 'Rehearsal Dinner',
      date: 'August 16, 2024',
      time: '12:00 PM - 2:00 PM',
      location: 'Full Gospel Churches of Kenya, Runyenjes',
      image: rehearsalDinnerImage
    },
   
    {
      title: 'The Ceremony',
      date: 'August 17, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Full Gospel Churches of Kenya, Runyenjes',
      image: ceremonyImage
    },
    {
      title: 'Reception',
      date: 'August 17, 2024',
      time: '2.00 PM - 6:00 PM',
      location: 'Ark School Ground Mwenendega -Runyenjes',
      image: ReceptionImage
    }
  ];

  return (
    <section className="schedule" id='schedule'>
      {events.map((event, index) => (
        <div className="event" key={index}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          <div className="image-container">
            <img src={event.image} alt={event.title} />
          </div>
          <p className="time">{event.time}</p>
          <p className="location">{event.location}</p>
        </div>
      ))}
    </section>
  );
};

export default Schedule;
