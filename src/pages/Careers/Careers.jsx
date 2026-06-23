import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Clock } from 'lucide-react';
import { fadeUp, staggerContainer, VIEWPORT_OPTS } from '../../utils/helpers';
import CTA from '../../components/CTA/CTA';

const openings = [
  {
    id: 1,
    title: 'Performance Marketing Executive',
    type: 'Full-Time',
    location: 'Bengaluru, Karnataka',
    desc: 'Manage and optimise paid campaigns across Google, Meta, and LinkedIn for our growing client portfolio.',
  },
  {
    id: 2,
    title: 'Social Media Manager',
    type: 'Full-Time',
    location: 'Bengaluru, Karnataka',
    desc: 'Plan, create, and manage content calendars across Instagram, LinkedIn, and YouTube for multiple brand accounts.',
  },
  {
    id: 3,
    title: 'Graphic Designer & Video Editor',
    type: 'Full-Time / Freelance',
    location: 'Remote / Bengaluru',
    desc: 'Create high-converting creatives, reels, and brand assets for digital campaigns across industries.',
  },
];

export default function Careers() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <div className="py-20 md:py-28 bg-gradient-to-br from-[#0d1b3e] to-[#1a3460] text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2d7a3a]/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-5">
          <span className="inline-block text-[#4cba5e] text-xs font-bold uppercase tracking-[0.2em] mb-4">Join The Team</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            Build Your Career at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cba5e] to-[#7dd98a]">Growth Bridge</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            We're looking for driven, creative, and curious people who want to do the best work of their lives while helping businesses grow.
          </p>
        </div>
      </div>

      {/* Openings */}
      <section className="section-padding bg-[#f4f7f4]">
        <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTS}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <motion.span variants={fadeUp} className="inline-block text-[#2d7a3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Open Roles
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-[#0d1b3e] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e]">Openings</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-sm">
              Don't see your role? Write to us anyway — we hire for attitude and train for skill.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTS}
            variants={staggerContainer}
            className="space-y-4 max-w-3xl mx-auto"
          >
            {openings.map((job, i) => (
              <motion.div
                key={job.id}
                variants={fadeUp}
                custom={i}
                whileHover={{ x: 4 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-black/5 hover:border-[#2d7a3a]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                        <Clock size={10} /> {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                        <MapPin size={10} /> {job.location}
                      </span>
                    </div>
                    <h3 className="text-[#0d1b3e] font-bold text-base mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{job.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{job.desc}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0d1b3e] to-[#1a3460] text-white text-xs font-semibold whitespace-nowrap hover:-translate-y-0.5 transition-all duration-200 shadow-md"
                  >
                    Apply Now <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
}