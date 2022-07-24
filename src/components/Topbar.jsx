import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

const Topbar = () => {
  const [dark, setDark] = useState(false);

  const darkMode = () => {
    const home = document.getElementById("parent-div");
    home.classList.toggle("dark");
  };
  // useEffect(() => {
  //   const home1 = document.getElementById("parent-div");

  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     home1.classList.add("dark");
  //   } else {
  //     home1.classList.remove("dark");
  //   }

  //   localStorage.theme = "light";

  //   localStorage.theme = "dark";

  //   localStorage.removeItem("theme");
  // }, []);

  return (
    <div
      id="home"
      className="text-blue-500  justify-end h-16  py-4 mr-6
      xl:mr-20
      lg:px-[30%] 
    overflow-hidden
    "
    >
      <div
        className="absolute right-[2rem] top-[2rem] justify-end items-end "
        onClick={darkMode}
      >
        {!dark ? (
          <BsFillMoonStarsFill
            size={20}
            className="cursor-pointer"
            onClick={() => setDark(!dark)}
          />
        ) : (
          <BsSun
            size={20}
            className="cursor-pointer"
            onClick={() => setDark(!dark)}
          />
        )}
      </div>
    </div>
  );
};

export default Topbar;
