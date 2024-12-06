import React from 'react';
import { Link } from 'react-router-dom';
import home from "../../assets/img/blood heart.png";

function HeroSection() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-around py-16 px-8 bg-red-50">
        {/* Left Content */}
        <div className="flex flex-col space-y-8 max-w-lg">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome to Blood and Tissue Supply Chain Management System
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
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
        <div className="w-full max-w-md">
          <img
            src={home}
            alt="A heart-shaped blood donation symbol"
            className="object-cover w-full rounded-xl"
          />
        </div>
      </div>
      <p className="px-56 text-xl">
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
  );
}

export default HeroSection;
