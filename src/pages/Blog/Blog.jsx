import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { fadeUp, VIEWPORT_OPTS } from '../../utils/helpers';
import CTA from '../../components/CTA/CTA';

export default function Blog() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <div className="py-20 md:py-28 bg-gradient-to-br from-[#0d1b3e] to-[#1a3460] text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2d7a3a]/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-5">
          <span className="inline-block text-[#4cba5e] text-xs font-bold uppercase tracking-[0.2em] mb-4">Insights & Ideas</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            The Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cba5e] to-[#7dd98a]">Blog</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Strategy breakdowns, campaign case studies, and marketing insights from the Growth Bridge team.
          </p>
        </div>
      </div>

      {/* Empty State */}
      <section className="section-padding bg-[#f4f7f4]">
        <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTS}
            variants={fadeUp}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0d1b3e] to-[#1a3460] flex items-center justify-center mb-6 shadow-lg">
              <BookOpen size={32} className="text-[#4cba5e]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b3e] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
              Sorry, we have nothing to read… yet.
            </h2>
            <p className="text-gray-500 text-sm max-w-sm">
              Our team is busy crafting insightful articles. Follow us on Instagram & LinkedIn to be the first to know when we publish.
            </p>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
}