import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: ben@infor.org</p>
          <p>Phone: +254703432114</p>
          <p>Address: Runyenjes, Embu, Kenya</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>Facebook</li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>Twitter</li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>Instagram</li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>LinkedIn</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#schedule">Wedding Venue</a></li>
            <li><a href="#simple-gallery">Gallery</a></li>
            <li><a href="#guest-book">Guest Book</a></li>
            <li><a href="#wedding-location">Location</a></li>
            <li><a href="#rsvp">💗 Gift</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 <a href="https://www.linkedin.com/in/pius-kariuki-740353224">Pius Designs.</a> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
