import React, { useRef } from "react";
import {
  MdAlternateEmail,
  MdOutlineSubject,
  MdPhoneIphone,
} from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import "./Skills.css";

import emailjs, { send } from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ggfhrnv",
        "template_222dd8f",
        form.current,
        "user_wLRW27GCEL30oTMjC4g72"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="w-full flex items-center justify-center pt-2 mt-1 contact-page lg:w-[20vw] xl:mx-auto ">
      <div className="flex items-center flex-col w-full ">
        <div className="mb-7 flex flex-col items-center">
          <h1 className="flex gap-2 items-center text-[22px] dark:text-[#f1f2f4] ">
            CONTACT ME <MdPhoneIphone />{" "}
          </h1>
          <p className="text-center text-md text-gray-500">
            Have a project in mind? <br /> Let's talk
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-y-3 items-center w-[85vw] Contact-form"
        >
          <div className="flex gap-2 bg-gray-200 w-full h-10 rounded-3xl items-center justify-center dark:bg-[#171f26]">
            <BsFillPersonPlusFill className="ml-3 text-xl dark:text-gray-50" />
            <input
              className="w-full h-full bg-transparent px-3 outline-none border-none rounded-3xl dark:text-[#f1f2f4]"
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="flex gap-2 bg-gray-200 w-full h-10 rounded-3xl items-center justify-center dark:bg-[#171f26]">
            <MdAlternateEmail className="ml-3 text-xl dark:text-gray-50" />
            <input
              className="w-full h-full bg-transparent px-3 outline-none border-none rounded-3xl dark:text-[#f1f2f4]"
              type="text"
              placeholder="Email"
              name="email"
            />
          </div>

          <div className="flex gap-2 bg-gray-200 w-full h-10 rounded-3xl items-center justify-center dark:bg-[#171f26]">
            <MdOutlineSubject className="ml-3 text-xl dark:text-gray-50" />
            <input
              className="w-full h-full bg-transparent px-3 outline-none border-none rounded-3xl dark:text-[#f1f2f4]"
              type="text"
              placeholder="Subject"
              name="subject"
            />
          </div>

          <div className="bg-gray-100 rounded-lg flex items-center mt-7 dark:bg-[#171f26] w-full ">
            <textarea
              className="bg-gray-100 outline-none p-4 rounded-lg w-full h-[8rem] 
               dark:text-[#f1f2f4] dark:bg-[#171f26] resize-none "
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="type your message"
            ></textarea>{" "}
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-[80vw] text-center py-3 px-3 rounded-3xl 
          xl:w-[30vw] text-white cursor-pointer mt-3"
          >
            {" "}
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
