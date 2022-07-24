import React from "react";
import "./ListItem.css";

const ListItem = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={`bg-[#e9ebec] px-2 py-2 rounded-md 
    hover:bg-[#c6ccce] dark:bg-[#171f26] dark:text-[#f1f2f4]
     dark:hover:bg-[#2d3841] transition-all
   cursor-pointer text-[#5d6266]  ${active && "active"}`}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default ListItem;
