import React, { useEffect } from "react";
import { TopSection } from "./TopSection/TopSection";
import { Specialize } from "./Specialize/Specialize";
import { WhoWeAre } from "./WhoWeAre/WhoWeAre";
import { SisterConcerns } from "./SisterConcerns/SisterConcerns";
import { OurSkills } from "./OurSkils/OurSkills";

export const HomePage = () => {
  useEffect(() => {
    document.title = "Stackly | Home";
  }, []);

  return (
    <div>
      <TopSection />
      <Specialize />
      <WhoWeAre />
      <SisterConcerns />
      <OurSkills />
    </div>
  );
};
