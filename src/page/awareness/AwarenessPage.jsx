import React from "react";
import NavBar from "../../components/common/NavBar";
import AwarenessHeroSection from "../../layouts/awareness/AwarenessHeroSection";
import BenefitsSection from "../../layouts/awareness/BenefitsSection";
import EligibilitySection from "../../layouts/awareness/EligibilitySection";
import BloodTypeSlider from "../../layouts/awareness/BloodTypeSlider";

const AwarenessPage = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <AwarenessHeroSection />
      <BenefitsSection />
      <EligibilitySection />
      <BloodTypeSlider />
    </div>
  );
};

export default AwarenessPage;
