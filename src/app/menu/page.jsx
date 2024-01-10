"use client";
import React, { useState } from "react";
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

const events2 = [
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
  const [currentPage, setCurrentPage] = useState(1);

  const togglePage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 2 : 1));
  };

  const currentEvents = currentPage === 1 ? events : events2;
  const pageTitle = currentPage === 1 ? "Dvanadvayuddh" : "Ransangram";

  return (
    <>
      <div className={`page${currentPage}`}>
        <div className="Container">
          <h1 className="headTitle">{pageTitle}</h1>
          <div className="Events">
            {currentEvents.map((event) => {
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
          <button className="bottomButton" onClick={togglePage}>
              <Image src={bottomArrow} alt="arrow" srcset="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
