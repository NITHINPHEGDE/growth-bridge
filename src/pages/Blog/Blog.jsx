import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT_OPTS } from '../../utils/helpers';
import CTA from '../../components/CTA/CTA';

const posts = [
  {
    id: 1,
    tag: 'Performance Marketing',
    title: 'How We Scaled a D2C Brand to 8x ROAS in 90 Days',
    desc: 'A breakdown of the exact ad structure, audience strategy, and creative framework that drove exponential returns for one of our e-commerce clients.',
    date: 'May 2026',
    read: '5 min read',
    color: 'from-[#0d1b3e] to-[#1a3460]',
  },
  {
    id: 2,
    tag: 'Social Media',
    title: 'Why Most Instagram Reels Fail (And What Actually Works)',
    desc: 'We analysed 200+ reels across industries and found the exact patterns that separate viral content from content that gets buried.',
    date: 'Apr 2026',
    read: '4 min read',
    color: 'from-[#2d7a3a] to-[#163a1e]',
  },
  {
    id: 3,
    tag: 'Branding',
    title: 'The 5-Step Brand Audit Every Business Should Do in 2026',
    desc: 'Before you spend a rupee on ads, make sure your brand can convert. Here\'s our internal audit framework, made public.',
    date: 'Mar 2026',
    read: '6 min read',
    color: 'from-[#1a3460] to-[#2d7a3a]',
  },
];

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

      {/* Posts */}
      <section className="section-padding bg-[#f4f7f4]">
        <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTS}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-gray-100 hover:border-[#2d7a3a]/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`h-40 bg-gradient-to-br ${post.color} flex items-end p-5`}>
                  <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[#0d1b3e] font-bold text-base leading-snug mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{post.desc}</p>
                  <div className="flex items-center justify-between text-[10px] text-gray-400 pt-3 border-t border-gray-100">
                    <span>{post.date}</span>
                    <span>{post.read}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT_OPTS}
            className="text-center text-gray-400 text-xs mt-12"
          >
            More articles coming soon — follow us on Instagram & LinkedIn for weekly insights.
          </motion.p>
        </div>
      </section>

      <CTA />
    </div>
  );
}