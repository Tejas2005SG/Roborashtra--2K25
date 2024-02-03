import React from "react";
import Image from "next/image";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
import ImageLoader from "@/components/loader/Loader";




const CamWarrior = () => {
  const EventChar = "https://drive.google.com/uc?export=download&id=1vHHL4ZfmD18Egvo_Zr8UWChI6hyBqz3L"
  return (
    <ImageLoader>
    <div className="Event">
      <div className="Event-content tractical">
        <h1 className="EventTitle">Tacticle Tracers</h1>
        <p>
        Welcome to Tactical Tracer, an arena where teams engineer cutting-edge robots for firefighting missions. This groundbreaking competition unveils state-of-the-art robots armed with advanced sensors and strategic capabilities. More than a contest, Tactical Tracer stands as a mission to redefine the future of firefighting, placing emphasis on precision fire detection and effective extinguishing strategies. Observe the brilliance of designs and algorithms as robots navigate challenging terrains, swiftly identify fires, and execute strategic firefighting maneuvers. This event marks a transformative leap in leveraging robotics for enhanced fire safety, portraying a future where technology plays a pivotal role in safeguarding communities and mitigating the impact of fires on our environment. Tactical Tracer encapsulates the spirit of innovation, dedication, and the vision to create a safer world through the fusion of robotics and firefighting expertise.
        </p>
        <div className="action_btn">
          <Btn2 />
          <Btn1 text={"Register"} link={"/events"} />
        </div>
      </div>
      <Image src={EventChar} alt="robowar" width={450} height={200} />
    </div>
    </ImageLoader>
  );
};

export default CamWarrior;
