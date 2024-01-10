import React from "react";
import Member from "@/components/Member/Member";
import "./../teams/teams.css";
import "../clan/clan.css";
import member1 from "./img/google.png";

const members = [
  { img: member1,
  img: member1, 
  img: member1 }
];


  export default function Sponsors(){
    return(
    <div className=" text-center text-lg">Coming Soon</div>
  //  <div className="team" style={{ }}>
  //     <div className="team_wrapper">
  //       <h2>Title Sponsors</h2>
  //       <div className="team_row">
  //         {members.map((member) => {
  //           return (
  //             <>
  //               <Member name={member.name}/>
  //             </>
  //           );
  //         })}
  //         </div>


  //       <h2>Associative Sponsor</h2>
  //       <div className="team_row">
  //         {members.map((member) => {
  //           return (
  //             <>
  //               <Member name={member.name} />
  //             </>
  //           );
  //         })}
  //       </div> 
  //     </div>
  //   </div> 
    );
}

