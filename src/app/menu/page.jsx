"use client";
import React from "react";
import Btn1 from "@/components/Buttons/Btn1";
import Card from "../../components/Card/Card";
import "./events.css";
import Link from "next/link";
const events = [
  {
    title: "Steel Solider Slam",
    desc: "check the top-level render call using",
    link: "/events/robowar",
    image: "event1.svg",
  },
  {
    title: "Cam Warrior",
    desc: " the ultimate drone competition thats set to put your piloting ",
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
    <div>
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

      <div className="start_btn flex items-center justify-center ">
              <Link href={"/pg_menu"} >
                <Btn1 text={"For PG"} link={"/pg_menu"} />
              </Link>
      </div>
    </div>
  );
};

export default Cards;
