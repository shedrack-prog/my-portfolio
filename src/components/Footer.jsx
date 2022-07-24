import React from "react";
import { BiCopyright } from "react-icons/bi";

import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbBrandTwitter } from "react-icons/tb";
import { FiDownload, FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="copyright flex flex-col items-center justify-center mt-5">
      <p className="flex items-center text-[#c6d3dd]">
        <BiCopyright className="mr-[5px] dark:text-[#afc0c4]" />
        Shedrack T. All rights reserved
      </p>

      <div className="flex gap-6 mt-5 mb-5">
        <span>
          <BsInstagram className="text-[15.8px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
        </span>
        <span>
          <TbBrandTwitter className="text-[15.8px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
        </span>
        <span>
          <FiGithub className="text-[15.8px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
        </span>
        <span>
          <FiLinkedin className="text-[15.8px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
        </span>
      </div>
    </div>
  );
};

export default Footer;
