import React from "react";
import Image from "next/image";
import EventChar from "../../../images/Char3.svg";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
const CamWarrior = () => {
  return (
    <div className="Event">
      <div>
        <h1 className="EventTitle">RoboButler Pioneer</h1>
        <p>
                In this task, The Participants will be given a problem statement where they have to build a manipulator attached mobile robot where they need to perform such tasks using that Robot such as, Door Openning, Pouring water from jar to glass and serve, Picking and placing objects, etc.
                During Performing the tasks, the robot have to overcome some resistive obstacles. 
                The Robot can be controlled autonomously or remotely. ROS can be used to program the robot.
                The team, who completes the task in mean time with efficient manner, will be the winner and the best design will be awarded separetely.

        </p>
        <div className="action_btn">
          <Btn2 link={"#"} />
          <Btn1 text={"Register"} link={"/events"} />
        </div>
      </div>
      <Image src={EventChar} alt="robowar" width={500} height={200} />
    </div>
  );
};

export default CamWarrior;
