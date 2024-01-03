"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import "./Nav.css";
import Bt from "../Buttons/Btn1";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Btn1 from "../Buttons/Btn1";

const options = [
  {
    opt: "Start",
    link: "/",
  },
  {
    opt: "Event",
    link: "/menu",
  },
  {
    opt: "Team",
    link: "/menu/teams",
  },
  {
    opt: "Our Clan",
    link: "/menu/clan",
  },
  {
    opt: "Sponsors",
    link: "/menu/sponsors",
  },
];

const Nav = () => {
  const [menu, setmenu] = useState(false);
  let menustyle = menu ? { left: "0%" } : { left: "-110%" };
  return (
    <nav style={{ padding: "1rem 0" }}>
      <Image src={logo} width={275} height={100} />

      <ul className="desktop-links" style={menustyle}>
        {options.map((option) => {
          return (
            <li key={option.opt}>
              <Link href={option.link} onClick={() => setMenu((prev) => !prev)}>
                {option.opt}
              </Link>
            </li>
          );
        })}
      </ul>
      <GiHamburgerMenu
        id="hammenu"
        onClick={() => {
          setmenu((prev) => !prev);
        }}
      />
    </nav>
  );
};

export default Nav;
