import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1b3e] text-white px-5">
      <div className="text-center">
        <h1 className="text-7xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4cba5e] to-[#7dd98a]" style={{ fontFamily: 'Syne, sans-serif' }}>404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e] text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          Go Back Home
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
