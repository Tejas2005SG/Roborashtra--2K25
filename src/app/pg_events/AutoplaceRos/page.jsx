import React from "react";
import Image from "next/image";
import EventChar from "../../../images/Char4.svg";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
const CamWarrior = () => {
  return (
    <div className="Event">
      <div>
        <h1 className="EventTitle">AutoplaceROS Dynamo</h1>
        <p>
            In this task, The Participants will be given a problem statement where they have to build an autonomous driverless vehicle by their own. The participants have to make the vehicle using ROS, Stereo Camera and Lider (if required).
            There will be a track with two lanes where two vehicles will be subjected to compete against each other to reach the finish line earlier.
            The Shortlisting of the teams will be done as a tree manner with winning team reaching to the next level.
            The team, remaining in the last will be winner and the best design will be awarded separetely.
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
