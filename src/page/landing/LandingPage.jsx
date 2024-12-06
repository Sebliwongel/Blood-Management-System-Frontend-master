import React from "react";
import Navbar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import CarouselSection from "../../layouts/landing/CarouselSection";
import CollaborationSection from "../../layouts/landing/CollaborationSection";
import HeroSection from "../../layouts/landing/HeroSection";
import DonationProcessSection from "../../layouts/landing/DonationProcessSection";

function LandingPage() {
  return (
    <div className="bg-white" id="home">
      <Navbar />
      <HeroSection />
      <CarouselSection />
      <DonationProcessSection />
      <CollaborationSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
