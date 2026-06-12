import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { fadeUp, staggerContainer, scaleIn, VIEWPORT_OPTS } from '../../utils/helpers';

const FILTERS = ['All', 'Branding & Digital', 'Social Media', 'Performance Marketing', 'Video Production', 'Web Development', 'Growth Strategy'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? portfolio : portfolio.filter(p => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.span variants={fadeUp} className="inline-block text-[#2d7a3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Our Work
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1b3e] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e]">Studies</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-base sm:text-lg">
            Real campaigns. Real results. Proof that strategy + execution = growth.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_OPTS}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                active === f
                  ? 'bg-[#0d1b3e] text-white shadow-md'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_OPTS}
              custom={i % 3}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${item.bg} p-8 h-56 sm:h-64 flex flex-col justify-between`}>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <div>
                  <div className="text-[#4cba5e] text-xs font-semibold uppercase tracking-widest mb-2">{item.category}</div>
                  <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{item.title}</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2d7a3a]/40 border border-[#4cba5e]/30">
                    <span className="text-[#4cba5e] text-sm font-bold">{item.result}</span>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0d1b3e]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 text-white font-semibold">
                  View Case Study <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}