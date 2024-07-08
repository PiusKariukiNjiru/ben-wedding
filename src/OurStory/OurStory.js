import React from 'react';
import './OurStory.css';
import image from './ben-purie.png'; // Update this path to your image file
import flower from './section_tittle_flowre.webp';

const OurStory = () => {
  return (
    <section className="our-story" id="our-story">
      <div className="ourstory-image-container">
        <img src={image} alt="Our Story" />
      </div>
      <div className="ourstory-content">
        <img src={flower} alt="flower" />
        <h2>OUR STORY</h2>
        <p>
          In a world full of ordinary moments, our story is a tale of extraordinary love and serendipitous encounters. From the very first glance, we knew our hearts were destined to beat as one.
        </p>
        <p>
          It was a beautiful spring day when fate brought us together at a quaint little café. Ben, with his warm smile and charming wit, and Purity, with her radiant grace and sparkling eyes, instantly connected over a shared love for travel and adventure. Little did we know that this chance meeting would be the beginning of a lifelong journey.
        </p>
        <p>
          Now, as we stand on the threshold of a new chapter, we look forward to building our dream together. With love as our foundation and mutual respect as our guiding star, we are ready to embrace the future, hand in hand, heart to heart.
        </p>
        <p>
          Our story is a testament to the power of love and the beauty of shared dreams. It’s a reminder that life’s greatest adventures are best experienced together. As we prepare to say “I do,” we invite you to be a part of our journey, to witness our vows, and to celebrate the beginning of our forever.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
