import React from "react";
import Image from "next/image";
import EventChar from "../../../images/Char2.png";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
import ImageLoader from "@/components/loader/Loader";
import "./cam_warrior.css"

const CamWarrior = () => {
  return (
    <ImageLoader>
    <div className="Event animatedDiv">
      <div className="Event-content camWarrior">
        <h1 className="EventTitle">CAMWARRIOR</h1>
        <p>
        Welcome to CamWarriors, an exciting event that combines the thrill of drone navigation with the art of cinematic storytelling! Picture drones taking on challenging checkpoints, not just showcasing their technical skills, but also their ability to create stunning cinematic shots. CamWarriors is where technology meets creativity, as participants use drones to capture visually captivating sequences. From navigating through precision checkpoints to crafting beautiful shots, this event pushes the boundaries of aerial cinematography. Join us for an exhilarating experience where the sky transforms into a canvas, and drones become the CamWarriors, capturing breathtaking moments in innovative and visually compelling ways. Get ready for a glimpse into the future of aerial cinematography!
        </p> 
        <div className="action_btn">
          <Btn2 link={"/camwarrior.pdf"}/>
          <Btn1 text={"Register"} link={"https://unstop.com/p/cam-warriors-roborashtra-2k24-pimpri-chinchwad-college-of-engineering-and-researchpccoer-pune-889670"} />
        </div>
        </div>
      <Image src={EventChar} alt="robowar" width={500} height={200} />
    </div>
    
    </ImageLoader>
  );
};

export default CamWarrior;
