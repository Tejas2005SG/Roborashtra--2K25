import React from 'react'
import Image from 'next/image'
import homePng from '../NavCard/images/Home.png'
import './NavCard.css'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

const Navcard = ({index, imgSrc, name}) => {
  return (

    <div className='NavCard bg-orange-700  h-40 rounded-xl p-4 relative overflow-hidden'>
      <FaArrowRight className='Arrow absolute text-orange-700 text-4xl -top-1 -left-1  p-1 rounded-full' />
      <div className="content grid grid-rows-3 items-center justify-center w-full h-full">
        <h2 className='relative -right-28 -top-4 text-xl font-bold'>{index}</h2>
        <Image src={imgSrc} alt="" srcset="" width={125} height={125} />
        <h2 className='relative mt-2 -bottom-4 text-xl font-bold'>{name}</h2>
        </div>
    </div>
  )
}

export default Navcard