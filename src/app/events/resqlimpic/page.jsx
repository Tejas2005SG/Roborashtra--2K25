import React from "react";
import Image from "next/image";
import EventChar from "../../../images/Char3.png";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
const CamWarrior = () => {
  return (
    <div className="Event">
      <div className="Event-content">
      <h1 className="EventTitle">ResQlimpic</h1>
        <p>
          This robotics competition challenges teams to construct manually
          controlled robots within specific size, control, and design
          constraints. It spans two days, with the first day focusing on
          navigation and mine handling, while day two intensifies the challenge.
          Deviations from rules and arena damage lead to disqualification. It
          emphasizes rule compliance, teamwork, engineering precision, and
          creativity in robotics.
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
