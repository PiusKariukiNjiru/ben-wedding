import React from 'react';
import { useInView } from 'react-intersection-observer';
import './withScrollAnimation.css';

const withScrollAnimation = (WrappedComponent) => {
  return (props) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div ref={ref} className={`scroll-animation ${inView ? 'visible' : ''}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withScrollAnimation;
