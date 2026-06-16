import { motion } from 'framer-motion';
import { Megaphone, Video, Share2, Target, Palette, Globe, FileText, TrendingUp, BarChart2, Users, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/services';
import { fadeUp, staggerContainer, VIEWPORT_OPTS } from '../../utils/helpers';

const ICONS = { Megaphone, Video, Share2, Target, Palette, Globe, FileText, TrendingUp, BarChart2, Users };

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#f4f7f4]">
      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <motion.span variants={fadeUp} className="inline-block text-[#2d7a3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            What We Offer
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1b3e] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e]">Services</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Comprehensive digital solutions designed to accelerate your business growth at every stage.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
        >
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] || TrendingUp;
            const isNavy = s.color === '#0d1b3e';
            return (
              <motion.div
                key={s.id}
                variants={fadeUp}
                custom={i % 4}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative rounded-2xl p-6 cursor-pointer transition-shadow duration-300 ${isNavy
                  ? 'bg-[#0d1b3e] text-white shadow-lg shadow-[#0d1b3e]/15'
                  : 'bg-white text-[#0d1b3e] shadow-lg shadow-black/5 border border-gray-100'
                  }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${isNavy ? 'bg-[#2d7a3a]/20' : 'bg-[#0d1b3e]/5'
                  }`}>
                  <Icon size={20} className={isNavy ? 'text-[#4cba5e]' : 'text-[#2d7a3a]'} />
                </div>
                <h3 className="font-bold text-sm mb-2 leading-tight">{s.title}</h3>
                <p className={`text-xs leading-relaxed ${isNavy ? 'text-gray-400' : 'text-gray-500'}`}>{s.desc}</p>
                <div className={`mt-4 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 group-hover:opacity-100 opacity-0 group-hover:translate-x-0 -translate-x-2 ${isNavy ? 'bg-[#2d7a3a]' : 'bg-[#0d1b3e]'
                  }`}>
                  <ArrowUpRight size={13} className="text-white" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}