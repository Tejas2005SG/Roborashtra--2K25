"use client";
import React from "react";
import MenuBar from "@/components/Menu/MenuBar";
import Card from "../../components/Card/Card";
import Btn1 from "@/components/Buttons/Btn1";
import Nav from "@/components/Nav/Nav";
import "../menu/events.css";
import "../menu/menu.css";
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
    <div className="menu_mob">
        <div className="menu_nav m-20">
            <Nav />
        </div>
        <div className="Menu_wrapper">
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

            <div className="Menu_bar">
                <MenuBar />
            </div>
        </div>

        <div className="start_btn flex items-center justify-center ">
            <Btn1 text={"For UG "} link={"/menu"} />
        </div>

    </div>
  );
};

export default Cards;
