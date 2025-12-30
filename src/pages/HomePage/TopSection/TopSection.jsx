import React from "react";
import BGImage from "../../../assets/HomePage/BG_Design.png";
import FloatingIcon from "../../../assets/HomePage/FloatingICon.png";

export const TopSection = () => {
  return (
    <div className="w-full min-h-[110vh] [@media(min-width:992px)]:flex block bg-black/85 relative">
      <img
        src={BGImage}
        alt="Background Design"
        className=" absolute right-0 h-screen opacity-45"
      />
      <div className="text-white w-full [@media(min-width:992px)]:w-[55%]  flex flex-col justify-center">
        <div className="w-[90%] flex flex-col gap-6 [@media(min-width:992px)]:ml-16 mx-auto min-h-[55vh]">
          <h1 className="text-3xl leading-14 tracking-wide font-bold">
            "Empowering businesses with cutting-edge solutions."
          </h1>
          <p className="text-xl leading-8">
            We are a forward-thinking IT company specializing in innovative
            technology solutions that drive business transformation. From
            software development to IT consulting, we deliver tailored services
            to enhance efficiency, streamline processes, and foster growth for
            businesses of all sizes.
          </p>
          <h2 className="text-2xl leading-14 tracking-wide font-bold">
            Solutions that power success.
          </h2>
        </div>
      </div>
      <div className="[@media(min-width:992px)]:w-[45%] w-full z-9 ">
        <img
          src={FloatingIcon}
          alt="Floating Icon"
          className="[@media(min-width:992px)]:w-162.5 w-fit [@media(min-width:992px)]:h-137.5 h-auto mx-auto"
        />
      </div>
    </div>
  );
};
