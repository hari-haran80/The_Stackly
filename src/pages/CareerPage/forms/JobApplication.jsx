import React, { useState, useEffect } from "react";
import "./JobApplication.css";
import { AiOutlineClose } from "react-icons/ai";

const JobApplication = ({ jobTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    experience: "",
    job_title: jobTitle,
    current_location: "",
    subject: "",
    resume: null,
  });

  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if form is submitting
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      // OPTIONAL: store in localStorage
      const existingApplications =
        JSON.parse(localStorage.getItem("jobApplications")) || [];

      localStorage.setItem(
        "jobApplications",
        JSON.stringify([...existingApplications, formData])
      );

      setMessage("Application submitted successfully!");
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        mobile_number: "",
        experience: "",
        job_title: jobTitle,
        current_location: "",
        subject: "",
        resume: null,
      });
    }, 1500); // smooth UX delay
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Match the duration of the animation
  };

  return (
    <div className="bg-[rgba(0,0,0,0.6)] top-0 z-50 fixed w-full h-screen flex items-center justify-center">
      <div
        className={`bg-white p-8 relative rounded-lg shadow-lg w-full md:w-150 transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <AiOutlineClose
          className="bg-red-600 cursor-pointer duration-500 ease-in-out top-5 right-5 p-2 text-[33px] absolute rounded-full font-bold "
          onClick={handleClose}
        />
        <h1 className="text-pink-600  rounded-md border-b-2 border-pink-400 font-bold text-[32px] text-center p-2">
          Job Application Form
        </h1>
        {message && (
          <div className="text-center text-green-600 mb-4">{message}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6 mt-2">
          {/* First Div with two inputs */}
          <div className="flex item-center justify-center gap-3">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border-b border-pink-600 rounded-lg"
            />
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border-b border-pink-600 rounded-lg"
            />
          </div>

          {/* Second Div with two inputs */}
          <div className=" flex item-center justify-center gap-3">
            <input
              type="text"
              required
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full p-3 border-b border-pink-600 rounded-lg"
            />
            <select
              name="experience"
              required
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 border-b border-pink-600 rounded-lg"
            >
              <option className="text-black" value="">
                Select Experience
              </option>
              <option className="text-black" value="0-1">
                0-1 years
              </option>
              <option className="text-black" value="2-3">
                2-3 years
              </option>
              <option className="text-black" value="4-5">
                4-5 years
              </option>
              <option className="text-black" value="5-10">
                5-10 years
              </option>
              <option className="text-black" value="10+">
                10 years and above
              </option>
            </select>
          </div>

          {/* Third Div with remaining two inputs */}
          <div className=" flex item-center justify-center gap-3">
            <input
              type="text"
              required
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
              placeholder="Job Title"
              className="w-full p-3 border-b border-pink-600 rounded-lg"
              disabled
            />
            <input
              required
              type="text"
              name="current_location"
              value={formData.current_location}
              onChange={handleChange}
              placeholder="Current Location"
              className="w-full p-3 border-b border-pink-600 rounded-lg"
            />
          </div>

          {/* Fourth Div with subject input and resume */}
          <div className="">
            <input
              type="text"
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 border-b border-pink-600 rounded-lg"
            />
            <input
              type="file"
              required
              name="resume"
              onChange={handleFileChange}
              className="w-full p-3 rounded-lg"
              accept=".pdf, .doc, .docx"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted} // Disable button while submitting or after submission
              className={`w-[80%] py-2 ${
                isSubmitting || isSubmitted
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              } text-white rounded-lg font-bold`}
            >
              {isSubmitting
                ? "Submitting..."
                : isSubmitted
                ? "Application Submitted"
                : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
