import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDownRight, TrendingUp, Sparkles, CheckCircle2, Search, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern"
    >
      {/* Profile Photo subtle ambient background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none select-none mix-blend-luminosity">
        <img
          src="https://lh3.googleusercontent.com/d/16rxbX3CU6nOddxaeXjmyXyhdt7qLWaek"
          alt="Aravind Subramanian Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter saturate-50 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-transparent to-[#0B0D10]" />
      </div>

      {/* Background Floating Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-growth/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-10 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none animate-pulse duration-[10000ms]" />

      {/* Decorative Top Accent Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-growth/30 to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Dynamic cycling tagline */}
        <div className="h-8 md:h-10 mb-4 flex items-center justify-center overflow-hidden z-10">
          <AnimatePresence mode="wait">
            <motion.span
              key={taglineIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs md:text-sm font-mono tracking-[0.2em] text-growth/90 font-medium uppercase bg-growth/5 border border-growth/10 px-4 py-1.5 rounded-full"
            >
              {personalInfo.taglines[taglineIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* FLANKING LAYOUT (Inspired by Duncan Robert reference image) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center mt-4 mb-12">
          
          {/* Left Text Block */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xs md:text-sm font-mono tracking-widest text-gray-400 uppercase mb-2 block"
            >
              {personalInfo.name}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white uppercase leading-none"
            >
              ORGANIC
            </motion.h1>
          </div>

          {/* Center Portrait Image Card */}
          <div className="lg:col-span-4 flex justify-center items-center py-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-[2.5rem] p-1.5 bg-[#14181E]/40 border border-white/10 backdrop-blur-sm shadow-2xl group hover:border-growth/30 hover:shadow-growth/5 transition-all duration-500 z-10"
            >
              <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-[#1C232B] relative">
                <img
                  src="https://lh3.googleusercontent.com/d/16rxbX3CU6nOddxaeXjmyXyhdt7qLWaek"
                  alt="Aravind Subramanian Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual SEO subtle gradient card cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>



              {/* Active Online Indicator sticker */}
              <span className="absolute top-6 right-6 flex h-3.5 w-3.5 rounded-full border-2 border-[#0B0D10] bg-growth z-20">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-growth opacity-75"></span>
              </span>
            </motion.div>
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-growth-gradient uppercase leading-none mb-4"
            >
              GROWTH
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xs"
            >
              Helping businesses grow organically with premium, data-driven SEO strategy, search architecture, and ROI-focused map pack positioning.
            </motion.p>
          </div>

        </div>

        {/* Experience summary details badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-10 z-10"
        >
          <span className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
            {personalInfo.title} <span className="text-white/20 px-2">|</span>{' '}
            <span className="text-white font-medium">{personalInfo.experience}</span>
          </span>
        </motion.div>

        {/* Action Callouts */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10"
        >
          <a
            id="hero-cta-grow"
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-semibold text-sm uppercase tracking-wider text-black bg-growth hover:bg-white transition-all duration-300 shadow-xl shadow-growth/15 hover:shadow-growth/25 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Let's Grow Your Business
            <TrendingUp className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            id="hero-cta-work"
            href="#work"
            onClick={(e) => handleScrollTo(e, '#work')}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-semibold text-sm uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowDownRight className="w-4 h-4 text-gray-400" />
          </a>
        </motion.div>


      </div>

      {/* Grid overlay lines fading downwards */}
      <div className="absolute inset-0 top-2/3 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
