import React from "react";
import Image from "next/image";
import EventChar from "../../../images/Char4.svg";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
const CamWarrior = () => {
  return (
    <div className="Event">
      <div className="Event-content">
        <h1 className="EventTitle">Tactical Tracers Tournament</h1>
        <p>
          Line follower robots, using infrared sensors, autonomously track lines
          on the ground. Components include microcontrollers, motors, sensors,
          and a power source. Applications span warehouses, education,
          entertainment, and research. They aid in material handling, serve as
          teaching tools, and feature in robotics competitions, promoting
          innovation and learning. These robots hold promise for practical use
          and education as technology advances.
        </p>
        <div className="action_btn">
          <Btn2 />
          <Btn1 text={"Register"} link={"/events"} />
        </div>
      </div>
      <Image src={EventChar} alt="robowar" width={500} height={200} />
    </div>
  );
};

export default CamWarrior;
