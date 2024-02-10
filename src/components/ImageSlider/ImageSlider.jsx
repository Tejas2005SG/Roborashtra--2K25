import React from 'react'
import './imageSlider.css'
import Slider from 'react-slick';
import Image from 'next/image';
import { useState } from 'react';
import slide1 from "@/images/drone.jpg";
import slide2 from "@/images/pickndrop.jpg";
import slide3 from "@/images/UltrasonicSensor.jpg";
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

const images = [slide1, slide2, slide3]

function ImageSlider() {
     const NextArrow = ({onClick}) =>{
         return(
             <div className="arrow next" onClick={onClick}>
                 <FaRegArrowAltCircleRight />
             </div>
         )
     };

     const PrevArrow = ({onClick}) =>{
         return(
             <div className="arrow prev" onClick={onClick}>
                 <FaRegArrowAltCircleLeft />
             </div>
         )
     };

     const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2200,
        dots: true,
        cssEase: "linear",
        pauseOnHower: "true",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next)=> setImageIndex(next)
    
    }
  return (
    <div className='Slidercontainer'>
        <Slider {...settings}>
            {images.map((img, idx) => (
                <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <Image src={img} alt={img} objectFit='cover'/>
                </div>
            ))}
        </Slider>
    </div>
  
  )
}

export default ImageSlider