import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import TestimonialImg1 from "../../../assets/AboutPage/imgi_14_2.jpg";
import PersonOne from "../../../assets/HomePage/imgi_12_m2.webp";
import PersonTwo from "../../../assets/HomePage/imgi_13_m1.webp";
import DoubleQuote from "../../../assets/AboutPage/imgi_11_default.png";

import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const testimonials = [
  {
    img: PersonOne,
    text:
      "Stackly transformed the way I manage my campaigns. The automation features saved me countless hours!",
    name: "Joe Davis",
    role: "CEO",
  },
  {
    img: PersonTwo,
    text:
      "The best part about Stackly is its user-friendly interface. It’s so simple yet powerful! Highly recommend.",
    name: "Daniel Roden",
    role: "Managing Director",
  },
  {
    img: PersonTwo,
    text:
      "As a freelancer, I needed an all-in-one solution to manage my projects. Stackly is the perfect fit!",
    name: "Emily T",
    role: "Project Manager",
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <section
      className="relative h-[110vh] py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${TestimonialImg1})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="flex justify-end [@media(max-width:768px)]:justify-center px-4 mb-10">
        <div className="relative z-10 lg:w-10/12">
          <h2 className="text-[50px]  md:text-[70px] text-white font-semibold leading-tight">
            What <br />
            People <span className="font-light">Say?</span>
          </h2>
        </div>
      </div>

      <div className="relative w-11/12 lg:w-10/12 bg-black h-[69vh]">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="h-full"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
                {/* image */}
                <div className="flex items-center  [@media(max-width:768px)]:hidden justify-center p-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-75 rounded-full"
                  />
                </div>

                {/* content */}
                <div>
                  <div className="relative">
                    <img
                      src={DoubleQuote}
                      alt=""
                      className="absolute -top-10 left-0 h-25"
                    />
                    <h1 className="text-4xl [@media(max-width:768px)]:text-2xl font-bold text-white p-4">
                      {item.text}
                    </h1>
                  </div>

                  <div className="flex items-center justify-evenly p-4 mt-4">
                    <div>
                      <h1 className="text-3xl text-white font-bold">
                        {item.name}
                      </h1>
                      <h1 className="text-emerald-500 font-bold">
                        {item.role}
                      </h1>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-emerald-500"
                          size={20}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* arrows — SAME POSITION & STYLE */}
        <div className="absolute -right-7 top-1/2 -translate-y-1/2 p-2 flex flex-col gap-3 z-20">
          <div
            onClick={() => swiperRef.current.slidePrev()}
            className="p-3 rounded-full bg-white/40 cursor-pointer"
          >
            <FaArrowLeft className="text-white text-xl" />
          </div>
          <div
            onClick={() => swiperRef.current.slideNext()}
            className="p-3 rounded-full bg-white/40 cursor-pointer"
          >
            <FaArrowRight className="text-white text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
