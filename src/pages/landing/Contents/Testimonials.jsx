import React, { useState } from "react";
import { motion } from "framer-motion";
import { Frame1 } from "../../../assets";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    pet: "Husky",
    stars: 4,
    text: "I really like Tindog for my pet Huskier. Tindog really gave me an accurate and safe results. Will recommend this one!",
  },
  {
    id: 2,
    name: "Jane Doe",
    pet: "Husky",
    stars: 4,
    text: "I really like Tindog for my pet Huskier. Tindog really gave me an accurate and safe results. Will recommend this one!",
  },
  {
    id: 3,
    name: "Jane Doe",
    pet: "Husky",
    stars: 4,
    text: "I really like Tindog for my pet Huskier. Tindog really gave me an accurate and safe results. Will recommend this one!",
  },
];

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-1 text-yellow-400 text-2xl">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-20 px-6 md:px-16 bg-gray-50">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-[#ff7043] text-2xl mb-2"
        style={{ fontFamily: "'Nanum Pen Script', cursive" }}
      >
        Superb testimonials
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14"
      >
        See what they say about us
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative bg-white rounded-2xl border border-gray-200 pt-14 pb-7 px-7 flex flex-col items-center text-center shadow-sm"
            style={{ borderBottomColor: "#ff7043", borderBottomWidth: 3 }}
          >
            {/* Avatar — overflows top */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src={Frame1} alt={t.name} className="w-full h-full object-contain" />
            </div>

            <p className="text-gray-400 text-sm mt-1">{t.name}</p>
            <p
              className="text-gray-800 text-2xl font-semibold mt-1 mb-3"
              style={{ fontFamily: "'Nanum Pen Script', cursive" }}
            >
              Pet: {t.pet}
            </p>
            <StarRating count={t.stars} />

            {/* Quote */}
            <div className="flex items-start gap-3 mt-5 text-left">
              <span className="text-[#7c5cbf] text-4xl leading-none font-serif mt-1">&ldquo;</span>
              <p className="text-gray-500 text-sm leading-relaxed">{t.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              active === i ? "bg-[#ff7043] scale-110" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
