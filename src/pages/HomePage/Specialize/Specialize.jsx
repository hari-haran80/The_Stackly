import React from "react";
import UIImage from "../../../assets/HomePage/UI-UX.png";
import DMImage from "../../../assets/HomePage/Digital_Marketing.png";
import WDImage from "../../../assets/HomePage/Web_development.png";
import AIImage from "../../../assets/HomePage/AI.png";
import { MdOutlineArrowOutward } from "react-icons/md";

export const Specialize = () => {
  const specializations = [
    {
      id: 1,
      title: "UI/UX Design",
      image: UIImage,
      description:
        "Mobile applications can be built for specific operating systems, such as iOS or Android , or as cross-platform apps that work on multiple platforms.",
    },
    {
      id: 2,
      title: "Digital Marketing",
      image: DMImage,
      description:
        "Digital Marketing branding design focuses on creating a cohesive brand identity. It combines visual elements, messageing, and strategy to enhance recognition.",
    },
    {
      id: 3,
      title: "Web Development",
      image: WDImage,
      description:
        "Developers can deploy hybrid apps across multiple platforms like IOS and Android, saving time and cost compared to building separate native apps.",
    },
    {
      id: 4,
      title: "AI and Automations",
      image: AIImage,
      description:
        "AI enables systems to perform tasks that typically require human cognitive abilites such as learning, problem-solving, and decision-making.",
    },
  ];

  return (
    <div className="text-white px-3 sm:px-20 mt-5 ">
      <div className="border-b border-gray-400 pb-5">
        <h1 className="text-emerald-400 font-bold tracking-wide">
          OUR SPECIALIZE
        </h1>
      </div>
      <div>
        <p className="text-2xl sm:text-5xl py-6">
          <span className="font-extrabold">WHAT WE</span>
          <span className="font-light"> OFFER</span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {specializations.map((item) => (
            <div
              key={item.id}
              className="border relative p-5 border-gray-600 min-h-75 rounded-lg flex flex-col"
            >
              <div className="p-2 order-1 md:order-3">
                <img src={item.image} alt={item.title} className="w-20 h-20" />
                <h1 className="absolute top-8 right-5 md:left-10 text-2xl">
                  0{item.id}.
                </h1>
              </div>

              <div className="font-bold text-xl px-2 py-4 md:text-2xl order-2 w-full   md:flex md:justify-end">
                <p className="md:w-95">{item.title}</p>
              </div>

              <div className="p-3 order-3 md:order-2 flex justify-end">
                <p className="text-lg text-justify md:w-95">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-6">
        <button className="relative overflow-hidden flex py-2 rounded-2xl w-full cursor-pointer gap-4 items-center justify-center group">
          {/* sliding background */}
          <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

          {/* content */}
          <span className="relative z-10 flex items-center gap-4">
            View All
            <MdOutlineArrowOutward className="text-[22px]" />
          </span>
        </button>
      </div>
      <div className="border border-gray-800 mt-20"></div>
    </div>
  );
};
