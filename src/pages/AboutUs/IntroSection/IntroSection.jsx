import React from "react";
import ImageOne from "../../../assets/AboutPage/imgi_4_02.jpg";
import ImageTwo from "../../../assets/AboutPage/imgi_5_03.jpg";

const IntroSection = () => {
  return (
    <div className="flex flex-wrap">
      <div className="lg:w-8/12 w-full border-r border-white/20">
        <div className="flex flex-wrap justify-end">
          <div className="md:w-5/12 w-full p-6">
            <div className="mb-10">
              <h2 className="text-[100px] font-bold  text-white">1.</h2>
            </div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              Our Mission
            </h4>
            <p className="text-white/70 leading-relaxed">
              Our mission is simple—create tools that solve real problems. With
              a strong focus on innovation, reliability, and user satisfaction,
              we aim to enhance your experience, whether you're an individual or
              part of a growing business.
            </p>
          </div>

          <div className="md:w-5/12 w-full border-l border-white/20 p-3">
            <img
              src={ImageOne}
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-end border-t border-white/20">
          <div className="md:w-5/12 w-full p-3">
            <img
              src={ImageTwo}
              alt="Why Us"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-5/12 w-full p-6 border-l border-white/20">
            <div className="mb-10">
              <h2 className="text-[100px] font-bold  text-white">3.</h2>
            </div>
            <h4 className="text-xl font-semibold mb-4 text-white">Why Us?</h4>
            <p className="text-white/70 leading-relaxed">
              Our team brings a wealth of experience and knowledge to every
              project. We prioritize your needs and goals to deliver solutions
              that truly add value. We stick to deadlines and offer ongoing
              support to keep your digital presence thriving.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-4/12 w-full">
        <div className="relative border-t border-white/20 mt-24 p-6">
          <div className="mb-10">
            <h2 className="text-[100px] font-bold  text-white">2.</h2>
          </div>
          <h4 className="text-xl font-semibold mb-4 text-white">Our Vision</h4>
          <p className="text-white/70 leading-relaxed">
            We envision a future where technology serves as an enabler for
            creativity and productivity. Stackly strives to be a leader in
            providing smart, scalable, and user-friendly tools that cater to the
            diverse needs of our users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
