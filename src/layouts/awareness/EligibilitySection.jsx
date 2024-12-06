import React from "react";

function EligibilitySection() {
  const criteria = [
    {
      title: "Age",
      description: "Donors should be between 17 and 65 years old. Donors under 18 may need parental consent in some regions.",
    },
    {
      title: "Weight",
      description: "Donors should weigh at least 110 pounds (50 kg).",
    },
    {
      title: "Health Status",
      description: "Donors must be in generally good health and free from illness.",
    },
    {
      title: "Hemoglobin Level",
      description: "A minimum hemoglobin level of 12.5 g/dL is required for blood donation.",
    },
    {
      title: "Frequency of Donation",
      description: "Whole blood can be donated once every 8 weeks, while platelets and plasma can be donated more frequently.",
    },
    {
      title: "Medications",
      description: "Certain medications may prevent donation. It's important to consult with a healthcare provider.",
    },
    {
      title: "Pregnancy",
      description: "Women who are pregnant or recently gave birth should not donate blood.",
    },
    {
      title: "Tattoos",
      description: "Donors who have had a tattoo in the last 12 months may not be eligible.",
    },
    {
      title: "Blood Pressure",
      description: "Donors with uncontrolled high blood pressure should not donate.",
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
          Blood Donation Eligibility Criteria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((item, index) => (
            <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EligibilitySection;
