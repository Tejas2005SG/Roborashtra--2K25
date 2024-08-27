import React from 'react'
import "./glimpse.css";
import Image from "next/image"
import GlimpseCard from '@/components/glimpseCard/glimpseCard';
import glimpse1 from "../../../images/BlazeTrophy.png"
import glimpse7 from "../../../images/glimpse1.png"

import glimpse2 from "@/images/Team.png"
import glimpse3 from "@/images/blazeTeam.png"
import glimpse4 from "@/images/Trophy.png"
import glimpse5 from "@/images/ResqBot.png"
import glimpse6 from "@/images/resqArena.png"






function gallery() {
  return (
    <div className='gallery_wrapper'>
        <br></br>
        <h1 >Our Gallery</h1>
        <div className="imgs">
        <GlimpseCard imgUrl={glimpse7}/>
          <GlimpseCard imgUrl={glimpse2}/>
          <GlimpseCard imgUrl={glimpse3}/>
          <GlimpseCard  imgUrl={glimpse1}/>
          <GlimpseCard imgUrl={glimpse4}/>
          <GlimpseCard imgUrl={glimpse5}/>
         
          <GlimpseCard imgUrl={glimpse6}/>
         
          <GlimpseCard imgUrl={glimpse2}/>

    
            {/* <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={teamMeeting} alt="" />
            <img src={teamMeeting} alt="" /> */}
        </div>
    </div>
  )
}

export default gallery