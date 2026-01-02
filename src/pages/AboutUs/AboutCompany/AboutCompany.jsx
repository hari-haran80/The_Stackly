import React from "react";
import SideImage from "../../../assets/AboutPage/imgi_3_2.jpg";

export const AboutCompany = () => {
  return (
    <div className="w-full min-h-[70vh] grid md:grid-cols-2 grid-cols-1 items-center [@media(max-width:595px)]:px-5  px-20 py-5 gap-5 text-white">
      <div className="flex flex-col min-h-100 items-center gap-5">
        <h1 className="w-full px-5 text-emerald-500 font-bold text-[18px] tracking-wider">ABOUT COMPANY</h1>
        <img src={SideImage} alt="Company Image" className=" h-75" />
      </div>
      <div className="flex flex-col min-h-100 gap-6">
        <p className="text-[18px] [@media(max-width:595px)]:text-[16px] text-justify">
          Stackly is a powerful platform that streamlines workflow, enhances
          efficiency, and drives digital success. It offers a user-friendly
          experience with seamless integration, making it an essential tool for
          businesses and individuals looking to optimize their online
          operations.
        </p>
        <p className="text-[18px] [@media(max-width:595px)]:text-[16px] text-justify">
          Founded in 2015, Stackly has grown into one of the leading and most
          innovative IT companies in the industry. With a team of over 120
          talented professionals, we specialize in delivering cutting-edge
          technology solutions that drive business success. Our commitment to
          innovation, excellence, and customer satisfaction has positioned us as
          a trusted partner for businesses seeking to leverage technology for
          growth and efficiency.
        </p>
      </div>
    </div>
  );
};
