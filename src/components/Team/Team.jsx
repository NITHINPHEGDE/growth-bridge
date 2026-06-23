import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT_OPTS } from '../../utils/helpers';
import { GraduationCap, Briefcase, X } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Chiranth',
    role: 'Founder & Chief Executive Officer',
    photo: '/team/chiranth.jpeg',
    initials: 'CH',
    accent: 'from-[#0d1b3e] to-[#1a3460]',
    tag: 'Leadership',
    qualifications: [
      'MBA – Strategic Management, IIM Bangalore',
      'B.Tech – Computer Science, NIT Surathkal',
      'Certified Digital Growth Strategist (CDGS)',
      '12+ years in brand scaling & business development',
    ],
    bio: 'Chiranth founded Growth Bridge with a vision to democratize premium digital marketing for ambitious businesses. He has led over 80 brand transformations across India and Southeast Asia.',
  },
  {
    id: 2,
    name: 'Lithin',
    role: 'Co-Founder & Supervisor',
    photo: '/team/lithin.jpeg',
    initials: 'LT',
    accent: 'from-[#1a3460] to-[#2d7a3a]',
    tag: 'Operations',
    qualifications: [
      'MBA – Operations Management, XLRI Jamshedpur',
      'B.Com – Finance & Accounting, Christ University',
      'PMP Certified Project Manager',
      '9+ years in digital operations & campaign supervision',
    ],
    bio: 'Lithin oversees all campaign operations and delivery pipelines at Growth Bridge, ensuring every client project is executed with precision, on time and above expectations.',
  },
  {
    id: 3,
    name: 'Teju',
    role: 'Head of Finance',
    photo: '/team/teju.jpeg',
    initials: 'TJ',
    accent: 'from-[#2d7a3a] to-[#163a1e]',
    tag: 'Finance',
    qualifications: [
      'CA – Institute of Chartered Accountants of India (ICAI)',
      'B.Com – Bangalore University',
      'Certified Financial Planner (CFP)',
      '8+ years in corporate finance & ad budget management',
    ],
    bio: 'Teju manages all financial planning, budgeting, and ROI reporting at Growth Bridge. His expertise ensures every marketing rupee is accounted for and optimally allocated.',
  },
  {
    id: 4,
    name: 'Nithin',
    role: 'Executive Manager',
    photo: '/team/nithin.jpeg',
    initials: 'NT',
    accent: 'from-[#0d1b3e] to-[#2d7a3a]',
    tag: 'Strategy',
    qualifications: [
      'MBA – Marketing, Symbiosis Institute of Business Management',
      'B.E – Electronics & Communication, VTU',
      'Google Ads & Meta Blueprint Certified',
      '7+ years in performance marketing & client management',
    ],
    bio: 'Nithin drives executive-level client relationships and performance marketing strategy. He specializes in scaling paid campaigns from ₹1L to ₹1Cr+ monthly ad spends.',
  },
  {
    id: 5,
    name: 'Likith',
    role: 'General Manager',
    photo: '/team/likith.jpeg',
    initials: 'LK',
    accent: 'from-[#163a1e] to-[#0d1b3e]',
    tag: 'Growth',
    qualifications: [
      'MBA – Digital Business, Manipal Academy of Higher Education',
      'B.Sc – Information Technology, Bangalore University',
      'HubSpot Growth Marketing Certified',
      '6+ years in growth strategy & team management',
    ],
    bio: 'Likith manages day-to-day operations across all departments, coordinating between creative, performance, and client success teams to ensure cohesive growth delivery.',
  },
];

function TeamCard({ member, index, onOpen }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpen(member)}
      className="group cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2d7a3a]/10 hover:border-[#2d7a3a]/30 transition-all duration-300">
        {/* Photo */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${member.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
          {/* View profile hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold tracking-wide">
              View Profile
            </span>
          </div>
          {/* Tag badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${member.accent} text-white text-[10px] font-bold uppercase tracking-widest shadow-md`}>
              {member.tag}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="text-[#0d1b3e] font-bold text-lg leading-tight mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
            {member.name}
          </h3>
          <p className="text-[#2d7a3a] text-xs font-semibold uppercase tracking-wider">{member.role}</p>
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-gray-400 text-xs">
            <GraduationCap size={12} className="text-[#4cba5e] flex-shrink-0" />
            <span>{member.qualifications[0]}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TeamModal({ member, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0d1b3e]/80 backdrop-blur-md" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl overflow-hidden w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
        >
          <X size={16} className="text-white" />
        </button>

        {/* Hero image */}
        <div className="relative aspect-[4/3]">
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
          <div className={`absolute inset-0 bg-gradient-to-t ${member.accent} opacity-50`} />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${member.accent} text-white text-[10px] font-bold uppercase tracking-widest mb-2`}>
              {member.tag}
            </span>
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{member.name}</h2>
            <p className="text-[#7dd98a] text-sm font-medium">{member.role}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Bio */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={14} className="text-[#2d7a3a]" />
              <span className="text-xs font-bold text-[#0d1b3e] uppercase tracking-widest">About</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
          </div>

          {/* Qualifications */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap size={14} className="text-[#2d7a3a]" />
              <span className="text-xs font-bold text-[#0d1b3e] uppercase tracking-widest">Qualifications & Experience</span>
            </div>
            <ul className="space-y-2">
              {member.qualifications.map((q, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4cba5e] flex-shrink-0 mt-1.5" />
                  <span className="text-gray-600 text-sm">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Team() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section-padding bg-white">
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
            The People Behind the Growth
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1b3e] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e]">Team</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-base sm:text-lg leading-relaxed">
            A passionate team of strategists, creatives, and growth experts — united by one mission: making your business thrive.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6"
        >
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} onOpen={setSelected} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT_OPTS}
          className="text-center text-gray-400 text-xs mt-10"
        >
          Click on any card to view full profile
        </motion.p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}