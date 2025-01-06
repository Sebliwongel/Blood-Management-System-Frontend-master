import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../../assets/img/10004.png";
import s2 from "../../assets/img/10003 (1).png";
import s3 from "../../assets/img/10001 (1) copy 3.png";
import s4 from "../../assets/img/10003.png";
import s5 from "../../assets/img/download.png";

const CollaborationSection = () => {
  const images = [s1, s2, s3, s4, s5];

  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 2000, // Auto-play speed in milliseconds
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 px-8 bg-white">
      <h2 className="text-center text-4xl font-bold mb-8">
        Our Collaborations
      </h2>
      {/* Slider Container */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-4">
            <img
              src={src}
              className="w-32 h-auto mx-auto"
              alt={`collaboration-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CollaborationSection;