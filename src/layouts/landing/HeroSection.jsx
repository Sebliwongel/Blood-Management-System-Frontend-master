import React from 'react';
import { Link } from 'react-router-dom';
import home from "../../assets/img/blood heart.png";
import bloodImage from "../../assets/img/bloodbank image.jpg";

function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-around py-16 px-8 bg-red-50 mt-5">
        {/* Left Content */}
        <div className="flex-1 flex flex-col space-y-8 max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Welcome to Blood and Tissue Supply Chain Management System
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Join us at Blood and Tissue Supply Chain Management System and
            help save lives by donating blood or finding the nearest blood
            bank with our seamless management system.
          </p>
          <Link to="/registration">
            <button
              className="bg-red-500 hover:bg-red-400 transition-colors text-white text-lg font-semibold py-3 px-6 rounded-md"
              aria-label="Register for the Blood Donation System"
            >
              Register Now
            </button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full max-w-md mt-8 md:mt-5">
          <img
            src={home}
            alt="A heart-shaped blood donation symbol"
            className="object-cover w-full rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Additional Section with Image and Text */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 px-6 md:px-20">
        {/* Image */}
        <div className="flex-1 w-full max-w-lg">
          <img
            src={bloodImage}
            alt="Blood bank facility"
            className="rounded-xl  object-cover w-full"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The Blood Bank service in Ethiopia was initiated in 1969 by the
            Ethiopian Red Cross Society in Addis Ababa. Initially, it operated
            through 12 regional blood banks, catering to the need of 52% of the
            country's hospitals. In April 2012, the Federal Ministry of Health (MOH)
            decided to transfer the responsibility from the Ethiopian Red
            Cross Society to a government-managed service under the MOH. This
            change aimed to enhance efficiency and integrate the Blood Bank
            Service into the mainstream healthcare system. One of the primary
            objectives of the EBBS is to ensure the availability of safe blood
            and blood products nationwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
