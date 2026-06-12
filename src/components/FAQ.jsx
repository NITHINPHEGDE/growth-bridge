import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faq } from '../data/faq';
import { fadeUp, staggerContainer, VIEWPORT_OPTS } from '../utils/helpers';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(prev => prev === id ? null : id);

  return (
    <section className="section-padding bg-[#f4f7f4]">
      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="inline-block text-[#2d7a3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">FAQ</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1b3e] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e]">Questions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500">Everything you need to know before partnering with us.</motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faq.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_OPTS}
              transition={{ delay: i * 0.07 }}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${open === item.id ? 'border-[#2d7a3a]/40 bg-white shadow-md shadow-[#2d7a3a]/5' : 'border-gray-200 bg-white hover:border-[#2d7a3a]/30'}`}
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-[#0d1b3e] text-sm sm:text-base pr-4">{item.q}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${open === item.id ? 'bg-[#2d7a3a] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {open === item.id ? <Minus size={15} /> : <Plus size={15} />}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}