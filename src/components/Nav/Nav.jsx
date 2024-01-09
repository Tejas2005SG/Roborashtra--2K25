"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import "./Nav.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400"] });

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
  const [menu, setMenu] = useState(false);
  let menustyle = menu ? { left: "0%" } : { left: "-110%" };
  return (
    <div>
      <nav>
        <Link href="/">
          <Image src={logo} width={275} height={100} />
        </Link>
        <ul className="desktop-links" style={menustyle}>
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
        </ul>
        <GiHamburgerMenu
          id="hammenu"
          onClick={() => {
            setMenu((prev) => !prev);
          }}
        />
      </nav>
    </div>
  );
};

export default Nav;
