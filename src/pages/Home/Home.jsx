import { lazy, Suspense } from 'react';
import Hero from '../../components/Hero/Hero';

const TrustedBy = lazy(() => import('../../components/TrustedBy'));
const ServicesSection = lazy(() => import('../../components/Services/Services'));
const WhyChooseUs = lazy(() => import('../../components/WhyChooseUs'));
const PortfolioSection = lazy(() => import('../../components/Portfolio/Portfolio'));
const Process = lazy(() => import('../../components/Process'));
const TestimonialsSection = lazy(() => import('../../components/Testimonials/Testimonials'));
const Stats = lazy(() => import('../../components/Stats'));
const FAQ = lazy(() => import('../../components/FAQ'));
const CTASection = lazy(() => import('../../components/CTA/CTA'));
const ContactSection = lazy(() => import('../../components/ContactForm/ContactForm'));

const Spin = () => <div className="h-24 flex items-center justify-center"><div className="w-6 h-6 border-2 border-[#2d7a3a] border-t-transparent rounded-full animate-spin" /></div>;

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Spin />}><TrustedBy /></Suspense>
      <Suspense fallback={<Spin />}><ServicesSection /></Suspense>
      <Suspense fallback={<Spin />}><WhyChooseUs /></Suspense>
      <Suspense fallback={<Spin />}><PortfolioSection /></Suspense>
      <Suspense fallback={<Spin />}><Process /></Suspense>
      <Suspense fallback={<Spin />}><TestimonialsSection /></Suspense>
      <Suspense fallback={<Spin />}><Stats /></Suspense>
      <Suspense fallback={<Spin />}><FAQ /></Suspense>
      <Suspense fallback={<Spin />}><CTASection /></Suspense>
      <Suspense fallback={<Spin />}><ContactSection /></Suspense>
    </>
  );
}
