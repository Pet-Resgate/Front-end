import React, { useRef } from 'react';
import './HorizontalScroll.module.css';

const HorizontalScroll = ({ children }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="scrollWrapper">
      <button className="scrollBtn left" onClick={() => scroll('left')}>
        &#8592;
      </button>

      <div className="scrollContainer" ref={scrollRef}>
        {children}
      </div>

      <button className="scrollBtn right" onClick={() => scroll('right')}>
        &#8594;
      </button>
    </div>
  );
};

export default HorizontalScroll;
