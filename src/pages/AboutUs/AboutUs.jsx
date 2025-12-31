import React, { useEffect } from "react";
import HeaderCarousel from "./CustomeAnimation/HeaderCarousel";

export const AboutUs = () => {
  useEffect(() => {
    document.title = "Stackly | About Us";
  }, []);
  return (
    <div >
      <HeaderCarousel />
    </div>
  );
};
