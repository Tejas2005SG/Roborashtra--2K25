import React from 'react'
import "./glimpse.css"

const page = () => {
  return (
    <>
    <div className="glimpse_container w-full">      <div className="cards grid grid-cols-3 relative top-24"> 
        <div className="smallCards grid grid-rows-3 relative top-4 gap-4">
        <div className="card1 border bg-slate-900 border-white w-full h-52 relative"></div>
        <div className="card1 border bg-slate-900 border-white w-full h-52 relative bottom-2.5"></div>
        <div className="card2 border bg-slate-900 border-white  h-52 w-full relative bottom-5"></div>
          </div>      
       <div className="bigCards w-full  z-999 h-full grid grid-rows-2 gap-6 relative p-4">

          
            <div className="bigCard1 border bg-slate-900 border-white w-full"></div>
            <div className="bigCard1 border bg-slate-900 border-white  w-full"></div>

          
        </div>

        <div className="smallCards grid grid-rows-3 relative top-4 gap-4">
        <div className="card1 border bg-slate-900 border-white w-full h-52 relative"></div>
        <div className="card1 border bg-slate-900 border-white w-full h-52 relative bottom-2.5"></div>
        <div className="card2 border bg-slate-900 border-white  h-52 w-full relative bottom-5"></div>
          </div>



        </div>
        
        <div className="cards grid grid-cols-3 relative top-24"> 
        <div className="smallCards grid grid-rows-3 relative top-4 gap-4">
        <div className="card1 border bg-slate-900 border-white w-full h-52 relative"></div>
        <div className="card1 border bg-slate-900 border-white w-full h-52 relative bottom-2.5"></div>
        <div className="card2 border bg-slate-900 border-white  h-52 w-full relative bottom-5"></div>
          </div>      
       <div className="bigCards w-full  z-999 h-full grid grid-rows-2 gap-6 relative p-4">

          
            <div className="bigCard1 border bg-slate-900 border-white w-full"></div>
            <div className="bigCard1 border bg-slate-900 border-white  w-full"></div>

          
        </div>

        <div className="smallCards grid grid-rows-3 relative top-4 gap-4">
        <div className="card1 border bg-slate-900 border-white w-full h-52 relative"></div>
        <div className="card1 border bg-slate-900 border-white w-full h-52 relative bottom-2.5"></div>
        <div className="card2 border bg-slate-900 border-white  h-52 w-full relative bottom-5"></div>
          </div>



        </div>
        </div>
  
        </> 

    
  )
}

export default page
