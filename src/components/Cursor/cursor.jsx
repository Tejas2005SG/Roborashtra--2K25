"use client";
import gsap from "gsap"
import React, { useEffect, useRef } from 'react'
import droneVideo from "../../../public/videos/dronecursor.mp4"


const Cursor = () => {
    const cursorRef = useRef(null);
  // const mainRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (dets) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: dets.clientX,
          y: dets.clientY,
          duration: 1,
          ease: "back.out",
        });
      }
    };

    // const main = mainRef.current;

      window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      
        window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className='cursor' ref={cursorRef}>
      {/* <video width={3000} autoPlay loop muted>
        <source src={droneVideo} type="video/mp4" />
      </video> */}
    </div>
  )
}

export default Cursor