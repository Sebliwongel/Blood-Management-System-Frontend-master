import React from "react";
import NavBar from "../../components/common/NavBar";
import AwarenessHeroSection from "../../layouts/awareness/AwarenessHeroSection";
import BenefitsSection from "../../layouts/awareness/BenefitsSection";
import EligibilitySection from "../../layouts/awareness/EligibilitySection";
import BloodTypeSlider from "../../layouts/awareness/BloodTypeSlider";
import Footer from "../../components/common/Footer"
const AwarenessPage = () => {
  return (
    <div className="flex flex-col">
      <NavBar /> 
      <AwarenessHeroSection />
      <BenefitsSection />
      <EligibilitySection />
      <BloodTypeSlider />
      <Footer />
    </div>
  );
};

export default AwarenessPage;
