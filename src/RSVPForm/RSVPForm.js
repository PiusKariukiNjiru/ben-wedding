import React from 'react';
import './RSVPForm.css';

const RSVPForm = () => {
  return (
    <div className="rsvp-form-container" id='guest-book'>
      <div className="background-overlay"></div>
      <form className="rsvp-form">
        <h1 className="form-title">ARE YOU ATTENDING?</h1>
        <div className="form-group">
          <input type="text" placeholder="Name" className="form-control" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" className="form-control" />
        </div>
        <div className="form-group">
          <select className="form-control">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" className="form-control"></textarea>
        </div>
        <button type="submit" className="rsvp-button">R.S.V.P</button>
      </form>
    </div>
  );
};

export default RSVPForm;
