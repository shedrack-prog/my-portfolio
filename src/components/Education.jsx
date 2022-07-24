import React from "react";
import "./Skills.css";

import { GoLocation } from "react-icons/go";
const Education = () => {
  return (
    <div
      className="education mt-6 mb-4 md:max-w-[50vw]  md:items-center md:justify-center
    md:mx-auto  lg:mx-auto lg:max-w-[50vw]
    "
    >
      <div
        className="eduaction-content flex   flex-col  
       md:mx-auto
      "
      >
        <div className="div1 flex justify-between flex-col md:flex-row md:items-start items-center">
          <div className="title mb-4">
            <h2 className="text-lg font-semibold dark:text-[#f1f2f4] ">
              EDUCATION
            </h2>
            <div className="underline h-1 w-full bg-blue-300 dark:bg-blue-600"></div>
          </div>
          <div className="px-2 flex flex-col items-center md:items-start">
            <h1 className="text-xl font-bold dark:text-[#d1daf1]">
              Yaba College of Tech.
            </h1>
            <p className="text-gray-500 mt-2 mb-3 dark:text-[#dee1e7] flex text-center md:text-start">
              studying electrical and <br /> electronics Eng.
            </p>
            <p className="flex items-center mt-1 text-gray-700 dark:text-gray-500">
              {" "}
              <GoLocation className="text-blue-600 mr-1  " />
              Lagos, Nigeria.
            </p>
          </div>
        </div>
        <div className="div2 flex justify-between mt-10 flex-col md:flex-row md:items-start items-center">
          <div className="title mb-4">
            <h2 className="text-lg font-semibold dark:text-[#f1f2f4]">WORK</h2>
            <div className="underline h-1 w-full bg-blue-300  dark:bg-blue-600"></div>
          </div>
          <div className="px-2 flex flex-col items-center md:items-start">
            <h1 className="text-xl font-bold dark:text-[#d1daf1]">
              Freelancer @Upwork
            </h1>
            <p className="text-gray-500 mt-2 mb-3 dark:text-[#dee1e7] text-center md:text-start ">
              Cloning all the possible <br /> Apps and Websites. <br />
              +2348111162201
            </p>
            <p className="flex items-center mt-1 text-gray-700 dark:text-gray-500">
              {" "}
              <GoLocation className="text-blue-600 mr-1   " />
              Lagos, Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
