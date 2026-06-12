import { motion } from 'framer-motion';
import { Search, Lightbulb, Zap, TrendingUp } from 'lucide-react';
import { fadeUp, staggerContainer, VIEWPORT_OPTS } from '../utils/helpers';

const steps = [
  { num: '01', icon: Search, title: 'Discover', color: 'from-[#0d1b3e] to-[#1a3460]', desc: 'We start by understanding your business deeply — your goals, audience, competitive landscape, and current performance baseline.' },
  { num: '02', icon: Lightbulb, title: 'Strategize', color: 'from-[#1a4a22] to-[#2d7a3a]', desc: 'We create a fully customized marketing strategy tailored to your specific business needs, budget, and growth targets.' },
  { num: '03', icon: Zap, title: 'Create', color: 'from-[#0d1b3e] to-[#2d7a3a]', desc: 'Our team brings the strategy to life with compelling content, campaigns, and creatives engineered to capture attention and convert.' },
  { num: '04', icon: TrendingUp, title: 'Grow', color: 'from-[#1a4a22] to-[#0d1b3e]', desc: 'We continuously optimize, analyze, and scale what\'s working — ensuring continuous improvement and compounding growth.' },
];

export default function Process() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <motion.span variants={fadeUp} className="inline-block text-[#2d7a3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">How We Work</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1b3e] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e]">Process</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-base sm:text-lg">
            A proven 4-step framework that turns your business goals into measurable reality.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_OPTS}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8 }}
              className="relative"
            >
              <div className="bg-[#f4f7f4] rounded-2xl p-6 h-full border border-gray-100 hover:border-[#2d7a3a]/30 hover:shadow-lg hover:shadow-[#2d7a3a]/5 transition-all duration-300">
                {/* Number + icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <step.icon size={20} className="text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-200" style={{ fontFamily: 'Syne, sans-serif' }}>{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d1b3e] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-2">
                  <div className="w-px h-6 bg-gray-200" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}