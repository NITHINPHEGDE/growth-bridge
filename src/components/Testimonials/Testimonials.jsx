import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { fadeUp, staggerContainer, VIEWPORT_OPTS } from '../../utils/helpers';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx(i => (i + 1) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section id="testimonials" className="section-padding bg-[#0d1b3e] relative overflow-hidden">
      {/* bg decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-[#2d7a3a]/60 to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#2d7a3a]/5 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#4cba5e]/5 blur-[80px]" />
      </div>

      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="inline-block text-[#4cba5e] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Client Stories
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cba5e] to-[#7dd98a]">Clients Say</span>
          </motion.h2>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="bg-[#1a2f5c]/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-200 text-base sm:text-xl leading-relaxed mb-8 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2d7a3a] to-[#4cba5e] flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-gray-400 text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`rounded-full transition-all duration-300 ${i === idx ? 'w-6 h-2 bg-[#4cba5e]' : 'w-2 h-2 bg-white/25 hover:bg-white/40'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* All avatars */}
        <div className="flex justify-center gap-3 mt-10 flex-wrap">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIdx(i)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                i === idx
                  ? 'bg-gradient-to-br from-[#2d7a3a] to-[#4cba5e] text-white scale-110 shadow-lg shadow-[#2d7a3a]/40'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              {t.avatar}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}