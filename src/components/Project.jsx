import React, { useEffect, useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

import {
  FeaturedData,
  WebsiteData,
  MobileAppData,
  DesignData,
  WebAppData,
} from "../data";
import "./Project.css";

const Project = ({ selected }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(FeaturedData);
        break;

      case "web":
        setData(WebsiteData);
        break;
      case "webapp":
        setData(WebAppData);
        break;
      case "mobile":
        setData(MobileAppData);
        break;
      case "design":
        setData(DesignData);
        break;
      default:
        setData(FeaturedData);
    }
  }, [selected]);
  return (
    <div
      className="projects flex flex-wrap items-center 
    justify-center gap-4 mt-7 p-4 w-[100vw]  lg:w-[70vw] md:w-[90vw] overflow-hidden"
    >
      {data.map((d) => (
        <div
          key={d.id}
          className="project-contents overflow-hidden cursor-pointer md:mr-5 rounded-lg relative flex
      items-center justify-center w-[100%] h-[215px] md:w-[314px] border-gray-500 dark:border "
        >
          <img
            className="rounded-lg object-cover  w-[100%] h-[215px]"
            src={d.img}
            alt={`image for ${selected}`}
          />
          <div className="project-banner rounded-lg absolute flex flex-col items-center justify-center text-white w-[100%] h-[100%]">
            <h2 className="text-3xl mb-4">{d.title}</h2>
            <div className="flex items-center justify-center gap-5 mt-3">
              <a href="#">
                <FiGithub className="text-2xl" />
              </a>
              <a href="#">
                <BsEyeSlash className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
