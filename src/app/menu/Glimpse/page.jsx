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
import glimpse8 from  "@/images/Glimpse/Audience.png"
import glimpse9 from  "@/images/Glimpse/Evaluation2.png"
import glimpse10 from  "@/images/Glimpse/Evalution1.png"
import glimpse11 from  "@/images/Glimpse/Guest.png"
import glimpse12 from  "@/images/Glimpse/Inaguration.png"
import glimpse13 from  "@/images/Glimpse/Lead.png"
import glimpse14 from  "@/images/Glimpse/PrincipalMam.png"
import glimpse15 from  "@/images/Glimpse/PrizeDistribution1.png"
import glimpse16 from  "@/images/Glimpse/Prizedistribution2.png"
import glimpse17 from  "@/images/Glimpse/Prizesholding.png"
import glimpse18 from  "@/images/Glimpse/Ribbin.png"








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
          <GlimpseCard imgUrl={glimpse8}/>
          <GlimpseCard imgUrl={glimpse9}/>
          <GlimpseCard imgUrl={glimpse10}/>
          <GlimpseCard imgUrl={glimpse11}/>
          <GlimpseCard imgUrl={glimpse12}/>
          <GlimpseCard imgUrl={glimpse13}/>
          <GlimpseCard imgUrl={glimpse14}/>
          <GlimpseCard imgUrl={glimpse15}/>
          <GlimpseCard imgUrl={glimpse15}/>
          <GlimpseCard imgUrl={glimpse16}/>
          <GlimpseCard imgUrl={glimpse17}/>
          <GlimpseCard imgUrl={glimpse18}/>



    
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