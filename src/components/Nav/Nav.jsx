"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import "./Nav.css";
import Link from "next/link";
import smallLogo from "@/images/loaderLogo.png";
import { Play } from "next/font/google";
import { Ri4KFill, RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Navcard from "../NavCard/navcard";
import HomeNav from "../NavCard/images/Home.png"
const play = Play({ subsets: ["latin"], weight: ["400"] });

const options = [
  {
    opt: "Event",
    link: "/menu",
    img: HomeNav
  },
  {
    opt: "Team",
    link: "/menu/teams",
  },
  {
    opt: "Sponsors",
    link: "/menu/sponsors"
  },
  {
    opt: "Clan",
    link: "/menu/clan",
  },
  {
    opt: "FAQ",
    link: "/menu/Faq",
  },
  {
    opt: "Contact Us",
    link: "/menu/Contact",
  },
];

const Nav = () => {
  const [menu, setMenu] = useState(false);
  let menustyle = menu ? { left: "0%" } : { left: "-110%" };
  return (
    <div >
      <nav className="">
        <Link href="/" className="Nav">
         
          <Image src={smallLogo} width={50} height={50} alt="" srcset=""  id="smallLogo"/>
          <Image src={logo} width={275} height={100} alt="logo" id="logo"/>
        </Link>

       <p>Powered By</p>
       <Image src="" alt="" srcset="" />

        <div className="HamMenuBar absolute top-4 right-3 text-4xl cursor-pointer"  onClick={()=>{
          setMenu((prev)=> !prev)
         }}>
          <RiMenu4Fill />
       
      
       </div>
         <ul className="desktop-links" style={menustyle}>
          {options.map((option, index) => {
            return (
              <>              <li key={option.opt}>
                <Link
                  className={play.className}
                  href={option.link}
                  onClick={() => setMenu((prev) => !prev)}
                >
                  <Navcard name={option.opt} index={index} imgSrc={option.img} />
                </Link>
              </li>
              <RxCross2 className="absolute top-8 right-4 text-4xl text-white cursor-pointer" onClick={() => setMenu((prev) => !prev)} />
              </>

            );
          })}
        </ul> 
        

      </nav>

     
    </div>


  );
};

export default Nav;
