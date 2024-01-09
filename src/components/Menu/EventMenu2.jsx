import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./EventMenu.css";
const events = [
{
title: "SubmersiGrip Rover",
link: "/pg_events/submersiGripRover",
image: "/pg_e1.svg",
},
{
title: "Autonomous Drive Race",
link: "/pg_events/AutonomusDrive",
image: "/pg_e2.svg",
},
{
title: "RoboButler Pioneer",
link: "/pg_events/RoboButlerPioneer",
image: "/pg_e3.svg",
},
{
title: "AutoplaceROS Dynamo",
link: "/pg_events/AutoplaceRos",
image: "/pg_e4.png",
},
];
const EventMenu = () => {
return (
<div className="EventMenu">
    {events.map((event) => {
    return (
        <Link href={event.link} key={event.title}>
        <div className="EventCard">
            <Image
            src={event.image}
            alt={event.title}
            width={200}
            height={200}
            />
            <div className="EventCardBg"></div>
            <h3>{event.title}</h3>
        </div>
        </Link>
    );
    })}
</div>
);
};

export default EventMenu;
