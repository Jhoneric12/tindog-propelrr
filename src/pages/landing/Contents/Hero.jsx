import React from "react";
import { motion } from "framer-motion";
import { AppStore, HeroImg, PlayStore, TindogLogo } from "../../../assets";

const PhoneMockup = () => (
  <div className="relative w-44 md:w-56 mx-auto select-none">
    {/* Phone body */}
    <div className="bg-gray-900 rounded-[2.8rem] p-2.5 shadow-2xl border-4 border-gray-800">
      {/* Screen */}
      <div className="bg-white rounded-[2.2rem] overflow-hidden" style={{ aspectRatio: "9/19" }}>
        {/* Status bar */}
        <div className="bg-[#ff7043] px-4 py-2 flex justify-between items-center">
          <span className="text-white text-[9px] font-semibold">9:41</span>
          <span className="text-white text-[9px]">●●●</span>
        </div>
        {/* App content */}
        <div className="flex flex-col h-full bg-gradient-to-b from-orange-50 to-white px-3 py-4 gap-3">
          <div className="text-center">
            <p className="text-[10px] font-bold text-[#ff7043]">
              <img src={TindogLogo} alt="Tindog Logo" />
              Tindog
            </p>
          </div>
          {/* Dog placeholder card */}
          <div className="rounded-xl overflow-hidden shadow-md bg-amber-100 flex flex-col items-center justify-center py-6">
            <span className="text-5xl">🐕</span>
            <p className="text-[9px] text-gray-500 mt-1 font-medium">Buddy, 2 yrs</p>
            <p className="text-[8px] text-gray-400">Golden Retriever</p>
          </div>
          {/* Action buttons */}
          <div className="flex justify-center gap-4 mt-1">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-sm shadow">✕</div>
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm shadow">♥</div>
          </div>
          {/* Bottom nav placeholder */}
          <div className="mt-auto flex justify-around border-t border-gray-100 pt-2">
            {["🏠", "🔍", "💬", "👤"].map((icon) => (
              <span key={icon} className="text-base">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    {/* Notch */}
    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-gray-900 rounded-full z-10" />
    {/* Side buttons */}
    <div className="absolute right-[-6px] top-24 w-1.5 h-10 bg-gray-700 rounded-r-sm" />
    <div className="absolute left-[-6px] top-16 w-1.5 h-7 bg-gray-700 rounded-l-sm" />
    <div className="absolute left-[-6px] top-24 w-1.5 h-7 bg-gray-700 rounded-l-sm" />
  </div>
);

const AppBadge = ({ store }) => (
  <a href="#" className="hover:opacity-80 transition-opacity">
    <img
      src={store === "apple" ? AppStore : PlayStore}
      alt={store === "apple" ? "App Store" : "Google Play"}
      className="h-16"
    />
  </a>
);

const Hero = () => {
  return (
    <section
      id="hero"
      className="px-6 md:px-16 mt-14 lg:px-30 pb-36 pt-6 flex flex-col-reverse xl:flex-row items-center justify-between gap-14"
    >
      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg text-white text-center md:text-left w-full"
      >
        <p
          className="text-white text-3xl mb-2 font-medium tracking-wide"
          style={{ fontFamily: "'Nanum Pen Script', cursive" }}
        >
          Don&apos;t make your dog lonely.
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-14 mb-5">Get your dog a partner in life</h1>
        <p className="text-white/80 mb-7 text-sm md:text-base leading-relaxed">
          Tindog assists dog owners whose pets are lonely. Tindog also collaborated with veterinarians and a dog
          adoption project. Be a part of this change
        </p>
        <p
          className="text-white text-3xl mb-4 font-medium tracking-wide"
          style={{ fontFamily: "'Nanum Pen Script', cursive" }}
        >
          Download the app now
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <AppBadge store="google" />
          <AppBadge store="apple" />
        </div>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="shrink-0 relative"
      >
        <img src={HeroImg} alt="Tindog app hero" className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[520px]" />
      </motion.div>
    </section>
  );
};

export default Hero;
