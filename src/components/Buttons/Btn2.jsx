import React from "react";
import "./Btn2.css";

import { IoMdDownload } from "react-icons/io";

const Btn2 = ({ link }) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank" className="Btn2" type="disabled">
      <IoMdDownload /> Rulebook coming soon
    </a>
  );
};

export default Btn2;
