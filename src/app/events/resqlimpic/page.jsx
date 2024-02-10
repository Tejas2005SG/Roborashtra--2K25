import React from "react";
import Image from "next/image";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
import ImageLoader from "@/components/loader/Loader";
const CamWarrior = () => {
  const EventChar = "https://drive.google.com/uc?export=download&id=1jL-8j78OoS_rveAEXH4Gq4TTwdlzounB"
  return (
    <ImageLoader>
    <div className="Event">
      <div className="Event-content resq">
      <h1 className="EventTitle">ResQlympic</h1>
        <p>
        Welcome to Roborashtras ResQlympics! Its a thrilling competition where teams control robots to navigate obstacles and rescue hostages in a race against time. With a prize pool up for grabs, participants must follow strict rules, ensuring fair play and safety at all times. Manual control is key, with robots limited in size and power supply. The challenge spans two days, with top teams advancing based on performance. Get ready for an action-packed event where innovation meets excitement!
        </p>
        <div className="action_btn">
          <Btn2 link={"/resqlympics.pdf"} />
          <Btn1 text={"Register"} link={"https://unstop.com/p/resqlympic-roborashtra-2k24-pimpri-chinchwad-college-of-engineering-and-researchpccoer-pune-889624"} />
        </div>
      </div>
      <Image src={EventChar} alt="robowar" width={400} height={200} />
    </div>
    </ImageLoader>
  );
};

export default CamWarrior;
