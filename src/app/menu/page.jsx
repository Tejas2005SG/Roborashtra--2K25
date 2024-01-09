"use client";
import React from "react";
import Image from 'next/image';
import bottomArrow from '../../images/arrow.png';

import Card from "../../components/Card/Card";
import "./events.css";
const events = [
  {
    title: "Steel Solider Slam",
    desc: "check the top-level render call using",
    link: "/events/robowar",
    image: "event1.svg",
  },
  {
    title: "Cam Warrior",
    desc: "check the top-level render call using",
    link: "/events/cam_warrior",
    image: "event2.svg",
  },
  {
    title: "ResQlimpic",
    desc: "check the top-level render call using",
    link: "/events/resqlimpic",
    image: "event3.svg",
  },
  {
    title: "Tacticle Tracers",
    desc: "check the top-level render call using",
    link: "/events/tactical_tracers",
    image: "event4.svg",
  },
];
const Cards = () => {
  return (
    <div className="Container">
      <h1 className="headTitle">Dvanadvayuddh</h1>
    <div className="Events">
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
      <button className="bottomButton"><a href="/pg_menu"><Image src={bottomArrow} alt="arrow" srcset="" /></a></button>
      </div>
  );
};

export default Cards;
