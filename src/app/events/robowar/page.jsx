import React from "react";
import Image from "next/image";
import EventChar from "../../../images/Char3.svg";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
const CamWarrior = () => {
  return (
    <div className="Event">
      <div>
        <h1 className="EventTitle">Steel Soldier Slam</h1>
        <p>
          RoboWar, the ultimate arena for mechanical warriors, is a cutting-edge
          competition that brings together the brightest minds in robotics and
          engineering. This adrenaline-pumping event showcases the most recent
          advancements in robotic combat and promises an electrifying experience
          for both participants and spectators. RoboWar is more than just a
          battle of robots; its also a test of creativity, engineering prowess,
          and strategic thinking.
        </p>
        <div className="action_btn">
          <Btn2 link={"/robowar.pdf"} />
          <Btn1 text={"Register"} link={"/events"} />
        </div>
      </div>
      <Image src={EventChar} alt="robowar" width={500} height={200} />
    </div>
  );
};

export default CamWarrior;
