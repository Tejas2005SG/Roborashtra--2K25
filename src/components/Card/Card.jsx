'use client';
import React from "react";

import "./Card.css";
import Image from "next/image";
import Btn2 from "../Buttons/Btn3";
import Title1 from "../../images/coverImage.png"
import card1 from "../../images/card1bg.jpg"
import card1Front from "../../images/card1Front.png"
import card2Front from "../../images/card2front.png"
import card2 from "../../images/card2.jpg"
const Card = () => {

  return (
    <div className="newContainer">
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


      <div className=" ">
        <a href="/events/robowar" alt="Mythrill" target="_blank">
          <div class="card w-full h-full mb-3 md:mb-0">
            <div class="wrapper w-full h-full">
              <Image width={200} height={300} src={card1} class="cover-image" />
            </div>
            <Image width={200} height={300} src={Title1} class="title" />
            <Image width={200} height={300} src={card1Front} class="character" />
          </div>
          {/* <button className="text-center w-full bg-orange-700">Explore Event</button> */}
        </a>
      </div>

      <div className="">

        <a href="/events/resqlimpic" alt="Mythrill" target="_blank">
          <div class="card2 w-full h-full">
            <div class="wrapper w-full h-full">
              <Image width={0} height={0} src={card2} class="cover-image" />
            </div>
            <Image width={200} height={300} src={Title1} class="title" />
            <Image width={200} height={300} src={card2Front} class="character" />
          </div>
          {/* <button className="text-center w-full bg-orange-700">Explore Event</button> */}
        </a>
      </div>




    </div>
  );
};

export default Card;
