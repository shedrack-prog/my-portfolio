import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Topbar from "./components/Topbar";

function App() {
  // bg-[#fafdff]

  const [scroll, setScroll] = useState(false);

  function ScrollBtn() {
    if (window.scrollY > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", ScrollBtn);

    return () => window.removeEventListener("scroll", ScrollBtn);
  }, []);

  return (
    <div
      className="bg-[#fafdff] dark:bg-[#0c151d] overflow-hidden"
      onScroll={ScrollBtn}
    >
      <div>
        <Topbar />
        <Main />
        <Contact />
        <Footer />
      </div>
      <div
        className={`${
          scroll && "to-topIcon"
        } opacity-0 text-lg text-gray-500  flex
        z-30 items-center justify-end fixed bottom-7 right-4 transition-opacity`}
      >
        <a href="#home">
          <BsFillArrowUpSquareFill className="text-3xl   " />
        </a>
      </div>
    </div>
  );
}

export default App;
