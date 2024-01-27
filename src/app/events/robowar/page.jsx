import React from "react";
import Image from "next/image";
import EventChar from "../../../images/Char1.png";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
const CamWarrior = () => {
  return (
    <div className="Event">
      <div className="Event-content">
        <h1 className="EventTitle">Robowar</h1>
        <p>
        Step into the exciting world of Robowar! Robowar is a competitive sporting event where teams design, build, and control remote-controlled robots to engage in combat with each other.Imagine fierce battles where teams of enthusiasts and engineers create incredible robots to compete in adrenaline-pumping showdowns. From speedy wheeled robots to mighty hammer-wielding machines, our webpage is your front-row seat to the thrilling clashes of these mechanical gladiators. Dive into the latest in cutting-edge technology, witness epic battles, and become part of a community passionate about pushing the limits of robotics. Whether you are an experienced engineer, a curious enthusiast, or just someone who loves high-tech action, Robowar is where creativity meets destruction for the ultimate victory. Get ready to experience the future of robotic warfare!


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
