'use client';
import React from "react";

import "./Card.css";
import Image from "next/image";
import Btn2 from "../Buttons/Btn3";
import Title1 from "../../images/coverImage.png"
const Card = ({ title, link, image, desc }) => {
  console.log(image);
  return (
    <>
    {/* <div className="card-container">    <div className="Card">
      <Image src={image} width={312} height={210} class="before-element" alt={title} />

      <div className="headDesc">
        <h1>{title}</h1>
        <p className="desc">
          {desc}
          <Btn2 link={link} />
        </p>
      </div>
    </div>
    </div> */}



    <a href={link} alt="Mythrill" target="_blank">
  <div class="card w-full h-full">
    <div class="wrapper w-full h-full">
      <Image width={200} height={300} src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" class="cover-image" />
    </div>
    <Image width={200} height={300} src={Title1} class="title" />
    <Image width={200} height={300} src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" class="character" />

  </div>
  <button className="text-center w-full bg-orange-700">Explore Event</button>
</a>


    
    </>
  );
};

export default Card;
