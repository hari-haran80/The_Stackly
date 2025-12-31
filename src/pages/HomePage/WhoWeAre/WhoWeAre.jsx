import React from "react";
import SideImage from "../../../assets/HomePage/imgi_8_2.jpg";
import { FaPlay } from "react-icons/fa";

export const WhoWeAre = () => {
  return (
    <>
      <div className=" w-full  px-3 sm:px-20 min-h-screen flex items-center justify-center">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className=" min-h-[80vh] pt-5 text-white flex-col self-center flex  justify-center">
            <p className="text-emerald-500">WHO WE ARE</p>
            <h1 className="text-[32px] mt-5">
              With vast experience in project management, our team delivers
              practical expertise.
            </h1>
            <h4 className="mt-5">ABOUT US</h4>
            <p className="mt-5 text-gray-300 leading-7 text-[18px]">
              Founded in 2015, Stackly has grown into one of the leading and
              most innovative IT companies in the industry. With a team of over
              120 talented professionals, we specialize in delivering
              cutting-edge technology solutions that drive business success. Our
              commitment to innovation, excellence, and customer satisfaction
              has positioned us as a trusted partner for businesses seeking to
              leverage technology for growth and efficiency.
            </p>
            <h1 className="mt-5 text-2xl">
              Innovating today for a smarter tomorrow.
            </h1>
          </div>
          <div className=" lg:h-[80vh] h-fit self-center flex items-center justify-center">
            <div className="relative">
              <img src={SideImage} alt="Side Image" className="rounded-3xl" />
              <div className="absolute bg-black w-20 h-20 rounded-tr-3xl flex items-center justify-center bottom-0 left-0 cursor-pointer duration-300">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-11 h-11 absolute -top-11 -rotate-90 left-0"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-11 h-11 absolute bottom-0 -rotate-90 -right-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="bg-white/15 w-15 h-15 flex items-center justify-center rounded-full hover:bg-white/25 duration-300 hover:scale-110">
                  <FaPlay className="text-white p-1" size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[90%] h-px bg-gray-500 mx-auto"></div>
    </>
  );
};
