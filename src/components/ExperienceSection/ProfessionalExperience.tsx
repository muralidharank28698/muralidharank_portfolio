import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // Using react-icons for the back arrow

export const ProfessionalExperience: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sectionId } = location.state || {}; // Get sectionId from state
  console.log("sectionIdsectionId---", sectionId);

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="p-10">
      <button
        onClick={handleBack}
        className="flex items-center mb-4 text-blue-500 hover:text-blue-700 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      {sectionId === "ConvergePoint" && (
        <h1 className="text-3xl font-bold">ConvergePoint experience details</h1>
      )}
      {sectionId === "FocusCraftTech" && (
        <h1 className="text-3xl font-bold">
          Focuscraft Tech experience details
        </h1>
      )}
    </div>
  );
};
