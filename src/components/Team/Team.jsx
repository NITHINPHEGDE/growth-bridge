import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT_OPTS } from '../../utils/helpers';
import { GraduationCap, Briefcase, X } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Chiranth Gowda HK',
    role: 'Founder & Chief Executive Officer',
    photo: '/team/chiranth.jpeg',
    initials: 'CH',
    accent: 'from-[#0d1b3e] to-[#1a3460]',
    tag: 'Leadership',
    qualifications: [
      'B.Com – Pride First Grade College, Hassan',
      'MBA – Human Resource Management, Pursuing (BGS Institute of Technology)',
      'Certified – AutoCAD (Design & Drafting)',
      'Trained in SketchUp 3D Modelling & Enscape Rendering',
    ],
    bio: 'Chiranth is the driving force behind Growth Bridge — a founder who combines a strong commerce foundation with a rare eye for design and spatial thinking. A B.Com graduate from BGS Institute of Technology, he is currently pursuing his MBA with a specialisation in HR, building leadership and organizational skills that directly shape how Growth Bridge is structured and scaled. Beyond business, Chiranth is formally trained in AutoCAD, SketchUp 3D modelling, and Enscape rendering — a creative edge that gives him a unique ability to visualize brands, spaces, and ideas with precision. He founded Growth Bridge to bridge the gap between great businesses and the marketing they deserve.',
  },
  {
    id: 2,
    name: 'Lithin Gowda',
    role: 'Co-Founder & Supervisor',
    photo: '/team/lithin.jpeg',
    initials: 'LT',
    accent: 'from-[#1a3460] to-[#2d7a3a]',
    tag: 'Operations',
     qualifications: [
      'B.E – Mechanical Engineering, Dayananda Sagar College of Engineering',
      'Certified – Digital Marketing, EDDCAD Institute',
      'Designer, QA Pvt. Ltd.',
      'Founder – Sri Lakshmi Constructions (Class A Government Contractor)',
    ],
    bio: 'Lithin brings a rare combination of engineering discipline, design sensibility, and entrepreneurial experience to Growth Bridge. A Mechanical Engineering graduate from Dayananda Sagar College of Engineering, he built his analytical foundation before expanding into digital marketing through a certified course at EDDCAD. He worked as a Designer at QA Pvt. Ltd., contributing to visual communication and brand collateral for product campaigns. Beyond marketing, Lithin is the founder of Sri Lakshmi Constructions, a Class A registered firm operating under government sector tenders — having successfully delivered 50+ construction projects across Karnataka. This firsthand experience running a business gives him a grounded, execution-focused perspective that he brings directly into how he supervises operations and client delivery at Growth Bridge.'
  },
  {
    id: 3,
    name: 'Thejas Kowshik S',
    role: 'Head of Finance',
    photo: '/team/teju.jpeg',
    initials: 'TJ',
    accent: 'from-[#2d7a3a] to-[#163a1e]',
    tag: 'Finance',
    qualifications: [
      'B.Com – Completed, mysuru University',
      'MBA – HR & Marketing (Pursuing, 1 year remaining)',
      'Certified – MS Excel (Advanced Data & Reporting)',
      'Certified – Power BI (Business Analytics & Dashboards)',
      'Basic Tally & GST Accounting',
      'Class Representative – Demonstrated leadership & coordination skills',
    ],
    bio: 'Thejas Koushik HS is the financial backbone of Growth Bridge — methodical, organised, and dependable. A B.Com graduate currently pursuing his MBA with dual specialisations in HR and Marketing, Thejas brings a solid understanding of business finance to the team. He is certified in MS Excel and Power BI, tools he actively uses to build budget trackers, campaign spend dashboards, and monthly P&L reports for Growth Bridge clients. With working knowledge of Tally and GST accounting, he keeps the agency\'s books clean and the numbers honest. As Class Representative during his college years, he built a habit of keeping people aligned and deadlines met — a trait that carries directly into how he manages financial reporting and vendor payments at Growth Bridge.',
  },
  {
    id: 4,
    name: 'Nithin P Hegde',
    role: 'Executive Manager',
    photo: '/team/nithin.jpeg',
    initials: 'NT',
    accent: 'from-[#0d1b3e] to-[#2d7a3a]',
    tag: 'Strategy',
     qualifications: [
      'B.Tech – Computer Science & Engineering, Dayananda Sagar University (2026)',
      'Co-Founder & CTO – Conza Tech (currently in beta)',
      'AI & Machine Learning Specialist – LLMs, Generative AI, Full-Stack Engineering & Cloud (AWS)',
      'Google Ads Search & Display Certified',
      'HubSpot Inbound Marketing Certified',
    ],
    bio: 'Nithin is a rare blend of deep technical expertise and sharp business instinct. A 2026 CSE graduate from Dayananda Sagar University, he is fluent across the full software stack — from building scalable backend systems to deploying cloud infrastructure on AWS. Outside Growth Bridge, he co-founded Conza Tech, where he serves as CTO, leading product architecture and engineering for a platform focused on automating business workflows for SMEs — currently in private beta with early users onboarded. At Growth Bridge, he brings a founder\'s urgency and an engineer\'s precision to every client strategy he touches.',
  },
  {
    id: 5,
    name: 'Likhith S J ',
    role: 'General Manager',
    photo: '/team/likith.jpeg',
    initials: 'LK',
    accent: 'from-[#163a1e] to-[#0d1b3e]',
    tag: 'Growth',
     qualifications: [
      'B.Tech – Computer Science & Engineering, Dayananda Sagar University (2026)',
      'HubSpot Inbound Marketing Certified',
      'Google Analytics 4 (GA4) Certified',
      'Coordinated cross-functional teams of 10+ in university-level tech fests',
    ],
    bio: 'Likith holds a B.Tech in CSE from Dayananda Sagar University (2026), where he was known for his ability to coordinate large teams and deliver results under pressure — skills he now applies daily at Growth Bridge. As General Manager, he bridges the gap between creative, performance, and client success teams. During university, he led the operations of DSU\'s annual tech summit, managing a ₹4L budget and a volunteer team of 30, an experience that shaped his systems-first approach to management.',
  },
];

function TeamCard({ member, index, onOpen }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpen(member)}
      className="group cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2d7a3a]/10 hover:border-[#2d7a3a]/30 transition-all duration-300 flex flex-row h-36 sm:h-40">
        
        {/* Photo - left side */}
        <div className="relative w-28 sm:w-36 flex-shrink-0 overflow-hidden">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-r ${member.accent} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
          {/* Tag badge - bottom right of image */}
          <div className="absolute bottom-2 right-2">
            <span className={`px-2 py-0.5 rounded-full bg-gradient-to-r ${member.accent} text-white text-[9px] font-bold uppercase tracking-wider shadow-md`}>
              {member.tag}
            </span>
          </div>
        </div>

        {/* Info - right side */}
        <div className="flex flex-col justify-center p-4 flex-1 min-w-0">
          <h3 className="text-[#0d1b3e] font-bold text-base leading-tight mb-1 truncate" style={{ fontFamily: 'Syne, sans-serif' }}>
            {member.name}
          </h3>
          <p className="text-[#2d7a3a] text-[10px] font-bold uppercase tracking-wider leading-tight mb-2">{member.role}</p>
          <div className="flex items-start gap-1.5 text-gray-400 text-[10px] leading-snug">
            <GraduationCap size={11} className="text-[#4cba5e] flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2">{member.qualifications[0]}</span>
          </div>
          <div className="mt-2 text-[#2d7a3a] text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View Profile →
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
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