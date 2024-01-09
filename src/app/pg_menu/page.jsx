"use client";
import React from "react";
import Image from 'next/image';
import bottomArrow from '../../images/arrow.png';
import Card from "../../components/Card/Card";
import "../menu/events.css";
const events = [
  {
    title: "SubmersiGrip Rover",
    desc: "Remotely Operated Hybrid",
    link: "/pg_events/submersiGripRover",
    image: "/pg_e1.svg",
  },
  {
    title: "Autonomous Drive Race",
    desc: "Manipulator-Enabled Mobile Robot",
    link: "/pg_events/AutonomusDrive",
    image: "/pg_e2.svg",
  },
  {
    title: "Robo Butler Pioneer",
    desc: "Manipulator-Enabled Mobile Robot",
    link: "/pg_events/RoboButlerPioneer",
    image: "/pg_e3.svg",
  },
  {
    title: "AutoplaceROS Dynamo",
    desc: "check the top-level render call using",
    link: "/pg_events/AutoplaceRos",
    image: "/pg_e4.png",
  },
];
const Cards = () => {
  return (
    <div className="Container" style={{fontSize: "16px"}}>
      <h1 className="headTitle">Ransangram</h1>
    <div className="Events" style={{fontSize:"20px"}}>
      {events.map((event) => {
        return (
          <Card
            key={event.title}
            title={event.title}
            desc={event.desc}
            link={event.link}
            image={event.image}
          />
        );
      })}
    </div>
    <button className="bottomButton"><a href="\menu"><Image src={bottomArrow} alt="arrow" srcset="" /></a></button>
    </div>
    
  );
};

export default Cards;