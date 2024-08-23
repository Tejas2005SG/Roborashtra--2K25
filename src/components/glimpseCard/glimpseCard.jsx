import React from 'react'
import card1Front  from "../../images/card1bg.jpg"
import Image from 'next/image'
import "./glimpseCard.css"


const glimpseCard = ({imgUrl, videoUrl}) => {
  return (
    <div className='mainDiv h-25 bottom-2 border-red'>
        {imgUrl &&
        <Image src={imgUrl} alt="" srcset="" width={0} height={0} />
}
        { videoUrl &&
        <video controls loop autoPlay>
            <source src={videoUrl} type="video/mp4"/>
        </video>
}
    </div>
  )
}

export default glimpseCard