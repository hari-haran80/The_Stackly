import React, { useEffect } from "react";

export const AboutUs = () => {
  useEffect(() => {
    document.title = "Stackly | About Us";
  }, []);
  return (
    <div className="bg-red-300 flex items-center justify-center h-[50vh] text-3xl font-bold">
      <p className="bg-green-500 p-5">About Us</p>
    </div>
  );
};
