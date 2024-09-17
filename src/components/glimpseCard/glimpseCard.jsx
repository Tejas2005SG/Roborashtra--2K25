import React from 'react'
import card1Front  from "../../images/card1bg.jpg"
import Image from 'next/image'
import "./glimpseCard.css"


const glimpseCard = ({imgUrl, videoUrl}) => {
  return (
    <div className='mainDiv h-25 bottom-2 border-red'>
        {imgUrl &&
        <div className="ImgContainer">
        <Image src={imgUrl} alt="glimpseImg" srcset="" width={0} height={0} loading='lazy'/>
        </div>
}
        {/* { videoUrl &&
        <video controls loop autoPlay>
            <source src={videoUrl} type="video/mp4"/>
        </video>
} */}
    </div>
  )
}

export default glimpseCard