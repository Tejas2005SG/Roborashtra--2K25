"use client";
import React from "react";
import Image from 'next/image';
import Card from "../../components/Card/Card";
import "./events.css";
import react from "react";
const events = [
  {
    title: "Steel Soldier Slam",
    desc: "Step into the exciting world of Robowar!..",
    link: "/events/robowar",
    image: "event1.svg",
  },
  {
    title: "Cam Warrior",
    desc: "Welcome to CamWarriors, an exciting...",
    link: "/events/cam_warrior",
    image: "event2.svg",
  },
  {
    title: "ResQlympic",
    desc: "Welcome to Resqlympic, where robots...",
    link: "/events/resqlimpic",
    image: "event3.svg",
  },
  {
    title: "Blaze Maze",
    desc: "Welcome to Blaze Maze, an arena where...",
    link: "/events/tactical_tracers",
    image: "event4.svg",
  },
];
const Cards = () => {
  
  return (
    <>    
    <div className="Container">
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
      </div>
      
 
  </>

  );
};

export default Cards;