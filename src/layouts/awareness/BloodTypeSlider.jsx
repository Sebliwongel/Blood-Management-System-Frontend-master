import React, { useState } from "react";

const bloodTypes = [
  {
    id: 1,
    bloodType: "A+",
    compatibility: "Can donate to A+ and AB+; receive from A+, A-, O+, O-",
    info: "Common blood type. Preferred for emergencies due to compatibility with A and AB.",
  },
  {
    id: 2,
    bloodType: "B+",
    compatibility: "Can donate to B+ and AB+; receive from B+, B-, O+, O-",
    info: "Ideal for patients with B and AB blood types. In demand for rare procedures.",
  },
  {
    id: 3,
    bloodType: "O+",
    compatibility: "Can donate to all positives; receive from O+ and O-",
    info: "Most common blood type. Essential for trauma and emergency transfusions.",
  },
  {
    id: 4,
    bloodType: "AB+",
    compatibility: "Universal recipient; can receive from all types",
    info: "Universal recipient, highly versatile in emergencies.",
  },
  {
    id: 5,
    bloodType: "A-",
    compatibility: "Can donate to A+, A-, AB+, AB-; receive from A- and O-",
    info: "Less common. Important for compatible recipients due to Rh-negative factor.",
  },
  {
    id: 6,
    bloodType: "O-",
    compatibility: "Universal donor; can donate to all blood types, receive from O- only",
    info: "Critical for emergencies as a universal donor, though compatible with O- only.",
  },
];

function BloodTypeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bloodTypes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bloodTypes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "2rem",
        }}
      >
        <button
          style={{
            position: "absolute",
            left: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#b71c1c",
            color: "#fff",
            border: "none",
            padding: "1rem",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#b71c1c",
              marginBottom: "1rem",
            }}
          >
            {bloodTypes[currentIndex].bloodType}
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              color: "#555",
              marginBottom: "1rem",
              padding: "0 1rem",
            }}
          >
            {bloodTypes[currentIndex].compatibility}
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#777",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            {bloodTypes[currentIndex].info}
          </p>
        </div>
        <button
          style={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#b71c1c",
            color: "#fff",
            border: "none",
            padding: "1rem",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default BloodTypeSlider;
