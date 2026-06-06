import React from "react";
import { TindogLogo } from "../../../assets";

const PlainLogo = ({ url = "/" }) => {
  return (
    <a href={url} className="text-white text-2xl font-bold tracking-wide flex items-center gap-4">
      <img src={TindogLogo} alt="Tindog Logo" /> <span className="text-white font-semibold text-2xl">Tindog</span>
    </a>
  );
};

export default PlainLogo;
