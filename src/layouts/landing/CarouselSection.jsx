// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import custom styles
import p1 from '../../assets/img/10002.jpg';
import p2 from '../../assets/img/10001.jpg';
import p3 from '../../assets/img/10003.jpg';

const CarouselSection = () => {
  return (
    <div className="flex justify-center p-4 bg-gray-50">
      <div className="w-full max-w-5xl">
        <Carousel
          showArrows={true}       // Show navigation arrows
          showIndicators={true}   // Show navigation dots
          showStatus={false}      // Hide image status (e.g., "1 of 3")
          showThumbs={false}      // Disable thumbnail previews
          infiniteLoop={true}     // Enable infinite loop
          autoPlay={true}         // Automatically cycle through images
          interval={4000}         // 4 seconds per slide
          stopOnHover={true}      // Pause on hover
          dynamicHeight={true}    // Adjust height dynamically
          className="shadow-lg rounded-lg"
        >
          {/* First Slide */}
          <div className="flex justify-center space-x-8">
            <img src={p2} alt="Image 1" className="rounded-lg w-1/3 object-cover" />
            <img src={p1} alt="Image 2" className="rounded-lg w-1/3 object-cover" />
            <img src={p3} alt="Image 3" className="rounded-lg w-1/3 object-cover" />
          </div>

          {/* Second Slide */}
          <div className="flex justify-center space-x-8">
            <img src={p1} alt="Image 1" className="rounded-lg w-1/3 object-cover" />
            <img src={p2} alt="Image 2" className="rounded-lg w-1/3 object-cover" />
            <img src={p3} alt="Image 3" className="rounded-lg w-1/3 object-cover" />
          </div>

          {/* Third Slide */}
          <div className="flex justify-center space-x-8">
            <img src={p3} alt="Image 1" className="rounded-lg w-1/3 object-cover" />
            <img src={p1} alt="Image 2" className="rounded-lg w-1/3 object-cover" />
            <img src={p2} alt="Image 3" className="rounded-lg w-1/3 object-cover" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSection;
