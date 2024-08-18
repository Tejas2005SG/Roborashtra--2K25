import React from 'react'
import "./glimpse.css";
import Image from "next/image"
import GlimpseCard from '@/components/glimpseCard/glimpseCard';
import glimpse1 from "../../../images/glimpse1.png"
import glimpse2 from "@/images/card2.jpg"



function gallery() {
  return (
    <div className='gallery_wrapper'>
        <h1>Our Gallery</h1>
        <div className="imgs">
          <GlimpseCard imgUrl={"https://drive.google.com/uc?export=download&id=1FkKK0sT_VUvpNw1HZbWQdm9ycjJtBslZ"}/>
          <GlimpseCard imgUrl={"https://drive.google.com/uc?export=download&id=1wurWBu9dzXSoEUf7N-uLuuPFwmOETEBw"}/>
          <GlimpseCard  imgUrl={"https://drive.google.com/uc?export=download&id=15a07v3oXjdQQiw5mIHbceXtbGemym0dF"}/>
          <GlimpseCard imgUrl={"https://drive.google.com/uc?export=download&id=1LVo70QREC8lBUrWxCQAHlPNSbPKlMSms"}/>
          <GlimpseCard  imgUrl={glimpse1}/>
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