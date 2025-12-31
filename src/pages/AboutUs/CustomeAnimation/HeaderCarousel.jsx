import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import TypingAnimation from "./TypingAnimation";
import ListAnimation from "./ListAnimation";
import { Link } from "react-router-dom";
import "./HeaderCarousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const HeaderCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="mySwiper"
      >
        {/* Slide 1: Hero Section */}
        <SwiperSlide>
          <div className="header-slide">
            <div className="header-content">
              <div className="max-w-2xl Box_Content">
                <TypingAnimation />

                <h1 className="main-heading fade-in-up">
                  <span className="highlight">Innovative IT Solutions</span>
                </h1>

                <h1 className="main-heading fade-in-up delay-1">
                  <span className="highlight">for Modern Businesses</span>
                </h1>

                <div className="cta-buttons fade-in-up delay-2">
                  <Link to="/Contact" className="cta-button primary-button">
                    Book A Call
                  </Link>

                  <Link to="/About" className="cta-button secondary-button">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="src/assets/AboutPage/carousel/Home-Gif.gif"
                alt="Modern Business Solutions"
                loading="lazy"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Services Section */}
        <SwiperSlide>
          <div className="services-slide">
            <ListAnimation />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderCarousel;
