import React from 'react';
import WeddingAnnouncements from '../WeddingAnnouncements/WeddingAnnouncements';
import OurStory from '../OurStory/OurStory';
import Schedule from '../Schedule/Schedule';
import WeddingGallery from '../Gallery/WeddingGallery';
import RSVPSection from '../Rsvp/RSVPSection';
import RSVPForm from '../RSVPForm/RSVPForm';
import WeddingLocation from '../WeddingLocation/WeddingLocation';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Footer from '../Footer/Footer';
import withScrollAnimation from '../withScrollAnimation/withScrollAnimation';
import Header from '../Header/Header';
import MpesaPaymentForm from '../Mpesa/MpesaPaymentForm';

const AnimatedWeddingAnnouncements = withScrollAnimation(WeddingAnnouncements);
const AnimatedOurStory = withScrollAnimation(OurStory);
const AnimatedSchedule = withScrollAnimation(Schedule);
const AnimatedWeddingGallery = withScrollAnimation(WeddingGallery);
const AnimatedRSVPSection = withScrollAnimation(RSVPSection);
const AnimatedRSVPForm = withScrollAnimation(RSVPForm);
const AnimatedWeddingLocation = withScrollAnimation(WeddingLocation);
const AnimatedFooter = withScrollAnimation(Footer);


function Home() {
  return (
    <div className="App">
      <Header />
      <AnimatedWeddingAnnouncements />
      <AnimatedOurStory />
      <AnimatedSchedule />
      <AnimatedWeddingGallery />
      <AnimatedRSVPSection />
      <AnimatedRSVPForm />
      <AnimatedWeddingLocation />
      <ScrollToTopButton />
      <MpesaPaymentForm />
      <AnimatedFooter />
    </div>
  );
}

export default Home;
