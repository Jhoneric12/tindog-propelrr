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
      {/* Hero — orange section wraps nav + hero content */}
      <div className="bg-gradient-to-r from-[#f4956a] to-[#f04f5e] relative">
        <Navbar />
        <Hero />
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-20 block"
          >
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="white" />
          </svg>
          {/* Find out more — sits on the curve */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-1">
            <p className="text-gray-500 text-2xl" style={{ fontFamily: "'Nanum Pen Script', cursive" }}>
              Find out more
            </p>
            <span className="text-gray-400 text-sm leading-none">&#8964;</span>
          </div>
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
