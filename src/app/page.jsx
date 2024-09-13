'use client';
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import MainCharater from "../images/mainChar2.png";
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
import bottomRobo from "@/images/homerobo-3.png";
import MainImg from "@/images/Main-3.png";


export default function Home() {

    const [showStarterPage, setShowStarterPage] = useState(true);
    const [showContent, setShowContent] = useState(false);

    const stringRef = useRef(null);

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

    useEffect(() => {

      // Delaying the effect slightly to ensure the element is rendered
      setTimeout(() => {
        const string = stringRef.current;
        console.log(string); // Check if string is still null

        if (!string) return;

        const handleMouseMove = (dets) => {
          const path = `M 0 100 Q 400 ${dets.y} 780 100`;
          gsap.to("svg path", {
            attr: { d: path },
            duration: 0.4,
            ease: "power3.out",
          });
        };

        const handleMouseLeave = () => {
          const path = 'M 0 100 Q 400 100 780 100';
          gsap.to("svg path", {
            attr: { d: path },
            duration: 1.5,
            ease: "elastic.out(1,0.2)",
          });
        };

        string.addEventListener("mousemove", handleMouseMove);
        string.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup function
        return () => {
          if (string) {
            string.removeEventListener("mousemove", handleMouseMove);
            string.removeEventListener("mouseleave", handleMouseLeave);
          }
        };
      }, 200); // Setting timeout to 0 ensures the DOM has settled
    }, [showContent]);

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

    return (
      <>
        {showStarterPage && (
          <div className='startPage'>

            <div className="welcomeTag">
              <h1 className="text-2xl md:text-4xl text-center">Welcome To</h1>
            </div>
            <div className="startTitle">
              <span style={{ color: "orange" }}>ROBO</span>
              <span>RAS</span>
              <span style={{ color: "green" }}>HTRA</span>
            </div>
            <div className="logo">
              <Image src={Logo} alt="logo" />
            </div>
            <div className="yearTag text-2xl md:text-4xl ">
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
              <div className="clgName  ">
                <div className="leftLogo"></div>
                <div className="Name">
                  <p>Pimpri Chinchwad College Of Engineering & Research</p>
                  <p>Presents</p>
                </div>
                <div className="rightLogo"></div>
              </div>
              <div className="main_wrapper">
                <main className="main">
                  <div className="main-character">
                    <Image src={MainImg} alt="main-character" />
                  </div>
                  <div className="main_title ">
                    <span id="leftTitle ">Robo</span>
                    {/* <Spline/> */}

                    <span>Rashtra</span>
                  </div>
                  <div className="RobohawkRepresentation">
                    <div id="string" ref={stringRef}>
                      <svg width="800" height="200">
                        <path d="M 0 100 Q 400 100 780 100" stroke="white" fill="transparent" />
                      </svg>
                    </div>
                    <div className="representedBy">
                      <h2>Presented By</h2>
                      <h1>Robohawk</h1>
                    </div>
                  </div>
                  <div className="main_bottom">
                    <p className="tagline">“Rise Of The RoboNation: Bharat Leads The Way”</p>
                    <div className="start_btn">
                      <Btn4 link={"./menu"} />
                    </div>
                  </div>
                </main>
              </div>
              <div className="drone">
                <Image src={drone} alt="drone" />
              </div>
              <div>

              </div>

              <div className="bottomImg">
                <Image src={bottomRobo} alt="" srcset="" width={100} height={100} />
              </div>
            </div>
          </ImageLoader>
        )}
      </>
    );
  }

