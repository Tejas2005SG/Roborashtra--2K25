'use client';
import react, {useEffect, useState} from "react";
import Image from "next/image";
import MainCharater from "../images/mainChar.png";
import "./main.css";
import ImageLoader from "@/components/loader/Loader";
import Btn4 from "@/components/Buttons/Btn4";
import Logo from "@/images/loaderLogo.png";

export default function Home() {
  const [showStarterPage, setShowStarterPage] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show starterPage for 4 seconds
    const starterPageTimeout = setTimeout(() => {
      setShowStarterPage(false);
    }, 
    4000);

    // After 4 seconds, hide starterPage and show content
    const contentTimeout = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 4s (starterPage time) + 4s (delay before showing content)

    // Cleanup timeouts on component unmount
    return () => {
      clearTimeout(starterPageTimeout);
      clearTimeout(contentTimeout);
    };
  }, []);
  return (
    <>  
    {showStarterPage &&
      <div className='startPage'>
     
      <div className="startTitle">
        <span style={{color:"orange"}}>ROBO</span>
        <span>RAS</span>
        <span style={{color:"green"}}>HTRA</span>
        </div>
        <div className="logo">
        <Image src={Logo} alt="logo" srcset="" />
      </div>
    </div>
}
    {showContent &&    
    <ImageLoader>
      <div className="clgName text-xl text-center">
        <div className="leftLogo"></div>
        <div className="Name">
        <p>Pimpri Chinchwad College Of Engineering & Research</p><p>Presents</p>
        </div>
        <div className="rightLogo"></div>
      </div>
    <div className="wrapper">
      {/* <div className="nav_wrapper">
        <Nav />
      </div> */}
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
          <p>“Rise Of The RoboNation: Bharat Leads The Way”</p>
          <div className="start_btn">
            <Btn4 link={"/menu"} />
          </div>
        </div>
      </main>
    </div>
    </ImageLoader>
}
    </>

  );
}
