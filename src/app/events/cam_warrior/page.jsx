import React from "react";
import Image from "next/image";
import EventChar from "../../../images/Char1.svg";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
const CamWarrior = () => {
  return (
    <div className="Event">
      <div className="left">
        <h1 className="EventTitle">CAMWARRIOR</h1>
        <p>
          Dive into the action at Cam Warrior, the ultimate drone competition
          thats set to put your piloting and cinematography skills to the test.
          This dynamic event provides a stage for drone enthusiasts to show off
          their expertise in controlling drones and capturing awe-inspiring
          footage. Brace yourself for an exhilarating showdown as participants
          tackle challenging obstacle courses, demonstrating their drones speed
          and agility. Remember, each group can have a maximum of three
          individuals, so team up and get ready to showcase your talents in the
          thrilling world of Cam Warrior.
        </p>
        <div className="action_btn">
          <Btn2 link={"/cam_warriors.pdf"}/>
          <Btn1 text={"Register"} link={"/register"} />
        </div>
      </div>
      <Image src={EventChar} alt="robowar" width={500} height={200} />
    </div>
  );
};

export default CamWarrior;
