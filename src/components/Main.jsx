import React, { useState } from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbBrandTwitter } from "react-icons/tb";
import { FiDownload, FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import ListItem from "./ListItem";
import Project from "./Project";
import Skills from "./Skills";
import Education from "./Education";
import "./Main.css";

const Main = () => {
  const [selected, setSelected] = useState("featured");
  const [active, setActive] = useState("skills");

  const lists = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web",
    },
    {
      id: "webapp",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  return (
    <div className=" mx-auto w-[85%] mt-5 ">
      <div className="mx-auto flex flex-col items-center">
        <div
          className="w-[115px] h-[115px] rounded-full border-4 border-[#4aa9f5] 
          flex items-center  justify-center
          md:w-[125px] 
          md:h-[125px]
          "
        >
          <div
            className="w-[100px] h-[100px]  rounded-full bg-gradient-to-b from-[#4aa9f5] 
          to-[#a7d5fa]
          md:w-[110px] 
          md:h-[110px]
          "
          ></div>
        </div>
        <div className="flex flex-col items-center justify-center mt-6 ">
          <h1
            className="font-bold text-xl text-[#22272b] 
          md:text-2xl dark:text-[#f1f2f4] 
          "
          >
            Shedrack Tobiloba
          </h1>
          <p
            className="mt-2 text-[15px] text-[#657481]
          md:text-[15px] dark:text-[#848b93] flex flex-col items-center "
          >
            <p>Web</p>
            <p>Mobile-App</p>
            <p>Developer</p>
          </p>
        </div>
        <div className="flex gap-6 mt-5">
          <span>
            <BsInstagram className="dark:hover:text-[#42a5f5] dark:text-[#f1f2f4] text-[19px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
          </span>
          <span>
            <TbBrandTwitter className="dark:hover:text-[#42a5f5] dark:text-[#f1f2f4] text-[19px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
          </span>
          <span>
            <FiGithub className="dark:hover:text-[#42a5f5] dark:text-[#f1f2f4] text-[19px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
          </span>
          <span>
            <FiLinkedin className="dark:hover:text-[#42a5f5] dark:text-[#f1f2f4] text-[19px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
          </span>
        </div>
        <div className="flex  gap-[2.7rem] mt-10 w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#22272b] text-[15.8px] mb-2 font-bold md:text-[16px] dark:text-[#f1f2f4]">
              5
            </span>
            <p
              className="font-bold dark:text-[#b8c0c7] text-[12px] text-[#667582] flex text-center
            
            md:text-[14px]"
            >
              Years of <br /> Work
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#22272b] text-[15.8px] mb-2 font-bold md:text-[16px] dark:text-[#f1f2f4]">
              +50
            </span>
            <p
              className="font-bold dark:text-[#b8c0c7] text-[12px] text-[#667582] flex text-center
            
            md:text-[14px]"
            >
              Completed <br /> Projects
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#22272b] text-[15.8px] mb-2 font-bold md:text-[16px] dark:text-[#f1f2f4]">
              46
            </span>
            <p
              className="font-bold dark:text-[#b8c0c7] text-[12px] text-[#667582] flex text-center
            
            md:text-[14px]"
            >
              Satisfied <br /> customers
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <div className="mr-2 md:mr-8">
            <a
              className="w-[%] text-[15.8px] font-bold text-white pt-[18.4px] 
              pb-[18.4px] pr-[24px] pl-[24px] bg-[#42a5f5]
               text-center rounded-md flex gap-2 hover:bg-[#2f9bf4]
               transition-all
               "
              href="#"
            >
              Download CV{" "}
              <FiDownload
                className="text-[20px] text-white text cursor-pointer 
              "
              />
            </a>
          </div>
          <div
            className="bg-[#e9ebec] dark:bg-[#171f26] hover:bg-[#bac0c4] h-10 w-10
           mr-3 flex items-center justify-center rounded-md dark:hover:bg-[#1f2a33] transition-all"
          >
            <a href="#">
              <BsWhatsapp className="text-center  text-[20px] text-[#2f3438] dark:text-[#f1f2f4] dark:hover:bg-[#1f2a33]  " />
            </a>
          </div>
          <div
            className="bg-[#e9ebec] dark:bg-[#171f26] dark:hover:bg-[#1f2a33] transition-all hover:bg-[#bac0c4] h-10 w-10
           mr-3 flex items-center justify-center rounded-md"
          >
            <a href="#">
              <RiMessengerLine className="text-center  text-[20px] text-[#2f3438] dark:text-[#f1f2f4] dark:hover:bg-[#1f2a33] " />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-100 mt-4 dark:bg-[#2f3438]"></div>

      <div className=" mt-10 flex items-center justify-center">
        <div className=" flex flex-col items-center">
          <h1 className="text-2xl flex items-center gap-3 dark:text-[#f1f2f4]">
            Projects{" "}
            <span>
              <AiOutlineFundProjectionScreen />
            </span>
          </h1>

          <ul className="list-items flex gap-4 mt-4 flex-wrap items-center justify-center">
            {lists.map((item) => (
              <ListItem
                key={item.id}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
          <Project selected={selected} />
          <div className="w-full h-1 bg-gray-100 mt-4 dark:bg-[#2f3438]"></div>

          <div className="skills-action w-full items-center mt-9">
            <div className="action-buttons  py-1 flex items-center justify-center ">
              <ul className="md:w-1/2 w-full h-[5rem] mx-4 flex items-center dark:bg-[#171f26] py-2 px-4 justify-around  gap-4 bg-[#e9ebec] rounded-lg">
                <li
                  onClick={() => setActive("skills")}
                  className={`text-md text-[#22272b] flex 
                  items-center justify-center py-2 
                  rounded-lg text-center  h-[90%] w-[55%]  hover:bg-[#fafdff] 
                  ${active === "skills" && "white-bg "} 
                  
                  ${
                    active === "skills" && "dark:bg-[#0c151d]"
                  } dark:text-[#f1f2f4] dark:hover:bg-[#0c151d] transition-all`}
                >
                  Skills
                </li>
                <li
                  onClick={() => setActive("education")}
                  className={`text-md text-[#22272b] flex items-center justify-center 
                  py-2 rounded-lg  h-[90%] w-[55%] hover:bg-[#fafdff] ${
                    active === "education" && "white-bg "
                  }
                  
                  ${
                    active === "education" && "dark:bg-[#0c151d]"
                  } dark:text-[#f1f2f4] dark:hover:bg-[#0c151d] transition-all`}
                >
                  Education
                </li>
              </ul>
            </div>
            {active === "skills" && <Skills className="transition-all" />}
            {active === "education" && <Education className="transition-all" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
