import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b3e]">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#2d7a3a]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#4cba5e]/8 blur-[100px]" />
        {/* Grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Floating orbs */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#4cba5e]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-[#4cba5e]"
        />
      </div>

      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex items-center justify-center">
          {/* Left */}
          <div className="max-w-3xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d7a3a]/20 border border-[#2d7a3a]/40 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#4cba5e] animate-pulse" />
              <span className="text-[#4cba5e] text-xs font-semibold uppercase tracking-widest">Digital Marketing Agency</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              We Build The{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cba5e] to-[#7dd98a]">Bridge</span>
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <motion.path
                    d="M0 3 Q50 0 100 3 Q150 6 200 3"
                    stroke="#4cba5e"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </motion.svg>
              </span>
              {' '}To Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#a0c4ff]">Business Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto"
            >
              Growth Bridge helps businesses grow with powerful marketing strategies, creative content, and data-driven solutions that deliver real, measurable results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e] text-white font-semibold shadow-xl shadow-[#2d7a3a]/30 hover:shadow-2xl hover:shadow-[#2d7a3a]/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 text-sm sm:text-base group"
              >
                Start Growing Today
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats - commented for future use */}
            {/* const statsData = [
              { label: 'Clients Served', value: '200+' },
              { label: 'Revenue Generated', value: '₹50Cr+' },
              { label: 'Avg. ROI', value: '380%' },
            ] */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 sm:gap-8 justify-center mt-12"
            >
              {statsData.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{s.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* Bottom fade - commented for future use */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" /> */}
    </section>
  );
}