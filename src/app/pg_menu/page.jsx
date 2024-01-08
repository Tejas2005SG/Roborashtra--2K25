"use client";
import React from "react";

import Card from "../../components/Card/Card";
import "../menu/events.css";
const events = [
  {
    title: "SubmersiGrip Rover",
    desc: "check the top-level render call using",
    link: "/events/robowar",
    image: "/pg_e1.png",
  },
  {
    title: "Autonomous Drive Race",
    desc: " the ultimate drone competition.",
    link: "/events/cam_warrior",
    image: "/pg_e2.png",
  },
  {
    title: "RoboButler Pioneer",
    desc: "check the top-level render call using",
    link: "/events/resqlimpic",
    image: "/pg_e3.png",
  },
  {
    title: "Autoplace ROS Dynamo",
    desc: "check the top-level render call using",
    link: "/events/tactical_tracers",
    image: "/pg_e4.png",
  },
];
const Cards = () => {
  return (
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
  );
};

export default Cards;
