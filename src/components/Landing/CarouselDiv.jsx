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
        interval={3000}
        infiniteLoop={true}
        showIndicators={false}
        transitionTime={500}
        transitionEasing="ease-in-out"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="h-[26.25rem] w-[23.75rem] object-fill sm:h-[43.75rem] sm:w-[48rem] md:h-[50rem] md:w-[64rem] lg:h-[50rem] lg:w-[80rem] 2xl:h-[53.125rem] 2xl:w-[96rem]"
          >
            <img src={image} alt={`Image ${index}`} className="h-full w-full" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselDiv;
