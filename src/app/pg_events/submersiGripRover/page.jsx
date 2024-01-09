import React from "react";
import Image from "next/image";
import EventChar from "../../../images/Char1.svg";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
const CamWarrior = () => {
  return (
    <div className="Event">
      <div className="left">
        <h1 className="EventTitle">SubmersiGrip Rover</h1>
        <p>
            In this task, The Participants will be given a problem statement where they had to built a remotely operated Hybrid of Underwater and Ground Mobile Robot capable of picking some objects kept under water or in floating condition. 
            After picking up the objects they have to put those objects on the ground in a specified order. To do this task the participants have to make the robot in such a way that it can have the feature of ground surface mobility.
            During Picking and Placing objects from the water the robots have to overcome some obstacles. 
            The team, who completes the task in mean time will be the winner and the best design will be awarded separetely.
        </p>
        <div className="action_btn">
          <Btn2 link={"#"} />
          <Btn1 text={"Register"} link={"/register"} />
        </div>
      </div>
      <Image src={EventChar} alt="robowar" width={500} height={200} />
    </div>
  );
};

export default CamWarrior;
