import React, { useState } from "react";
import { MdCircle } from "react-icons/md";
import "./Skills.css";
const Skills = () => {
  const [click, setClick] = useState(false);
  return (
    <div
      className={`skills w-full flex flex-col items-center justify-center md:mx-auto md:max-w-[60vw] lg:mx-auto lg:max-w-[50vw] mt-5 mb-7 p-3 h-full 
       `}
    >
      <div
        className={`skills-content mt-0 flex flex-col w-full items-center justify-start gap-5  h-[268px] overflow-y-hidden 
        ${click && "show-full "} transition duration-700`}
      >
        <div className={`item-cover flex flex-col  w-full `}>
          <h2 className="dark:text-[#f1f2f4]">REACT JS</h2>
          <div className="react bg-gray-200 h-2 w-full relative  mt-2">
            <div className="bg-[#2f9cf4] h-2 w-[80%] relative rounded-tr-lg rounded-br-lg flex items-center">
              {/* <MdCircle className=" text-[18px] absolute left-[97%] dark:text-[#f1f2f4] text-[#2f9cf4]" /> */}
            </div>
          </div>
        </div>

        <div className="item-cover flex flex-col  w-full">
          <h2 className="dark:text-[#f1f2f4]">REACT NATIVE</h2>
          <div className="react bg-gray-200 h-2 w-full relative mt-2">
            <div className="bg-[#2f9cf4] h-2 w-[70%] absolute rounded-tr-lg rounded-br-lg flex items-center">
              {/* <MdCircle className=" text-[18px] absolute left-[97%] dark:text-[#f1f2f4] text-[#2f9cf4]" /> */}
            </div>
          </div>
        </div>
        <div className="item-cover flex flex-col  w-full">
          <h2 className="dark:text-[#f1f2f4]">JAVASCRIPT</h2>
          <div className="react bg-gray-200 h-2 w-full relative mt-2">
            <div className="bg-[#2f9cf4] h-2 w-[95%] absolute rounded-tr-lg rounded-br-lg flex items-center">
              {/* <MdCircle className=" text-[18px] absolute left-[97%] dark:text-[#f1f2f4] text-[#2f9cf4]" /> */}
            </div>
          </div>
        </div>
        <div className="item-cover flex flex-col  w-full">
          <h2 className="dark:text-[#f1f2f4]">WEB DEVELOPEMENT </h2>
          <div className="react bg-gray-200 h-2 w-full relative mt-2">
            <div className="bg-[#2f9cf4] h-2 w-[95%] absolute rounded-tr-lg rounded-br-lg flex items-center">
              {/* <MdCircle className=" text-[18px] absolute left-[97%] dark:text-[#f1f2f4] text-[#2f9cf4]" /> */}
            </div>
          </div>
        </div>
        <div className="item-cover flex flex-col  w-full">
          <h2 className="dark:text-[#f1f2f4]">HTML</h2>
          <div className="react bg-gray-200 h-2 w-full relative mt-2">
            <div className="bg-[#2f9cf4] h-2 w-[90%] absolute rounded-tr-lg rounded-br-lg flex items-center">
              {/* <MdCircle className=" text-[18px] absolute left-[97%] dark:text-[#f1f2f4] text-[#2f9cf4]" /> */}
            </div>
          </div>
        </div>

        <div className="item-cover flex flex-col  w-full">
          <h2 className="dark:text-[#f1f2f4]"> CSS</h2>
          <div className="react bg-gray-200 h-2 w-full relative mt-2">
            <div className="bg-[#2f9cf4] h-2 w-[75%] absolute rounded-tr-lg rounded-br-lg flex items-center">
              {/* <MdCircle className=" text-[18px] absolute left-[97%] dark:text-[#f1f2f4] text-[#2f9cf4]" /> */}
            </div>
          </div>
        </div>

        <div className="item-cover flex flex-col  w-full">
          <h2 className="dark:text-[#f1f2f4]">TAILWIND CSS</h2>
          <div className="react bg-gray-200 h-2 w-full relative  mt-2">
            <div className="bg-[#2f9cf4] h-2 w-[80%] relative rounded-tr-lg rounded-br-lg flex items-center">
              {/* <MdCircle className=" text-[18px] absolute left-[97%] dark:text-[#f1f2f4] text-[#2f9cf4]" /> */}
            </div>
          </div>
        </div>

        <div className="item-cover flex flex-col  w-full mb-4">
          <h2 className="dark:text-[#f1f2f4]">WORDPRESS</h2>
          <div className="react bg-gray-200 h-2 w-full relative  mt-2">
            <div className="bg-[#2f9cf4] h-2 w-[85%] relative rounded-tr-lg rounded-br-lg flex items-center">
              {/* <MdCircle className=" text-[18px] absolute left-[97%] dark:text-[#f1f2f4] text-[#2f9cf4]" /> */}
            </div>
          </div>
        </div>
      </div>
      <p
        onClick={() => setClick(!click)}
        className="dark:text-white text-gray-700 mt-0 cursor-pointer"
      >
        {!click ? (
          <p className="rounded-full bg-[#5cb5ff] text-center text-white px-2 py-1 text-sm">
            ...See More
          </p>
        ) : (
          <p className="rounded-full bg-[#5cb5ff] text-center text-white px-2 py-1 text-sm">
            See Less...
          </p>
        )}
      </p>
    </div>
  );
};

export default Skills;
