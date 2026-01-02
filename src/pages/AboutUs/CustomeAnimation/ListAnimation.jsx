import React, { useState, useEffect } from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { PiShoppingCartBold, PiCodesandboxLogoFill } from "react-icons/pi";
import { SiCodesignal } from "react-icons/si";
import WebDesignImage from "../../../assets/AboutPage/carousel/Design.png";
import ECommerceImage from "../../../assets/AboutPage/carousel/e_commerce.png";
import MarketingImage from "../../../assets/AboutPage/carousel/Marketing.png";
import GraphicsImage from "../../../assets/AboutPage/carousel/GraphicDesign.png";
import "./ListAnimation.css"; // Import a CSS file for animations

const ListAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [buttonVisibility, setButtonVisibility] = useState(
    Array(4).fill(false)
  ); // Track button visibility
  let intervalId;

  // List of images & buttons
  const images = [
    WebDesignImage,
    ECommerceImage,
    GraphicsImage,
    MarketingImage,
  ];
  const services = [
    {
      icon: <SiCodesignal className="text-[32px]" />,
      text: "Web Design & Development",
    },
    {
      icon: <PiShoppingCartBold className="text-[32px]" />,
      text: "E-Commerce Development",
    },
    {
      icon: <PiCodesandboxLogoFill className="text-[32px]" />,
      text: "Graphic Design",
    },
    {
      icon: <HiOutlineSpeakerphone className="text-[32px]" />,
      text: "Digital Marketing",
    },
  ];

  // Auto-change images every 5s
  useEffect(() => {
    intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  // Handle hover or click (manual override)
  const handleButtonInteraction = (index) => {
    clearInterval(intervalId);
    setActiveIndex(index);
  };

  // Animate buttons one by one on page load
  useEffect(() => {
    const timeoutIds = services.map(
      (_, index) =>
        setTimeout(() => {
          setButtonVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }, index * 300) // Delay each button by 300ms
    );

    return () => timeoutIds.forEach((id) => clearTimeout(id)); // Cleanup timeouts
  }, []);

  return (
    <div className="flex flex-col bg-[rgba(0,0,0,0.2)] md:flex-row items-center justify-center w-full min-h-[85vh] p-4 z-10">
      {/* Left Section - Buttons */}
      <div className="w-full lg:w-[50%] flex items-center justify-center">
        <div className="w-full flex items-center flex-col gap-5">
          <h2 className="text-[32px] text-emerald-600">EXPERTISE SERVICES</h2>
          <ul className="flex items-center text-white justify-center flex-col gap-3">
            {services.map((item, index) => (
              <li
                key={index}
                className={`transition-all duration-1000 ease-in-out transform ${
                  buttonVisibility[index]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <button
                  className={`text-[20px] duration-300 transition-all ease-in-out rounded-lg flex items-center gap-3 p-2 w-62.5 ${
                    activeIndex === index
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-700"
                  }`}
                  onMouseEnter={() => handleButtonInteraction(index)}
                  onClick={() => handleButtonInteraction(index)} // Add onClick handler
                >
                  {item.icon}
                  <p className="w-45  text-left tracking-wide font-bold">
                    {item.text}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section - Image Display */}
      <div className="w-full lg:w-[50%] min-h-[55vh] flex items-center justify-center relative mt-8 lg:mt-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-75 md:w-100 h-50 md:h-62.5 lg:top-5 lg:left-32 transition-all duration-1000 ${
              activeIndex === index
                ? "opacity-100 scale-110"
                : "opacity-0 scale-90"
            }`}
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
            {/* Related paragraph below the image */}
            {activeIndex === index && (
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm md:text-base">
                  {index === 0 &&
                    "We create stunning and responsive websites tailored to your business needs."}
                  {index === 1 &&
                    "Boost your online sales with our custom e-commerce solutions."}
                  {index === 2 &&
                    "Elevate your brand with our creative graphic design services."}
                  {index === 3 &&
                    "Reach your target audience with our effective digital marketing strategies."}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListAnimation;
