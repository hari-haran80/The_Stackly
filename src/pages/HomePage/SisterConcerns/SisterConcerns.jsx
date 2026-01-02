import React from "react";
import preyfoxImage from "../../../assets/HomePage/imgi_9_PREYFOX LCC.png";
import { MdOutlineArrowOutward } from "react-icons/md";

export const SisterConcerns = () => {
  return (
    <div className="w-full min-h-[60vh]  flex items-center justify-center [@media(max-width:425px)]:px-3 px-5 md:px-20">
      <div className="grid md:grid-cols-2 h-full pt-10 gap-5 pb-14 border-b border-gray-500 grid-cols-1 items-center">
        <div className="flex justify-center mb-5 sm:mb-0 items-center">
          <img
            src={preyfoxImage}
            alt="Preyfox LLC"
            className="w-62.5 invert "
          />
        </div>
        <div className="w-[77%] [@media(max-width:425px)]:w-full mx-auto block text-white">
          <p className="leading-7 tracking-[0.1px]">
            Stackly and Preyfox LLC are sister concerns, jointly leading
            innovation in the IT and ITES industries. While Preyfox LLC manages
            operations in the United States, Stackly oversees operations in
            India. Together, they are committed to delivering cutting-edge
            solutions and driving technological advancements across global
            markets.
          </p>
          <div className="w-full mt-6">
            <button className="relative overflow-hidden flex py-2 rounded-2xl w-full cursor-pointer gap-4 items-center justify-center group">
              {/* sliding background */}
              <span className="pointer-events-none absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

              {/* content */}
              <span className="relative z-10 flex items-center gap-4">
                Visit site
                <MdOutlineArrowOutward className="text-[22px]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
