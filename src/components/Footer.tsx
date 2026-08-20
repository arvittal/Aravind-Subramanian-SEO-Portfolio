import { MouseEvent } from 'react';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and meta */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-base font-display font-bold text-white tracking-tight">
            {personalInfo.name}
          </span>
          <p className="text-xs text-gray-500 mt-1 font-mono tracking-widest uppercase">
            SEO Specialist & Digital Marketing Freelancer
          </p>
        </div>

        {/* Center Credits / Links */}
        <div className="text-xs text-gray-600 font-mono text-center">
          <p>© {currentYear} {personalInfo.name}. All Rights Reserved.</p>
          <p className="mt-1 text-gray-700">Calculated organic growth solutions.</p>
        </div>

        {/* Back To Top Scroll anchor */}
        <div>
          <a
            href="#"
            onClick={handleScrollTop}
            className="text-xs font-mono text-gray-400 hover:text-growth uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            <span>BACK TO TOP</span>
            <span className="text-growth">↑</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
