"use client";
// page 2 menu
import React from "react";
// importing buttons
import Button from "../Buttons/Btn1";
import Link from "next/link";
// all options for to navigate
const options = [
  { text: "EVENTS", link: "/menu" },
  { text: "Teams", link: "/menu/teams" },
  { text: "Our Clan", link: "/menu/clan" },
  { text: "Sponsors", link: "/menu/sponsors" },
  { text: "Profile", link: "/menu/profile" },
];

const MenuBar = () => {
  return (
    <div>
      {options.map((option) => {
        return (
          <Button
            key={option.text}
            style={{ margin: "1rem" }}
            text={option.text}
            link={option.link}
          />
        );
      })}
    </div>
  );
};

export default MenuBar;
