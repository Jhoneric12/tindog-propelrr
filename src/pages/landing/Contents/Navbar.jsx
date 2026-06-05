import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TindogLogo } from "../../../assets";

const links = [
  { label: "Features", href: "#cta" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Guides", href: "#cta" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`z-50 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl px-6 py-3 bg-white rounded-full shadow-lg text-[#FF6254]"
          : "relative px-6 md:px-16 py-5 text-white"
      }`}
    >
      {/* Logo */}
      <a href="/" className="text-2xl font-bold tracking-wide flex items-center gap-4">
        <img src={TindogLogo} alt="Tindog Logo" />
        <span className={scrolled ? "text-[#FF6254]" : "text-white"}>Tindog</span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-14">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={`font-medium text-sm ${scrolled ? "text-[#FF6254]" : "text-white"}`}
          >
            {l.label}
          </a>
        ))}
        <a href="#cta">
          <button
            className={`text-sm font-medium px-5 py-2 rounded-[200px] transition-all ${
              scrolled
                ? "bg-[#FF6254] text-white border border-[#FF6254]"
                : "bg-white text-[#FF6254] border border-white"
            }`}
          >
            Get the app
          </button>
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className={`md:hidden text-2xl leading-none ${scrolled ? "text-[#FF6254]" : "text-white"}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#ff7043] flex flex-col items-center gap-5 py-8 shadow-lg text-white"
          >
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-white font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#" className="border border-white text-white px-6 py-2 rounded-full">
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
