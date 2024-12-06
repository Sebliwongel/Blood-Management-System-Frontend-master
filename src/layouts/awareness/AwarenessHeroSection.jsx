import React from "react";
import BloodHeart from "../../assets/img/awareness.picture.jpg";

function AwarenessHeroSection() {
  return (
    <section className="bg-white mt-10">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Give blood, Give plasma, Share life, Share often.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg ">
            A simple act of kindness can make a world of difference. Donate
            blood and help save lives. Your donation can help patients
            battling cancer, accidents, and surgeries. Every drop counts. Roll
            up your sleeve and be a hero.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Donate
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <img
          className="w-full h-[26rem]"
          src={BloodHeart}
          alt="Blood donation awareness image"
        />
      </div>
    </section>
  );
}

export default AwarenessHeroSection;
