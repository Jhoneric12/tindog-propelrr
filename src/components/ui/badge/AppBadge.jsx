import React from "react";
import { AppStore, PlayStore } from "../../../assets";

const AppBadge = ({ store }) => {
  return (
    <a href="#" className="hover:opacity-80 transition-opacity">
      <img
        src={store === "apple" ? AppStore : PlayStore}
        alt={store === "apple" ? "App Store" : "Google Play"}
        className="h-12"
      />
    </a>
  );
};

export default AppBadge;
