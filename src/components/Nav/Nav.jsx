"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import "./Nav.css";
import Link from "next/link";
import smallLogo from "@/images/loaderLogo.png";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400"] });

const options = [
  {
    opt: "Event",
    link: "/menu",
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
          <Image src={logo} width={275} height={100} alt="logo" />
        </Link>

       <p>Powered By</p>
       <Image src="" alt="" srcset="" />

        {/* <ul className="desktop-links" style={menustyle}>
          {options.map((option) => {
            return (
              <li key={option.opt}>
                <Link
                  className={play.className}
                  href={option.link}
                  onClick={() => setMenu((prev) => !prev)}
                >
                  {option.opt}
                </Link>
              </li>
            );
          })}
        </ul> */}
         <div className="hamMenu" id="hammenu" onClick={()=>{
          setMenu((prev)=> !prev)
         }}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </nav>

     
    </div>


  );
};

export default Nav;
