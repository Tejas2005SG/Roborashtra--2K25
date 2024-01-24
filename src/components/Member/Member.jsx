import React from "react";
import Image from "next/image";
import "./Member.css";
const Member = ({ image, name, position }) => {
  return (
    <div className="Team_Member">
      <Image src={image} width={90} height={90} alt="member-position" />
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
};

export default Member;
