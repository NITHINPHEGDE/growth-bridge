import { motion } from 'framer-motion';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import { staggerContainer, fadeUp } from '../utils/helpers';

const stats = [
  { value: 200, suffix: '+', label: 'Clients Served', prefix: '' },
  { value: 380, suffix: '%', label: 'Average Client ROI', prefix: '' },
  { value: 50, suffix: 'Cr+', label: 'Revenue Generated', prefix: '₹' },
  { value: 98, suffix: '%', label: 'Client Retention Rate', prefix: '' },
];

function StatItem({ stat, inView }) {
  const count = useCountUp(stat.value, inView);
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useScrollAnimation(0.3);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[#0d1b3e] via-[#163a1e] to-[#0d1b3e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-32 bg-[#2d7a3a]/10 blur-[80px]" />
      </div>
      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-block text-[#4cba5e] text-xs font-bold uppercase tracking-[0.2em] mb-4">By The Numbers</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Results That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cba5e] to-[#7dd98a]">Speak for Themselves</span>
          </motion.h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <StatItem stat={stat} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}