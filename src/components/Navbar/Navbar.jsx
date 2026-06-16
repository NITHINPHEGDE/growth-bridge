import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TrendingUp } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';
import clsx from 'clsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || pathname !== '/'
          ? 'bg-[#0d1b3e]/95 backdrop-blur-md shadow-lg shadow-[#0d1b3e]/20'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2d7a3a] to-[#4cba5e] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <TrendingUp size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-bold text-white text-lg leading-none tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                GROWTH<span className="text-[#4cba5e]">BRIDGE</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={clsx(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    pathname === link.href
                      ? 'text-[#4cba5e]'
                      : 'text-gray-300 hover:text-white'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4cba5e]"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e] text-white text-sm font-semibold shadow-md shadow-[#2d7a3a]/30 hover:shadow-lg hover:shadow-[#2d7a3a]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#091228]/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <ul className="px-5 py-4 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.href}
                    className={clsx(
                      'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      pathname === link.href
                        ? 'bg-[#2d7a3a]/20 text-[#4cba5e]'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="pt-2">
                <Link
                  to="/contact"
                  className="block w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e] text-white text-sm font-semibold"
                >
                  Get Started
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}