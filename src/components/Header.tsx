import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rankings', href: '#rankings' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Work', href: '#work' },
    { name: 'Tools', href: '#tools' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of the navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-4 glass-panel border-b border-white/5 shadow-2xl shadow-black/40'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Branding */}
          <a
            id="brand-logo"
            href="#site-header"
            onClick={(e) => handleNavClick(e, '#site-header')}
            className="group flex flex-col"
          >
            <span className="text-lg md:text-xl font-display font-bold tracking-tight text-white group-hover:text-growth transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase group-hover:text-growth/70 transition-colors mt-0.5">
              TOP 1% SEO FREELANCER
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-medium transition-all rounded-full relative ${
                    isActive ? 'text-growth' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-growth/5 border border-growth/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Let's Talk CTA */}
          <div className="hidden lg:flex items-center">
            <a
              id="header-cta-talk"
              href="https://calendly.com/aravindsubramanianhs/aravindhs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-display font-semibold uppercase tracking-wider text-black bg-growth hover:bg-white transition-all shadow-lg hover:shadow-growth/20 hover:scale-105 active:scale-95 duration-200"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 top-[72px] z-40 w-full h-[calc(100vh-72px)] bg-[#0B0D10]/95 backdrop-blur-2xl border-t border-white/5 px-6 py-10 lg:hidden flex flex-col justify-between"
          >
            <div className="flex flex-col gap-5">
              <span className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-2 block">
                NAVIGATION
              </span>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.name}
                      id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-2xl font-display font-medium tracking-tight py-1 transition-colors ${
                        isActive ? 'text-growth' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-growth" />}
                        {link.name}
                      </div>
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border-t border-white/5 pt-8 flex flex-col gap-5"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-gray-500 block mb-1">
                  AVAILABLE FOR FREELANCE & CONTRACTS
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base font-medium text-gray-300 hover:text-growth transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <a
                id="mobile-drawer-cta-talk"
                href="https://calendly.com/aravindsubramanianhs/aravindhs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 rounded-xl text-sm font-display font-bold uppercase tracking-wider text-black bg-growth hover:bg-white transition-all shadow-lg shadow-growth/5"
              >
                Let's Partner Up
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
