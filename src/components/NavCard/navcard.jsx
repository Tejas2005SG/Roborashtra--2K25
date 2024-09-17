import React from 'react'
import Image from 'next/image'
import homePng from '../NavCard/images/Home.png'
import './NavCard.css'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import gsap from 'gsap';

const Navcard = ({index, imgSrc, name}) => {
  // gsap.from(".NavCard",{
  //   opacity: 0,
  //   y: 100,
  //   delay: 0,
  //   duration: 1,

  // })
  return (

    <div className='NavCard h-32 sm:h-40 rounded-xl p-4 relative overflow-hidden'>
      <FaArrowRight className='Arrow absolute text-4xl -top-1 -left-1  p-1 rounded-full gap-3' />
      <div className="content grid grid-rows-2 mt-4 items-center text-center align-middle justify-center w-full h-full">
        {/* <h2 className='relative -right-28 -top-4 text-xl font-bold'>{index}</h2> */}
        <Image src={imgSrc} alt="navImg" srcset="" width={125} height={125} />
        <h2 className='relative text-xl mt-2'>{name}</h2>
        </div>
    </div>
  )
}

export default Navcard