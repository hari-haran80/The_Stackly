import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTag,
  FaComment,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaClock,
  FaUtensils,
  FaPepperHot,
  FaCheese,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaCheckCircle,
  FaYoutube,
} from "react-icons/fa";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialData = {
    facebook_url: "https://facebook.com",
    instagram_url: "https://instagram.com",
    twitter_url: "https://twitter.com",
    youtube_url: "https://youtube.com",
  };

  // Dummy data for contact information
  const contactInfo = {
    address: "123 Food Street, Culinary City, 10001",
    phone_number: "+1 (555) 123-4567",
    email: "info@foodcompany.com",
    working_hours: "Mon-Fri: 9AM-6PM | Sat: 10AM-4PM",
  };

  const SocialData = [
    {
      id: 1,
      name: "Facebook",
      icon: <FaFacebookF />,
      link: socialData.facebook_url,
    },
    {
      id: 2,
      name: "Instagram",
      icon: <FaInstagram />,
      link: socialData.instagram_url,
    },
    {
      id: 3,
      name: "Twitter",
      icon: <FaTwitter />,
      link: socialData.twitter_url,
    },
    {
      id: 4,
      name: "YouTube",
      icon: <FaYoutube />,
      link: socialData.youtube_url,
    },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        <div>
          <h3 className="font-bold">Thank You for Your Message!</h3>
          <p>We'll get back to you as soon as possible.</p>
        </div>,
        {
          icon: <FaCheckCircle className="text-green-400 text-xl" />,
        }
      );
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        <div>
          <h3 className="font-bold">Something went wrong!</h3>
          <p>Please try again later.</p>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center pb-12 pt-[13vh] px-4 max-w-375:px-1 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl w-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/30 animate-fadeIn">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-2/5 bg-linear-to-br from-gray-800 to-gray-900 p-8 lg:p-12 max-w-375:p-5 max-w-375:w-full relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute w-48 h-48 border-4 border-gray-700 rounded-full opacity-30 -top-12 -right-12"></div>
            <div className="absolute w-36 h-36 border-4 border-gray-700 rounded-full opacity-20 -bottom-6 -left-6"></div>

            {/* Floating Icons */}
            <div className="absolute text-gray-600 text-2xl opacity-10 top-1/4 left-1/5 animate-float">
              <FaUtensils className="text-4xl" />
            </div>
            <div className="absolute text-gray-600 text-2xl opacity-10 top-2/3 right-1/5 animate-float animation-delay-1000">
              <FaPepperHot className="text-4xl" />
            </div>
            <div className="absolute text-gray-600 text-2xl opacity-10 bottom-1/5 left-1/4 animate-float animation-delay-500">
              <FaCheese className="text-4xl" />
            </div>

            <h1 className="text-4xl font-extrabold text-gray-100 mb-5 relative z-10 max-w-375:text-3xl">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg mb-8 relative z-10 leading-relaxed max-w-375:text-[16px] text-justify">
              Have questions about our delicious food products or need
              assistance with your order? Our team is here to help you with any
              inquiries!
            </p>

            <div className="mt-10 max-w-375:mt-2 relative z-10 ">
              {/* Address */}
              <div className="flex items-center mb-6 text-gray-300">
                <div className="bg-linear-to-r from-orange-600 to-red-700 text-white text-2xl mr-4 flex items-center justify-center rounded-full shadow-lg">
                  <FaMapMarkerAlt className="p-2" size={35} />
                </div>
                <div className="text-lg w-[80%] text-justify max-w-375:text-[17px]">
                  {contactInfo.address}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center mb-6 text-gray-300">
                <div className="bg-linear-to-r from-orange-600 to-red-700 text-white text-2xl mr-4 flex items-center justify-center rounded-full shadow-lg">
                  <FaPhone className="p-2" size={35} />
                </div>
                <div className="text-lg w-[80%] max-w-375:text-[17px]">
                  {contactInfo.phone_number}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center mb-6 text-gray-300">
                <div className="bg-linear-to-r from-orange-600 to-red-700 text-white text-2xl mr-4 flex items-center justify-center rounded-full shadow-lg">
                  <FaEnvelope className="p-2" size={35} />
                </div>
                <div className="text-lg max-w-375:text-[17px]">
                  {contactInfo.email}
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center text-gray-300">
                <div className="bg-linear-to-r from-orange-600 to-red-700 text-white text-2xl mr-4 flex items-center justify-center rounded-full shadow-lg">
                  <FaClock className="p-2" size={35} />
                </div>
                <div className="text-lg max-w-375:text-[17px]">
                  {contactInfo.working_hours}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-3/5 p-8 lg:p-12 max-w-375:p-5 max-w-375:w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 max-w-375:gap-3">
                <div className="flex-1">
                  <label
                    htmlFor="first_name"
                    className="block text-gray-200 font-semibold text-lg mb-2"
                  >
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="first_name"
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                      className="w-full px-5 py-4  caret-white text-white  max-w-375:py-3 border-2 border-gray-600 rounded-xl bg-gray-700  focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors placeholder-gray-400"
                      placeholder="Your first name"
                    />
                    <FaUser className="absolute right-4 top-4 text-gray-400 text-xl" />
                  </div>
                  {errors.first_name && (
                    <p className="text-red-400 mt-2">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="last_name"
                    className="block text-gray-200 font-semibold text-lg mb-2"
                  >
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="last_name"
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                      className="w-full max-w-375:py-3 px-5 py-4 border-2 border-gray-600 rounded-xl bg-gray-700 text-gray-100 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors placeholder-gray-400"
                      placeholder="Your last name"
                    />
                    <FaUser className="absolute right-4 top-4 text-gray-400 text-xl" />
                  </div>
                  {errors.last_name && (
                    <p className="text-red-400 mt-2">
                      {errors.last_name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 max-w-375:gap-3">
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-gray-200 font-semibold text-lg mb-2"
                  >
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full max-w-375:py-3 px-5 py-4 border-2 border-gray-600 rounded-xl bg-gray-700 text-gray-100 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors placeholder-gray-400"
                      placeholder="Your email address"
                    />
                    <FaEnvelope className="absolute right-4 top-4 text-gray-400 text-xl" />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 mt-2">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="phone_number"
                    className="block text-gray-200 font-semibold text-lg mb-2"
                  >
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone_number"
                      {...register("phone_number", {
                        required: "Phone number is required",
                      })}
                      className="w-full max-w-375:py-3 px-5 py-4 border-2 border-gray-600 rounded-xl bg-gray-700 text-gray-100 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors placeholder-gray-400"
                      placeholder="Your phone number"
                    />
                    <FaPhone className="absolute right-4 top-4 text-gray-400 text-xl" />
                  </div>
                  {errors.phone_number && (
                    <p className="text-red-400 mt-2">
                      {errors.phone_number.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-200 font-semibold text-lg mb-2"
                >
                  Subject <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="w-full max-w-375:py-3 px-5 py-4 border-2 border-gray-600 rounded-xl bg-gray-700 text-gray-100 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors placeholder-gray-400"
                    placeholder="What is this regarding?"
                  />
                  <FaTag className="absolute right-4 top-4 text-gray-400 text-xl" />
                </div>
                {errors.subject && (
                  <p className="text-red-400 mt-2">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-200 font-semibold text-lg mb-2"
                >
                  Message <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows="5"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full max-w-375:py-3 px-5 py-4 border-2 border-gray-600 rounded-xl bg-gray-700 text-gray-100 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors resize-vertical placeholder-gray-400"
                    placeholder="How can we help you?"
                  ></textarea>
                  <FaComment className="absolute right-4 top-4 text-gray-400 text-xl" />
                </div>
                {errors.message && (
                  <p className="text-red-400 mt-2">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-orange-600 to-red-700 text-white py-4 px-8 max-w-375:p-3 rounded-xl font-semibold text-lg shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 hover:from-red-700 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className="flex justify-center gap-5 mt-10 max-w-375:mt-5">
              {SocialData.filter((item) => item.link).map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 max-w-375:w-10 max-w-375:h-10 rounded-full bg-linear-to-r from-orange-600 to-red-700 
                     text-white flex items-center justify-center text-xl 
                     transition-transform hover:-translate-y-1 hover:rotate-6 
                     hover:shadow-lg hover:shadow-black/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};