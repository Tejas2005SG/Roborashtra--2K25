import React from 'react'
import "./glimpse.css"
import Image from 'next/image'
// import Blaze from "../../../images/BlazeProperArena (1).svg"

const page = () => {
  return (
    <>
    <div className="glimpse_container">      
      <div className="cards"> 
        <div className="smallCardsContainer">
        <div className="smallCards">
          {/* <Image src={Blaze} alt="" srcset="" width={100} height={100}/> */}
        </div>
        <div className="smallCards relative md:bottom-2.5">
          <Image src="https://drive.google.com/uc?export=download&id=1298_jMrkqinhufDh8K9Dva0UXahAnd77" alt="" srcset="" width={100} height={100} />
        </div>
        <div className="smallCards relative md:bottom-5">
          <Image src="https://drive.google.com/uc?export=download&id=1d91LYuA1E57jLSXu_KYLXNYHew9aX5L9" alt="" srcset="" width={100} height={100} />
        </div>
          </div>      
       <div className="bigCardsContainer">
            <div className="bigCard1"></div>
            <div className="bigCard1 "></div>
        </div>

        <div className="smallCardsContainer">
        <div className="smallCards"></div>
        <div className="smallCards relative md:bottom-2.5"></div>
        <div className="smallCards relative md:bottom-5"></div>
          </div>
        </div>
        
        <div className="cards mb-14"> 
        <div className="smallCardsContainer">
        <div className="smallCards"></div>
        <div className="smallCards relative md:bottom-2.5"></div>
        <div className="smallCards relative md:bottom-5"></div>
          </div>      
       <div className="bigCardsContainer">

          
            <div className="bigCard1"></div>
            <div className="bigCard1 "></div>

          
        </div>

        <div className="smallCardsContainer">
        <div className="smallCards"></div>
        <div className="smallCards relative md:bottom-2.5"></div>
        <div className="smallCards relative md:bottom-5"></div>
          </div>
        </div>
        </div>
  
        </> 

    
  )
}

export default page
