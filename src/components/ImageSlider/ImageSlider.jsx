import React from 'react'
import './imageSlider.css'
import Slider from 'react-slick';
import Image from 'next/image';
import { useState } from 'react';
import slide1 from "@/images/Char2.png";
import slide2 from "@/images/Char3.png";
import slide3 from "@/images/drone.png";
import slide4 from "@/images/logo.png";
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

const images = [slide1, slide2, slide3, slide4]
function ImageSlider() {
     const NextArrow = ((onClick) =>{
         return(
             <div className="arrow next" onClick={onClick}>
                 <FaRegArrowAltCircleRight />
             </div>
         )
     });

     const PrevArrow = ((onClick) =>{
         return(
             <div className="arrow prev" onClick={onClick}>
                 <FaRegArrowAltCircleLeft />
             </div>
         )
     });

     const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        layLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
         nextArrow: <NextArrow />,
         prevArrow: <PrevArrow />,
         beforeChange: (current, next)=> setImageIndex(next)

    }
  return (
    <div className='Slidercontainer'>
        <Slider {...settings}>
            {images.map((img, idx) => {
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <Image src={img} alt={img} srcset="" />
                </div>
            })}
        </Slider>
    </div>
  
  )
}

export default ImageSlider