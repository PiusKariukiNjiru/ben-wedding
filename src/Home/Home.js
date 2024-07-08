import React from 'react';
import WeddingAnnouncements from '../WeddingAnnouncements/WeddingAnnouncements';
import Header from '../Header/Header';
import OurStory from '../OurStory/OurStory';
import Schedule from '../Schedule/Schedule';
import WeddingGallery from '../Gallery/WeddingGallery';
import RSVPSection from '../Rsvp/RSVPSection';
import RSVPForm from '../RSVPForm/RSVPForm';
import WeddingLocation from '../WeddingLocation/WeddingLocation';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <WeddingAnnouncements />
      <OurStory />
      <Schedule />
      <WeddingGallery />
      <RSVPSection />
      <RSVPForm />
      <WeddingLocation />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Home;
