import React, { useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import JobApplicationForm from "./forms/JobApplication";
import "./CareerCss/Description.css";
import { JobList } from "../../utils/CareerUtils";
import { FaLocationDot } from "react-icons/fa6";

const JobDescription = ({ jobId, onClose }) => {
  const [job, setJob] = useState(null);
  const [closing, setClosing] = useState(false);
  const [borderWidth, setBorderWidth] = useState(0);
  const [showJobApplicationForm, setShowJobApplicationForm] = useState(false); // State for form visibility
  const containerRef = useRef(null); // Reference for the container

  useEffect(() => {
    if (window.lenis) {
      window.lenis.stop();
    }

    return () => {
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [jobId]);

  useEffect(() => {
    if (jobId) {
      const selectedJob = JobList.find((item) => item.id === jobId);
      setJob(selectedJob || null);
    }

    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollPosition = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const progress = (scrollPosition / scrollHeight) * 100;
        setBorderWidth(progress);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [jobId]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 500); // Close the modal after the animation completes (500ms)
  };

  const handleApplyNowClick = () => {
    setShowJobApplicationForm(true); // Show the JobApplicationForm
  };

  const handleCloseJobApplicationForm = () => {
    setShowJobApplicationForm(false); // Hide the JobApplicationForm
  };

  const splitIntoList = (text) =>
    text ? text.split(",").map((item) => item.trim()) : [];

  if (!job) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div
      className={`fixed inset-0 bg-[rgba(0,0,0,0.5)] leading-loose flex items-end justify-center z-50 ${
        closing ? "fade-out" : "animate-slide-up"
      }`}
    >
      <div
        ref={containerRef}
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl max-h-[85vh] rounded-t-[30px] px-4 pb-10 border-t-8 border-t-pink-600 custom-scrollbar overflow-y-auto"
      >
        {/* Close Icon */}
        <AiOutlineClose
          className="bg-pink-600 cursor-pointer duration-500 ease-in-out top-24 right-[8%] md:right-[10%] md:top-24 lg:right-[10%] xl:top-26.25 xl:right-[24%] lg:top-23.75 z-50 p-2 text-[30px] absolute rounded-md font-bold 0"
          onClick={handleClose}
        />

        {/* Sticky Header */}
        <div className="sticky top-0 z-10 p-2 bg-white py-3 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h1 className="text-[20px] sm:text-[25px] text-pink-600 font-semibold">
              {job.title}
            </h1>
            <button
              onClick={handleApplyNowClick}
              className="text-[16px] sm:text-[20px] px-3 hover:bg-green-600 transition-all ease-in-out duration-300 py-1 rounded-[30px] bg-green-500 mt-2 sm:mt-0"
            >
              Apply Now
            </button>
          </div>

          {/* Progress Bar */}
          <div
            style={{ width: `${borderWidth}%` }}
            className="h-1 bg-blue-500 mt-1 transition-all duration-200"
          ></div>
        </div>

        {/* Company Info */}
        <div className="mt-5 flex flex-col sm:flex-row gap-5 items-center">
          <img
            src={Logo}
            alt="Company Logo"
            className="w-32 h-16 sm:w-44 sm:h-20"
          />
          <div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <h1 className="text-[18px] sm:text-[20px] text-black font-semibold">
                The Stackly
              </h1>
              <h1 className="hidden sm:block text-black">.</h1>
              <p className="flex items-center text-black gap-2">
                <FaLocationDot className="text-pink-600" />

                {job.location}
              </p>
            </div>
            <div className="flex flex-wrap items-center mt-3 gap-2">
              <p className="bg-gray-600 text-white px-2 py-1 text-sm sm:text-base rounded-full">
                {job.employment_type}
              </p>
              <p className="bg-gray-600 text-white px-2 py-1 text-sm sm:text-base rounded-full">
                {job.Work_timing}
              </p>
              <p className="bg-gray-600 text-white px-2 py-1 text-sm sm:text-base rounded-full">
                {job.Experiance}
              </p>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="p-2">
          <h1 className="text-black text-[18px] sm:text-[20px] mt-5 font-semibold">
            About This Role
          </h1>
          <p className="text-black mt-3 text-justify">{job.description}</p>
        </div>

        {/* Qualifications */}
        <div className="p-2">
          <h1 className="text-black text-[18px] sm:text-[20px] font-semibold">
            Qualification
          </h1>
          <ul className="list-disc pl-5 mt-2">
            {splitIntoList(job.qualification).map((item, index) => (
              <li key={index} className="text-black text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="p-2">
          <h1 className="text-black text-[18px] sm:text-[20px] font-semibold">
            Responsibility
          </h1>
          <ul className="list-disc pl-5 mt-2">
            {splitIntoList(job.responsibility).map((item, index) => (
              <li key={index} className="text-black text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Skills */}
        <div className="p-2">
          <h1 className="text-black text-[18px] sm:text-[20px] font-semibold">
            Key Skills
          </h1>
          <ul className="list-disc pl-5 mt-2">
            {splitIntoList(job.Key_Skills).map((item, index) => (
              <li key={index} className="text-black text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Info */}
        <div className="p-2 mt-5 border-t pt-4 border-gray-300">
          <p className="text-black text-sm sm:text-base">
            <span className="text-[16px] sm:text-[18px] font-bold text-black">
              Number of Positions:{" "}
            </span>
            {job.No_Of_Positions}
          </p>
          <p className="text-black text-sm sm:text-base">
            <span className="text-[16px] sm:text-[18px] font-bold text-black">
              Department:{" "}
            </span>
            {job.department}
          </p>
          <p className=" text-black text-center mt-3">
            Interested candidate can apply at{" "}
            <a
              className="text-blue-600 hover:text-blue-800 transition-all ease-in-out duration-300"
              href="mailto:hariharan.a69@gmail.com"
            >
              hariharan.a69@gmail.com
            </a>
          </p>
        </div>
      </div>
      {/* Job Application Form */}
      {showJobApplicationForm && (
        <JobApplicationForm
          jobTitle={job.title} // Pass the job title to the form
          onClose={handleCloseJobApplicationForm} // Pass the close function
        />
      )}
    </div>
  );
};

export default JobDescription;
