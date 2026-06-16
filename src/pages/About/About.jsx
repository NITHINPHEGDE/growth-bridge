import WhyChooseUs from '../../components/WhyChooseUs';
// import Stats from '../../components/Stats';
import CTA from '../../components/CTA/CTA';

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="py-20 md:py-28 bg-gradient-to-br from-[#0d1b3e] to-[#1a3460] text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2d7a3a]/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-5">
          <span className="inline-block text-[#4cba5e] text-xs font-bold uppercase tracking-[0.2em] mb-4">About Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cba5e] to-[#7dd98a]">Are</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            We are a team of passionate marketers, designers, and developers dedicated to helping ambitious businesses grow.
          </p>
        </div>
      </div>
      <WhyChooseUs />
      {/* <Stats /> */}
      <CTA />
    </div>
  );
}
