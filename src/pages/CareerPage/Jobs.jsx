import React, { useEffect, useState } from "react";
import JobImage from "../../assets/Careers page/job.png";
import JobDescription from "./JobDescribtion";
import JobApplication from "./forms/JobApplication";
import { JobList } from "../../utils/CareerUtils";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [showJobDescription, setShowJobDescription] = useState(false);
  const [showJobApplicationForm, setShowJobApplicationForm] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");

  const truncateDescription = (description) => {
    if (description.length > 250) {
      return description.substring(0, 250) + "...";
    }
    return description;
  };

  const handleSeeMoreClick = (jobId) => {
    setSelectedJobId(jobId);
    setShowJobDescription(true);
  };

  const handleCloseJobDescription = () => {
    setShowJobDescription(false);
  };

  const handleApplyNowClick = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    setShowJobApplicationForm(true);
  };

  const handleCloseJobApplicationForm = () => {
    setShowJobApplicationForm(false);
  };

  return (
    <div className="w-full ">
      {showJobDescription && (
        <JobDescription
          jobId={selectedJobId}
          onClose={handleCloseJobDescription}
        />
      )}
      {showJobApplicationForm && (
        <JobApplication
          jobTitle={selectedJobTitle}
          onClose={handleCloseJobApplicationForm}
        />
      )}

      <div className="p-5">
        <h1 className="text-center text-[32px] font-bold text-pink-500">
          We are Looking for few remarkable peoples.
        </h1>
      </div>
      {JobList.length === 0 ? (
        <div className="text-center">
          <h1 className="text-[24px] font-bold text-red-600">
            No vacancy available currently
          </h1>
        </div>
      ) : (
        <div className="flex-wrap mr-auto ml-auto md:flex items-center justify-center gap-5 h-fit w-full">
          {JobList.map((job) => (
            <div
              key={job.id}
              className="w-[95%] relative md:w-[45%] mx-auto border-2 mt-5 md:mt-0 cursor-pointer border-pink-600 bg-white md:mx-0 flex items-center p-3 flex-col  min-h-75 rounded-lg"
            >
              <p className="text-gray-600 absolute text-sm bottom-5 sm:bottom-auto sm:top-2 md:bottom-5 md:top-auto right-2">
                {new Date(job.posted_on).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="w-full flex gap-5 ">
                <img src={JobImage} alt="" className="w-20 h-20" />
                <div className="flex items-start justify-center gap-3 flex-col">
                  <h1 className="text-red-600 text-[20px]">{job.title}</h1>
                  <p className="text-gray-600">
                    {job.No_Of_Positions} Position
                  </p>
                </div>
              </div>
              <div className="mt-3 w-full min-h-28">
                <p className="text-black text-justify">
                  {truncateDescription(job.description)}
                  <button
                    className="text-blue-500 mt-2 ml-3 hover:text-red-500"
                    onClick={() => handleSeeMoreClick(job.id)}
                  >
                    See More...
                  </button>
                </p>
              </div>
              <div className="w-full mt-4">
                <button
                  onClick={() => handleApplyNowClick(job.title)}
                  className="bg-green-300 font-bold text-black transition-all duration-300 ease-in-out hover:bg-green-600 px-5 py-2 rounded-[30px]"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
