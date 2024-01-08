import Nav from "@/components/Nav/Nav";
import Image from "next/image";
import MainCharater from "../images/mainChar.png";
import "./main.css";
import Btn1 from "@/components/Buttons/Btn1";
export default function Home() {
  return (
    <div className="wrapper">
      <Nav />

      <main className="">
        <div>
          <center>
            <Image src={MainCharater} />
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
    </div>
  );
}
