import React, { useEffect } from "react";
import { TopSection } from "./TopSection/TopSection";
import { Specialize } from "./Specialize/Specialize";

export const HomePage = () => {
  useEffect(() => {
    document.title = "Stackly | Home";
  }, []);

  return (
    <div>
      <TopSection />
      <Specialize />
    </div>
  );
};
