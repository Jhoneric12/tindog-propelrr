import React from "react";
import { motion } from "framer-motion";
import { FooterImage } from "../../../assets";

const CTA = () => {
  return (
    <section id="cta" className="bg-white overflow-visible relative z-40 pb-0">
      <div className="px-6 md:px-16 lg:px-28 pt-16 flex flex-col xl:flex-row items-center md:items-center justify-between gap-20 max-w-7xl mx-auto">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md pb-0 md:pb-20 text-center md:text-left w-full"
        >
          <p className="text-[#ff7043] text-3xl mb-2" style={{ fontFamily: "'Nanum Pen Script', cursive" }}>
            Don&apos;t make your dog lonely
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Get your dog a partner in life
          </h2>
          <a href="#" className="flex justify-center md:justify-start">
            <button className="bg-[#FF6254] rounded-full text-white px-10 py-4"> Get the app</button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 flex items-end justify-center self-end shrink-0 w-full md:w-[600px] lg:w-[800px] xl:w-[600px] mt-6 xl:mt-0 -mb-8 xl:-mb-10"
          // className="relative flex items-end justify-center shrink-0 w-full md:w-[580px] mt-10 md:mt-0"
        >
          <img
            src={FooterImage}
            alt="Dog"
            className="relative z-10 w-full max-w-[720px] object-contain object-bottom block"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
