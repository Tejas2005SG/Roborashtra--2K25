import React from "react";
import Image from "next/image";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
import ImageLoader from "@/components/loader/Loader";
const CamWarrior = () => {
  // const EventChar = "https://drive.google.com/uc?export=download&id=14eBTQOgsIRHHEb11rUoIUWkkHW6HU261"
  return (
    <ImageLoader>
      <div className="Event">
        <div className="Event-content robowar">
          <h1 className="EventTitle">Robofest</h1>
          <p>
            Calling all aspiring young minds and future engineers! Get ready to showcase your ingenuity and passion for robotics at our eagerly awaited event: the Young Innovators  RoboFest. Whether you are an elementary school student or a high schooler, this fest is your chance to shine bright and demonstrate your robotic creations and innovative ideas.<br />

            Join us for a day filled with excitement, exploration, and inspiration. From imaginative robot designs to groundbreaking concepts, this fest is the ultimate platform for you to unleash your creativity and make your mark in the world of robotics.
            <h2 className="headContact">For any event related query <br />Contact Manas(Event Head) : 9175967324</h2>
          </p>
          <a href="http://wa.me/+919307727077" rel="noopener noreferrer" target="_blank">
            <button className="whatsapp">Contact Us On Whatsapp</button>
          </a>
          <div className="action_btn ml-[20px]">
            {/* <Btn2 link={"/robowar.pdf"} /> */}
            <Btn1 text={"Register"} link={"https://forms.gle/2gN987WcGN5YWnM5A"} />
          </div>
        </div>
        {/* <Image src="/" alt="robowar" width={500} height={400} /> */}
      </div>
    </ImageLoader>
  );
};

export default CamWarrior;
