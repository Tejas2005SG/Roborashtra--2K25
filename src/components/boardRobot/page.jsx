import React from 'react'
import Image from 'next/image';
import RoboBoard from '@/images/RoboBoard.png';

function page() {
  return (
    <div>
         <div className="prizePool">
    <Image src={RoboBoard} alt="roboBoard" srcset="" />

    <div className="prizes">
    <p>PrizePool</p>
    <p>2,00,000 +</p>
    </div>
  </div>
    </div>
  )
}

export default page
