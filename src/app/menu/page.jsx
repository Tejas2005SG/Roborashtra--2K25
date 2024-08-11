"use client";
import React from "react";
import {useState, useEffect} from "react";
import Image from 'next/image';
import Card from "../../components/Card/Card";
import "./events.css";
import { ImCross } from "react-icons/im";


import popUpimage from "@/images/POP UP.png"
const events = [
  {
    title: "RObofest",       
    desc: "Calling all aspiring young minds and ...",
    link: "/events/robowar",
    image: "event1.svg",
  },
  {
    title: "Cam Warrior",
    desc: "Welcome to CamWarriors, an exciting...",
    link: "/events/cam_warrior",
    image: "event2.svg",
  }
];
const Cards = () => {
  const calculateTimeLeft = () => {
    const endDate = new Date("2025-01-27");
    const difference = endDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="timer-card">
        <span className="timer-number">{timeLeft[interval]}</span>
        <span className="timer-label">{interval}</span>
      </div>
    );
  });

  return (
    <>
    <div className="Container event_wrapper" >
      <h2 style={{textAlign:"center", fontFamily:"bankGothlic", fontSize:"22px"}}>Click Cards to explore events</h2>
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
    
    <div className="countdown-container md:relative md:-bottom-20">
      <h1>Unleash the Future: RoboRashtra 2025  <br /> - Where Innovation Soars!</h1>
      <div className="timer-container">
      {timerComponents.length ? timerComponents : <span>Times up!</span>}
      </div>
    </div>
      </div>
   {/*  notification MenuBar */}      
      
 
  </>

  );
};

export default Cards;