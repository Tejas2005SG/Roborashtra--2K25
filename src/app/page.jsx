import Nav from "@/components/Nav/Nav";
import Image from "next/image";
import MainCharater from "../images/mainChar.png";
import "./main.css";
import ImageLoader from "@/components/loader/Loader";
import Btn4 from "@/components/Buttons/Btn4";

export default function Home() {
  return (
    <ImageLoader>
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
          <p>“Rise Of The RoboNation, Bharat Leads The Way”</p>
          <div className="start_btn">
            <Btn4 link={"/menu"} />
          </div>
        </div>
      </main>
    </div>
    </ImageLoader>
  );
}
