import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { fadeUp, staggerContainer, VIEWPORT_OPTS } from '../../utils/helpers';

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          variants={staggerContainer}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d1b3e] via-[#1a3460] to-[#0d2a1a] p-10 md:p-16 text-center"
        >
          {/* Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#2d7a3a]/20 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#4cba5e]/15 blur-[60px] pointer-events-none" />
          <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-[#4cba5e]/50" />
          <div className="absolute bottom-8 right-12 w-2 h-2 rounded-full bg-[#4cba5e]/40" />

          <div className="relative z-10">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d7a3a]/25 border border-[#2d7a3a]/40 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4cba5e] animate-pulse" />
              <span className="text-[#4cba5e] text-xs font-semibold uppercase tracking-widest">Let's Work Together</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Let's Build Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cba5e] to-[#7dd98a]">
                Success Story
              </span>{' '}
              Together
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-300 text-base sm:text-lg mb-10 max-w-xl mx-auto">
              Ready to take your business to the next level? Let's have a conversation about your goals.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e] text-white font-semibold shadow-xl shadow-[#2d7a3a]/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 group"
              >
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+91 63628 69652"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/25 text-white font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone size={16} />
                Call Us Now
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}