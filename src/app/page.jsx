import Nav from "@/components/Nav/Nav";
import Image from "next/image";
import MainCharater from "../images/mainChar.png";
import drdo from "../images/DRDO.png";
import diat from "../images/DIAT.jpg";
import handshake from "../images/Handshake.png";
import pcet from "../images/PCET.jpg";
import pccoer from "../images/PCCOER.jpg";

import "./main.css";
import Btn1 from "@/components/Buttons/Btn1";
export default function Home() {
  return (
    <div className="wrapper">
      {/* <div className="nav_wrapper">
        <Nav />
      </div> */}
      <main className="">
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
          <p>“The Rise Of RoboNation Bharat Leads The Way”</p>
          <div className="start_btn">
            <Btn1 text={"Start"} link={"/menu"} />
          </div>
        </div>
      </main>

      <div className="bottomLogo">
        <Image src={diat} alt="diat" srcset="" />
        <Image src={drdo} alt="drdo" srcset="" />
        {/* <Image src={handshake} alt="handshake" srcset="" /> */}
        <h1>X</h1>
        <Image src={pcet} alt="pcet" srcset="" />
        <Image src={pccoer} alt="pccoer" srcset="" />

      </div>
    </div>
  );
}
