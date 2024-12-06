import React from 'react';
import p1 from "../../assets/img/10009 copy 2.png";
import p2 from "../../assets/img/10001 copy.png";
import p3 from "../../assets/img/10002 copy.png";
import p4 from "../../assets/img/10007.jpg";
import p5 from "../../assets/img/10008.jpg";
import p6 from "../../assets/img/10006.jpg";

function DonationProcessSection() {
  return (
    <div className="py-16 px-8 bg-white" id="blood">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800">
          Our Blood Donation Process
        </h2>
        <p className="text-gray-600 mt-4">
          A streamlined journey from donation to saving lives.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {/* Process Step 1 */}
        <div className="text-center group relative">
          <h3 className="text-3xl font-bold">1. Donate Blood</h3>
          <p className="text-gray-600 mt-2">
            Schedule your donation at one of our locations and help save lives.
          </p>
          <img
            src={p1}
            alt="Illustration of a person donating blood"
            className="w-full h-64 object-cover rounded-lg mt-6"
          />
          <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 text-gray-800 text-sm rounded-lg p-4 shadow-lg hidden group-hover:block">
            Visit our donation centers or participate in local blood drives to contribute.
          </div>
        </div>
        {/* Process Step 2 */}
        <div className="text-center">
          <h3 className="text-3xl font-bold">2. Blood Processing</h3>
          <p className="text-gray-600 mt-2">
            Blood is processed, tested, and stored safely in our facilities.
          </p>
          <img
            src={p2}
            alt="Illustration of blood processing equipment"
            className="w-full h-64 object-cover rounded-lg mt-6"
          />
        </div>
        {/* Process Step 3 */}
        <div className="text-center">
          <h3 className="text-3xl font-bold">3. Deliver Blood</h3>
          <p className="text-gray-600 mt-2">
            Safely delivered to hospitals for patient care.
          </p>
          <img
            src={p3}
            alt="A vehicle delivering blood supplies"
            className="w-full h-64 object-cover rounded-lg mt-6"
          />
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">4. Controlling Blood Stock</h3>
          <p className="text-gray-600 mt-2">
            Real time monitoring ensures accurate blood control.
          </p>
          <img
            src={p4}
            alt="Illustration of blood processing equipment"
            className="w-full h-64 object-cover rounded-lg mt-6"
          />
        </div>
        {/* Process Step 5 */}
        <div className="text-center">
          <h3 className="text-3xl font-bold">5. Analyzing & Reporting</h3>
          <p className="text-gray-600 mt-2">
            Insights and analytics for efficient management.
          </p>
          <img
            src={p5}
            alt="A vehicle delivering blood supplies"
            className="w-full h-64 object-cover rounded-lg mt-6"
          />
        </div>
        <div className="text-center group relative">
          <h3 className="text-3xl font-bold">6. User Management</h3>
          <p className="text-gray-600 mt-2">
            Secure user administration and management tools.
          </p>
          <img
            src={p6}
            alt="Illustration of a person donating blood"
            className="w-full h-64 object-cover rounded-lg mt-6"
          />
          <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 text-gray-800 text-sm rounded-lg p-4 shadow-lg hidden group-hover:block">
            Visit our donation centers or participate in local blood drives to contribute.
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationProcessSection;
