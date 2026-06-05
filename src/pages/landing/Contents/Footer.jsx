import React from "react";
import { motion } from "framer-motion";
import { TindogLogo, AppStore, PlayStore } from "../../../assets";

const Footer = () => {
  return (
    <footer id="links" className="relative bg-gradient-to-r from-[#f4956a] to-[#f04f5e] text-white">
      {/* Concave white curve at the top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20 block"
        >
          <path d="M0,0 C360,80 1080,80 1440,0 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="pt-24 pb-10 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <a href="/" className="text-white text-2xl font-bold tracking-wide flex items-center gap-4">
              <img src={TindogLogo} alt="Tindog Logo" /> <span className="text-white">Tindog</span>
            </a>

            <p className="text-white/80 text-sm leading-relaxed">
              Tindog assists dog owners whose pets are lonely. Tindog also collaborated with veterinarians and a dog
              adoption project. Be a part of this change
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-5 mt-1">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                {
                  label: "Twitter",
                  path: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />
                  </svg>
                </a>
              ))}
              <a
                href="tel:+63253248888"
                aria-label="Phone"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
              <a
                href="mailto:hello@tindog.com"
                aria-label="Email"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Guides", "Terms and Conditions", "Privacy Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/80">
              {[1, 2, 3].map((i) => (
                <li key={i}>
                  <p className="font-medium text-white">Local Sales:</p>
                  <p>(632) 5324.8888</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Download the app now */}
          <div>
            <p
              className="text-white text-3xl md:text-4xl leading-tight mb-7"
              style={{ fontFamily: "'Nanum Pen Script', cursive" }}
            >
              Download the app now
            </p>
            {/* <div className="flex flex-wrap gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={PlayStore} alt="Google Play" className="h-12 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={AppStore} alt="App Store" className="h-12 object-contain" />
              </a>
            </div> */}
          </div>
        </motion.div>

        <hr className="border-white/30 mt-14 mb-6" />
        <p className="text-white/70 text-sm">Tindog &copy; {new Date().getFullYear()} &nbsp; All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
