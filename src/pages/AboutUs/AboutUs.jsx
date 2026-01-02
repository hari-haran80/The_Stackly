import React, { useEffect } from "react";
import HeaderCarousel from "./CustomeAnimation/HeaderCarousel";
import { AboutCompany } from "./AboutCompany/AboutCompany";
import IntroSection from "./IntroSection/IntroSection";
import Testimonial from "./Testimonial/Testimonial";

export const AboutUs = () => {
  useEffect(() => {
    document.title = "Stackly | About Us";
  }, []);
  return (
    <div >
      <HeaderCarousel />
      <AboutCompany />
      <IntroSection />
      <Testimonial />
    </div>
  );
};
