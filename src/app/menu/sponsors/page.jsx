import React from "react";
import Image from "next/image";
import "./sponsors.css";
import unstop from "../../../images/Unstop.jpg";
import drdo from "../../../images/Drdo.png"
import imperial from "../../../images/imperial.png"
import cogna from "../../../images/cogna.png"
import insidefpv from "../../../images/insidefpv.png"
import powerPlanner from "../../../images/powerPlanner.jpg"
import mitu from "../../../images/mitu.png"


  export default function Sponsors(){
    return(
    // <div className=" text-center text-lg">Coming Soon</div>
    <div className="sponsor" style={{ }}>
       <div className="sponsor_wrapper">
         <h3>Technical Collaboration</h3>
         <Image src={drdo} alt="" srcset="" />

         <h3>Powered By</h3>
         <Image src={unstop} alt="" srcset="" />

         <h3>Drone Partner</h3>
        <div className="dronePartner">
         <Image src={insidefpv} alt="" srcset=""  />
         </div>

          <h3>Associative Sponsor</h3>
         <div className="sponsor_row">
          <Image src={imperial} alt="" srcset="" />
          <Image src={cogna} alt="" srcset="" />
          <Image src={powerPlanner} alt="" srcset="" />
          <Image src={mitu} alt="" srcset="" />



         </div> 
       </div>
      </div> 
    );
}

