import React from "react";
import Navbar from "./Contents/Navbar";
import Hero from "./Contents/Hero";
import Partners from "./Contents/Partners";
import Testimonials from "./Contents/Testimonials";
import CTA from "./Contents/CTA";
import Footer from "./Contents/Footer";

const Landing = () => {
  return (
    <main className="overflow-x-hidden">
      <div className="bg-gradient-to-r from-[#f4956a] to-[#f04f5e] relative pb-52 md:pb-60">
        <Navbar />
        <Hero />

        {/* Curved bottom edge  */}
        <div
          className="absolute bottom-[-1px] left-[-5%] w-[110%] h-52 md:h-60 bg-white"
          style={{
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        />

        <div className="absolute bottom-26 md:bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0 z-10">
          <a href="#testimonials" className="flex flex-col items-center gap-0">
            <span className="text-3xl" style={{ fontFamily: "'Nanum Pen Script', cursive" }}>
              Find out more
            </span>
            <span className="text-3xl leading-none -mt-2 block animate-bounce">&#8964;</span>
          </a>
        </div>
      </div>

      <Partners />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Landing;
