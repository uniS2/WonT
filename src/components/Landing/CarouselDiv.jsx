import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselDiv = ({ images, children }) => {
  return (
    <div className="relative">
      {children}
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showIndicators={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index}`}
              style={{ width: '1536px', height: '850px' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselDiv;

// 개별적으로 돌려보기
