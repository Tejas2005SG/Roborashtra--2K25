"use client";
import React from "react";

import "./Card.css";
import Image from "next/image";
import Btn2 from "../Buttons/Btn3";
const Card = ({ title, link, image, desc }) => {
  return (
    <div className="Card">
      <Image
        src={image}
        width={312}
        height={210}
        className="before-element"
        alt={title}
      />

      <div className="headDesc">
        <h1>{title}</h1>
        <p className="desc">
          {desc}
          <Btn2 link={link} />
        </p>
      </div>
    </div>
  );
};

export default Card;
