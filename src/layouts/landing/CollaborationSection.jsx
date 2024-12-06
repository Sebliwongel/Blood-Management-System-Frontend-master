// eslint-disable-next-line no-unused-vars
import React from "react";
import s1 from "../../assets/img/10004.png";
import s2 from "../../assets/img/10003 (1).png";
import s3 from "../../assets/img/10001 (1) copy 3.png";
import s4 from "../../assets/img/10003.png";
import s5 from "../../assets/img/download.png";

const CollaborationSection = () => {
  const images = [s1, s2, s3, s4, s5];
  return (
    <div className="py-16 px-8 bg-white">
      <h2 className="text-center text-4xl font-bold mb-8">
        Our Collaborations
      </h2>
      <div className="w-full flex justify-around ">
        <div className="flex  animate-scroll">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-32 h-auto mx-14 my-9"
              alt={`image-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;
