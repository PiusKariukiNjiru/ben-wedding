import React, { useState, useEffect } from 'react';
import './Header.css';
import logoImage from './ben-weds-purity-.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="logoimg" className="logo-image" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#our-story" className={activeLink === 'our-story' ? 'active' : ''}>Our Story</a></li>
          <li><a href="#schedule" className={activeLink === 'schedule' ? 'active' : ''}>Wedding Venue</a></li>
          <li><a href="#simple-gallery" className={activeLink === 'simple-gallery' ? 'active' : ''}>Gallery</a></li>
          <li><a href="#guest-book" className={activeLink === 'guest-book' ? 'active' : ''}>Guest Book</a></li>
          <li><a href="#wedding-location" className={activeLink === 'wedding-location' ? 'active' : ''}>Location</a></li>
          <li><a href="#rsvp" className={activeLink === 'rsvp' ? 'active' : ''} >💗 Gift</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
