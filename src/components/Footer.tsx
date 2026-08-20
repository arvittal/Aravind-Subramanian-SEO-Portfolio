import { MouseEvent } from 'react';
import { Linkedin, Instagram } from 'lucide-react';
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

        {/* Social Links & Center Credits */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <a
              id="footer-linkedin-link"
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1C232B] border border-white/5 hover:border-growth/30 text-gray-400 hover:text-growth hover:bg-growth/5 transition-all flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-instagram-link"
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1C232B] border border-white/5 hover:border-growth/30 text-gray-400 hover:text-growth hover:bg-growth/5 transition-all flex items-center justify-center"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          <div className="text-xs text-gray-600 font-mono">
            <p>© {currentYear} {personalInfo.name}. All Rights Reserved.</p>
          </div>
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
