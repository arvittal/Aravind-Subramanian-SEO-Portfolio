import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Award, Layers, Users } from 'lucide-react';
import { statsData } from '../data';
import GoogleSearchConsoleShowcase from './GoogleSearchConsoleShowcase';

// Custom lightweight scroll-triggered counter
function AnimatedCounter({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * value));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export default function Achievements() {
  // Map index to a specific icon
  const iconMap = [TrendingUp, Award, Layers, Users];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Absolute positioning background grids */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-7xl h-[1px] bg-white/5" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-widest text-growth uppercase mb-3 block">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white max-w-3xl">
            Key Performance Metrics That Matter
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-4 max-w-2xl font-light">
            Arbitrary clicks don't pay bills. I focus on core organic traffic expansion and technical backlink acquisition architectures that drive commercial intent and pipelines.
          </p>
          <div className="w-16 h-1 bg-growth mt-6 rounded-full" />
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => {
            const IconComponent = iconMap[idx] || TrendingUp;
            
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                className="group relative rounded-2xl bg-dark-card border border-dark-border p-8 hover:border-growth/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-growth/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top Header Card */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-lg bg-growth/5 border border-growth/10 flex items-center justify-center text-growth">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* Tiny green SEO organic upward vector chart */}
                    <svg className="w-12 h-6 text-growth/40" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 18C12 14 18 6 28 8C38 10 42 2 48 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="48" cy="2" r="2" fill="#00E5A0" />
                    </svg>
                  </div>

                  {/* High Confidence Big Stat Number */}
                  <div className="flex items-baseline gap-1 font-display font-extrabold text-white text-5xl md:text-6xl tracking-tight mb-4 select-none">
                    {stat.prefix && <span className="text-3xl font-bold text-growth/80">{stat.prefix}</span>}
                    <span className="text-white group-hover:text-growth transition-colors">
                      <AnimatedCounter value={stat.value} />
                    </span>
                    <span className="text-growth font-bold text-3xl">{stat.suffix}</span>
                  </div>

                  {/* Metric Label */}
                  <h4 className="text-sm font-display font-bold text-gray-200 group-hover:text-white transition-colors uppercase tracking-wider mb-2">
                    {stat.label}
                  </h4>
                </div>

                {/* Description info */}
                <p className="text-xs text-gray-500 leading-relaxed font-light mt-4">
                  {stat.description}
                </p>

                {/* Interactive bottom line */}
                <div className="w-full h-[2px] bg-white/5 group-hover:bg-growth/20 transition-colors absolute bottom-0 left-0 rounded-b-2xl overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-growth transition-all duration-500 ease-out" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Google Search Console Verified Performance Proof Showcase */}
        <GoogleSearchConsoleShowcase />

        {/* Client validation summary */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 max-w-xl mx-auto italic font-light">
            "We saw organic conversion actions spike significantly following the integration of Aravind's location-based keywords."
          </p>
          <span className="text-[10px] font-mono uppercase tracking-widest text-growth mt-2 block">
            - B2B SaaS Client Representative
          </span>
        </div>

      </div>
    </section>
  );
}
