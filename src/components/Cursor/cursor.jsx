"use client";
import gsap from "gsap"
import React, { useEffect, useRef } from 'react'
// import HandCursor from "@/images/Handcursor.png"


const Cursor = () => {
    const cursorRef = useRef(null);
  // const mainRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (dets) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: dets.clientX,
          y: dets.clientY,
          duration: 0,
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
     
    </div>
  )
}

export default Cursor