import React from "react";
import { TindogLogo } from "../../../assets";

const NavLogo = ({ isScrolled, url = "/" }) => {
  return (
    <a href={url} className="text-2xl font-bold tracking-wide flex items-center gap-4">
      <img
        src={TindogLogo}
        alt="Tindog Logo"
        className="transition-all duration-300"
        style={
          isScrolled
            ? { filter: "invert(42%) sepia(93%) saturate(600%) hue-rotate(330deg) brightness(100%) contrast(95%)" }
            : {}
        }
      />
      <span className={isScrolled ? "text-[#FF6254] font-semibold text-2xl" : "text-white font-semibold text-2xl"}>
        Tindog
      </span>
    </a>
  );
};

export default NavLogo;
