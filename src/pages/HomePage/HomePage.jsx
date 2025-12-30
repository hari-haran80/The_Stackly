import React, { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    document.title = "Stackly | Home";
  }, []);

  return (
    <div className="bg-red-300h-[500vh] text-3xl font-bold">
      <div className="w-full h-[30vh] bg-green-300"></div>
      <div className="w-full h-[30vh] bg-green-400"></div>
      <div className="w-full h-[30vh] bg-green-500"></div>
      <div className="w-full h-[30vh] bg-green-600"></div>
      <div className="w-full h-[30vh] bg-green-700"></div>
      <div className="w-full h-[30vh] bg-green-800"></div>
    </div>
  );
};
