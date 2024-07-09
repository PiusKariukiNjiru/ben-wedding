import React, { useState } from 'react';
import './RSVPForm.css';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!formData.name || !formData.phone || !formData.guests || !formData.message) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setErrorMessage('Phone number must be exactly 10 digits.');
      return;
    }

    try {
      const response = await fetch('/submit-rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('RSVP sent successfully');
        setFormData({ name: '', phone: '', guests: '1', message: '' });
      } else {
        setErrorMessage('Error sending RSVP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error sending RSVP. Please try again.');
    }
  };

  return (
    <div className="rsvp-form-container" id="guest-book">
      <div className="background-overlay"></div>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <h1 className="form-title">ARE YOU ATTENDING?</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <select
            name="guests"
            className="form-control"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="rsvp-button">
          R.S.V.P
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
