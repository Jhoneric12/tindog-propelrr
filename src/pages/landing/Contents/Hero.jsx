import React from "react";
import { motion } from "framer-motion";
import { HeroImg, TindogLogo } from "../../../assets";
import AppBadge from "../../../components/ui/badge/AppBadge";

const Hero = () => {
  return (
    <section
      id="hero"
      className="px-6 md:px-16  lg:px-30 pb-8 pt-6 flex flex-col-reverse xl:flex-row items-center justify-between gap-14"
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
        <h1 className="text-4xl md:text-5xl font-semibold leading-14 md:leading-18 mb-5">
          Get your dog a partner in life
        </h1>
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
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10 md:mb-20 xl:mb-0">
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
