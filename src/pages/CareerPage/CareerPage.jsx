import React from "react";
import bgImage1 from "../../assets/Careers page/bgImage.png";
import EyeIcon from "../../assets/Careers page/vision_7531552.png";
import GroupIcon from "../../assets/Careers page/account_2996808.png";
import PeopleIcon from "../../assets/Careers page/group_921296.png";
import RocketIcon from "../../assets/Careers page/startup_1067256.png";
import "./CareerCss/CareerCss.css";
import Jobs from "./Jobs";
import { Link } from "react-router-dom";

const careerDetails = [
  {
    icon: EyeIcon,
    title: "Career Growth",
    description: "We are a fast-growing company.",
  },
  {
    icon: GroupIcon,
    title: "HealthCare",
    description: "A good healthy condition will make you feel positive.",
  },
  {
    icon: PeopleIcon,
    title: "Great People",
    description: "We appreciate and motivate brilliant ideas and skills.",
  },
  {
    icon: RocketIcon,
    title: "Social Commitment",
    description: "We love to contribute and stand for any social cause.",
  },
];

const CareerPage = () => {
  return (
    <div className="w-full pb-5 text-white">
      <div className=" w-full h-[65vh] flex items-center justify-center flex-col">
        <h1 className="sm:text-8xl text-7xl font-extrabold tracking-wider">
          CAREER
        </h1>
        <div className="mt-5 text-xl gap-5 flex">
          <Link to="/">Home</Link> |{" "}
          <span className="text-emerald-500">Career</span>
        </div>
      </div>
      <div className="w-[80%] md:w-[60%] mt-5 block mr-auto ml-auto">
        <h1 className="p-4 text-pink-600 text-[34px] text-center">
          Company Culture
        </h1>
        <p className="mt-3 text-[20px] text-center">
          We love to make complex things look simple. We have a work process
          that suits this concept of workflow. Taking up Challenges make you
          sharper and confident. At webCastle everyone will be facing challenges
          which will make them a better professional and also as person.
        </p>
      </div>

      <div className="flex mt-5 items-center justify-center flex-wrap gap-5">
        {careerDetails.map((item, index) => (
          <div
            key={index}
            className="bg-white hover:scale-110 transition-all duration-300 ease-in-out border-t-4 border-red-600 shadow-pink-600 text-black relative min-h-[300px] rounded-lg gap-3 flex flex-col justify-center items-center w-[250px] p-3 shadow-md"
          >
            <img
              src={bgImage1}
              className="absolute w-[110px] h-[110px] top-7"
              alt=""
            />
            <img
              src={item.icon}
              alt={item.title}
              className="w-[40px] h-[40px] z-10"
            />
            <h2 className="mt-4 text-pink-500 text-xl font-bold">
              {item.title}
            </h2>
            <p className="mt-2 text-black text-center">{item.description}</p>
          </div>
        ))}
      </div>
      <Jobs />
    </div>
  );
};

export default CareerPage;
