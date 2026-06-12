import { motion } from 'framer-motion';
import { VIEWPORT_OPTS } from '../utils/helpers';

const clients = ['NovaTech', 'EcoWear', 'FinEdge', 'CloudStack', 'HealthFirst', 'RetailEdge', 'BrandCo', 'GrowthX'];

export default function TrustedBy() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT_OPTS}
          className="text-center text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-10"
        >
          Trusted by 200+ Growing Businesses
        </motion.p>
        <div className="relative overflow-hidden">
          <div className="flex gap-10 animate-[scroll_25s_linear_infinite] w-max">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="flex items-center justify-center w-32 h-10 text-gray-300 font-bold text-sm uppercase tracking-widest whitespace-nowrap hover:text-[#2d7a3a] transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                {c}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}