import { motion } from 'framer-motion';
import { CheckCircle2, Users, BarChart2, MessageSquare, Heart } from 'lucide-react';
import { fadeUp, staggerContainer, VIEWPORT_OPTS, slideLeft, slideRight } from '../utils/helpers';

const reasons = [
  { icon: Users, title: 'Experienced & Creative Team', desc: 'Senior strategists, designers, and developers who love what they do.' },
  { icon: BarChart2, title: 'Results-Driven Strategies', desc: 'Every campaign is built around clear KPIs and measurable outcomes.' },
  { icon: CheckCircle2, title: 'High-Quality Content', desc: 'From copy to video, every piece of content is crafted to convert.' },
  { icon: MessageSquare, title: 'Transparent Communication', desc: 'Weekly updates, monthly reports, and a direct line to your team.' },
  { icon: Heart, title: 'Dedicated to Your Growth', desc: 'We succeed only when you succeed. Your growth is our mission.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#0d1b3e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d7a3a]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT_OPTS} variants={slideLeft}>
            <span className="inline-block text-[#4cba5e] text-xs font-bold uppercase tracking-[0.2em] mb-4">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
              Why Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cba5e] to-[#7dd98a]">Choose Growth Bridge</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              We combine strategic thinking with creative execution and obsessive measurement. You work directly with senior talent, not juniors — and we only take on clients we're confident we can grow.
            </p>
            <blockquote className="border-l-4 border-[#2d7a3a] pl-5 py-1">
              <p className="text-gray-300 text-base italic mb-2">"We don't just market your business, we grow it."</p>
              <span className="text-[#4cba5e] text-xs font-semibold">— Growth Bridge Philosophy</span>
            </blockquote>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTS}
            variants={staggerContainer}
            className="space-y-4"
          >
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:border-[#2d7a3a]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2d7a3a]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d7a3a]/40 transition-colors">
                  <r.icon size={18} className="text-[#4cba5e]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{r.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}