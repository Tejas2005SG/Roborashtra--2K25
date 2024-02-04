import React from "react";
import Image from "next/image";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
import ImageLoader from "@/components/loader/Loader";
const CamWarrior = () => {
  const EventChar = "https://drive.google.com/uc?export=download&id=18MICSbtuq-MXSwOGSdKHmRJA5T-645I1"
  return (
    <ImageLoader>
    <div className="Event">
      <div className="Event-content resq">
      <h1 className="EventTitle">ResQlympic</h1>
        <p>
        Welcome to Resqlympic, where robots demonstrate life-saving rescue operations! This thrilling event showcases the incredible abilities of robots navigating challenging scenarios to extract people in distress. Join us for a celebration of innovation, compassion, and the vital role of technology in humanitarian efforts. Get ready for a remarkable fusion of cutting-edge robotics and the noble mission of saving lives in the most demanding situations.
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
