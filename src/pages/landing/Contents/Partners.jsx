import React from "react";
import { motion } from "framer-motion";
import { Partner1, Partner2, Parner3, Partner4 } from "../../../assets";

const partners = [
  { name: "PAWS", img: Partner4 },
  { name: "Animal Industry", img: Partner1 },
  { name: "Animal House", img: Partner2 },
  { name: "Partner 3", img: Parner3 },
];

const PartnerLogo = ({ partner, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="cursor-pointer"
  >
    <img
      src={partner.img}
      alt={partner.name}
      className="h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
    />
  </motion.div>
);

const Partners = () => {
  return (
    <section className="pt-16 pb-14 px-6 md:px-16 bg-white text-center">
      <div className="flex flex-wrap items-center justify-center gap-12">
        {partners.map((p, i) => (
          <PartnerLogo key={p.name} partner={p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Partners;
