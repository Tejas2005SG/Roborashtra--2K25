'use client';
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import MainCharater from "../images/mainChar.png";
import "./main.css";
import pccoer from "../images/PCCOER.png";
import pcet from "../images/PCET.png";
import ImageLoader from "@/components/loader/Loader";
import Btn4 from "@/components/Buttons/Btn4";
import Logo from "@/images/loaderLogo.png";
import Cursor from "@/components/Cursor/cursor";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import drone from "@/images/drone.png";

export default function Home() {
  const [showStarterPage, setShowStarterPage] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const starterPageTimeout = setTimeout(() => {
      setShowStarterPage(false);
    }, 3900);

    const contentTimeout = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => {
      clearTimeout(starterPageTimeout);
      clearTimeout(contentTimeout);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".welcomeTag h1", {
      opacity: 0,
      y: 100,
      delay: 0,
      duration: 1,
    });
    tl.from(".yearTag h2", {
      opacity: 0,
      y: 100,
      delay: 0.5,
      duration: 1,
    });
  });

  // Cursor
  

  return (
    <>
      {showStarterPage && (
        <div className='startPage'>
          <div className="welcomeTag">
            <h1 className="text-4xl text-center">Welcome To</h1>
          </div>
          <div className="startTitle">
            <span style={{ color: "orange" }}>ROBO</span>
            <span>RAS</span>
            <span style={{ color: "green" }}>HTRA</span>
          </div>
          <div className="logo">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="yearTag">
            <h2>2K25</h2>
          </div>
        </div>
      )}
      {showContent && (
        <ImageLoader>
          <Cursor />
          <div className="main">
            <div className="clgLogo">
              <Image src={pccoer} alt="pccoer" />
              <Image src={pcet} alt="pcet" />
            </div>
            <div className="clgName text-xl text-center">
              <div className="leftLogo"></div>
              <div className="Name">
                <p>Pimpri Chinchwad College Of Engineering & Research</p>
                <p>Presents</p>
              </div>
              <div className="rightLogo"></div>
            </div>
            <div className="main_wrapper">
              <main className="main">
                <div>
                  <center>
                    <Image src={MainCharater} alt="main-character" />
                  </center>
                </div>
                <div className="main_title">
                  <span>Robo</span>
                  <span>Rashtra</span>
                </div>
                <div className="main_bottom">
                  <p className="">
                    “Rise Of The RoboNation: Bharat Leads The Way”
                  </p>
                  <div className="start_btn">
                    <Btn4 link={"./menu"} />
                  </div>
                </div>
              </main>
            </div>
            <div className="drone">
              <Image src={drone} alt="drone" />
            </div>
          </div>
        </ImageLoader>
      )}
    </>
  );
}
