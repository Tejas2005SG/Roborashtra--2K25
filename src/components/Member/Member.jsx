import React from "react";
import Image from "next/image";
import "./Member.css";
const Member = ({ image }) => {
  return (
    <div className="Team_Member">


       <Image src={image} width={240} height={320} alt="member-position" /> 
    </div>
  );
};

export default Member;
