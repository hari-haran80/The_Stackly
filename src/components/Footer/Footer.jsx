import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-black text-white p-4 px-7.5 min-h-[85vh] w-full sm:px-10 md:px-20 py-5">
      <div className=" flex items-center justify-between border-b border-gray-600 pb-6 ">
        <div className=" w-full  justify-between flex">
          <div>
            <img src={Logo} alt="Logo" className="h-12 w-auto" />
          </div>
          <div className=" flex items-center justify-evenly  p-2 gap-4">
            <Link
              to="/"
              className="flex flex-row items-center justify-center gap-1"
            >
              <FaFacebook className="text-[25px] sm:text-[18px] text-blue-500" />
              <p className="hidden sm:block ">Facebook</p>{" "}
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center justify-center gap-1"
            >
              <FaLinkedin className="text-[25px] sm:text-[18px]  text-blue-500" />
              <p className="hidden sm:block">LinkedIn</p>{" "}
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center justify-center gap-1"
            >
              {" "}
              <FaInstagram className="text-[25px] sm:text-[18px] bg-pink-600" />
              <p className="hidden sm:block">Instagram</p>
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center justify-center gap-1"
            >
              <FaTwitter className="text-[25px] sm:text-[18px] text-blue-600" />
              <p className="hidden sm:block">Twitter</p>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="block md:flex w-full">
        <div className="w-full md:w-[60%] border-none  sm:border-r border-gray-600 flex flex-col justify-center gap-10 min-h-[60vh]">
          <div className="leading-40">
            <h1 className="text-2xl sm:text-5xl md:text-4xl lg:text-5xl leading-24 font-bold">
              Have a Project in Mind?
            </h1>
            <Link to="/contact">
              <h1 className="text-2xl sm:text-5xl md:text-4xl lg:text-5xl font-bold  underline text-emerald-400">
                Let's get to Work.
              </h1>
            </Link>
          </div>
          <div className="flex items-center md:gap-2 lg:gap-6 mt-16 [@media(max-width:380px)]:block">
            <div className="border text-center text-[13px] sm:text-[18px] border-gray-700 py-3 px-6 rounded-full hover:bg-white hover:text-black duration-500 transition-all  ease-in-out">
              info@thestackly.com
            </div>
            <div className="border text-center text-[13px] sm:text-[18px] border-gray-700 text-nowrap py-3 px-6 rounded-full hover:bg-white hover:text-black duration-500 transition-all  ease-in-out">
              +91 70107 92745
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[40%] flex items-center justify-around">
          <div className="w-75 leading-8">
            <h1 className="tracking-widest">USEFULL LINKS</h1>
            <ul className="mt-4 space-y-2">
              {["careers", "about", "services", "contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item}`} className="relative inline-block group">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 relative">
              <input
                type="email"
                placeholder="Type your email"
                className="py-2 px-5 w-full border border-gray-600 rounded-full "
              />
              <MdOutlineArrowOutward className="absolute text-2xl right-5 top-3" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex mt-2 items-center justify-center h-20 p-4 bg-gray-950">
        <p className="text-[15px] sm:text-md text-center">© 2025 Copyright stackly. All Rights Reserved.</p>
      </div>
    </div>
  );
};
