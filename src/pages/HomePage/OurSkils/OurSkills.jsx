import React, { useEffect, useRef, useState } from "react";
import SideImage from "../../../assets/HomePage/imgi_11_03.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";

const skills = [
  { name: "WEB APPLICATION", percent: 95 },
  { name: "MOBILE APPLICATION", percent: 90 },
  { name: "DIGITAL MARKETING", percent: 92 },
  { name: "ARTIFICIAL INTELLIGENCE & REAL ESTATE", percent: 88 },
];

export const OurSkills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className=" w-full  px-3 sm:px-20 min-h-[40vh] flex items-center justify-center flex-col">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5  pb-12 border-b border-gray-500">
        <div className=" p-2 sm:p-5 flex items-center justify-center">
          <img
            src={SideImage}
            alt="Side Image"
            className="sm:w-[80%] w-full rounded-4xl min-h-[75vh]"
          />
        </div>
        <div className="p-5 min-h-[50vh]">
          <p className="text-emerald-500">OUR SKILLS</p>
          <h1 className="text-5xl [@media(max-width:528px)]:text-4xl [@media(max-width:375px)]:text-3xl text-white leading-16 mt-2">
            The Ultimate Guide to Marketing Success.
          </h1>
          <div
            ref={sectionRef}
            className="w-[85%] max-w-2xl mt-12 mx-auto space-y-8"
          >
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2 text-white text-sm font-medium">
                  <span className="tracking-wider text-[16px]">
                    {skill.name}
                  </span>
                  <span>{skill.percent}%</span>
                </div>

                <div className="w-full h-1.25 bg-white/20 mt-3 overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-1000 ease-out"
                    style={{
                      width: visible ? `${skill.percent}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-6 text-white">
        <button className="relative overflow-hidden flex py-2 rounded-2xl w-full cursor-pointer gap-4 items-center justify-center group">
          {/* sliding background */}
          <span className=" pointer-events-none absolute inset-0  bg-white/10  -translate-x-full  group-hover:translate-x-0  transition-transform  duration-500  ease-out"></span>

          {/* content */}
          <span className="relative z-10 flex items-center gap-4">
            View All
            <MdOutlineArrowOutward className="text-[22px]" />
          </span>
        </button>
      </div>
    </div>
  );
};
