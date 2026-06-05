import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Frame1 } from "../../../assets";
import { useWindowSize } from "../../../hooks/useWindowSize";

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
    name: "Mark Santos",
    pet: "Labrador",
    stars: 5,
    text: "Tindog helped my Lab find the perfect companion. The matching algorithm is spot on and the process was so smooth!",
  },
  {
    id: 3,
    name: "Anna Cruz",
    pet: "Shih Tzu",
    stars: 5,
    text: "My Shih Tzu was so lonely before Tindog. Now she has a best friend! Highly recommend to all dog lovers out there.",
  },
  {
    id: 4,
    name: "Carlos Reyes",
    pet: "Golden Retriever",
    stars: 4,
    text: "Amazing platform! Found a great match for my Golden in just a few days. The vet collaboration feature is a huge plus.",
  },
  {
    id: 5,
    name: "Sofia Lim",
    pet: "Poodle",
    stars: 5,
    text: "Tindog is a game changer for pet owners. My Poodle is happier than ever and I feel confident about the safety of each match.",
  },
  {
    id: 6,
    name: "Ryan Garcia",
    pet: "Beagle",
    stars: 4,
    text: "Super easy to use and the results are reliable. My Beagle found a playmate and they are inseparable now. Love this app!",
  },
];

const DRAG_THRESHOLD = 50;

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-1 text-yellow-400 text-2xl">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [width] = useWindowSize();

  const cardsPerPage = width >= 1024 ? 3 : 1;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  useEffect(() => {
    setPage(0);
  }, [cardsPerPage]);

  const paginate = (newPage) => {
    if (newPage < 0 || newPage >= totalPages) return;
    setDirection(newPage > page ? 1 : -1);
    setPage(newPage);
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -DRAG_THRESHOLD) paginate(page + 1);
    else if (info.offset.x > DRAG_THRESHOLD) paginate(page - 1);
  };

  const visible = testimonials.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage);

  return (
    <section id="testimonials" className="py-20 px-6 md:px-16 bg-gray-50 overflow-hidden">
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

      <div className="relative max-w-6xl mx-auto cursor-grab active:cursor-grabbing">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -80 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 select-none"
          >
            {visible.map((t) => (
              <div
                key={t.id}
                className="relative bg-white rounded-2xl border border-gray-200 pt-14 pb-7 px-7 flex flex-col items-center text-center shadow-sm"
                style={{ borderBottomColor: "#ff7043", borderBottomWidth: 3 }}
              >
                {/* Avatar */}
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

                <div className="flex items-start gap-3 mt-5 text-left">
                  <span className="text-[#7c5cbf] text-4xl leading-none font-serif mt-1">&ldquo;</span>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i)}
            aria-label={`Page ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              page === i ? "bg-[#ff7043] scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
