"use client";
import React from "react";
import {useState, useEffect} from "react";
import Image from 'next/image';
import Card from "../../components/Card/Card";
import "./events.css";
import { ImCross } from "react-icons/im";
import Btn1 from "@/components/Buttons/Btn1";

import popUpimage from "@/images/POP UP.png"
const events = [
  {
    title: "Steel Soldier Slam",       
    desc: "Step into the exciting world of Steel Soldier !..",
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
  const [isPopUpVisible, setIsPopUpVisible] = useState(true);
  useEffect(() => {
    // If you want to show the popup only once:
     localStorage.setItem('popupShown', true);
     if (!localStorage.getItem('popupShown')) {
       setIsPopUpVisible(true);
     }
  }, []);
  return (
    <>
    <div className="popUp" style={{ display: isPopUpVisible ? 'grid' : 'none' }}>
      <div className="closeBtn" onClick={() => setIsPopUpVisible(false)}>
        <ImCross />
      </div>
      <Image src={popUpimage} alt="" srcset="" />
      </div>    
    <div className="Container" style={{ display: isPopUpVisible ? 'none' : 'grid' }}>
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
     <div className="workshopLink">
    <h3 className="text-center text-2xl">Free Workshop on glimpse of working of Autonomus Drone</h3>
    <Btn1 link={"https://unstop.com/p/autonomous-drone-robotics-workshop-roborashtra-2k24-pimpri-chinchwad-college-of-engineering-and-researchpccoer-pune-891168 "} text={"Click Me"} />
    </div>
      </div>
      
      
 
  </>

  );
};

export default Cards;