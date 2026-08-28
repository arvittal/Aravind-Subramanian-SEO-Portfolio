import { motion } from 'motion/react';
import { clientsData } from '../data';

export default function Clients() {
  // Repeating the client array to guarantee seamless 50% translation loop without gaps on all viewports
  const displayLogos = [...clientsData, ...clientsData, ...clientsData, ...clientsData];

  return (
    <section id="clients" className="py-20 relative overflow-hidden bg-dark-bg border-t border-white/[0.04]">
      {/* Background glow and grid overlay for subtle depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-growth/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 md:mb-14"
        >
          <span className="text-xs font-mono tracking-widest text-growth uppercase mb-3 block">
            BRAND COLLABORATIONS
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight text-white">
            Clients Worked With
          </h2>
          <div className="w-12 h-1 bg-growth mt-4 rounded-full" />
        </motion.div>

      </div>

      {/* Infinite Scrolling Logo Carousel */}
      <div className="relative w-full overflow-hidden py-4 group/carousel">
        {/* Soft edge gradient fades to seamlessly blend entering and exiting logos */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-dark-bg via-dark-bg/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-dark-bg via-dark-bg/90 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track with Right-to-Left Continuous Motion and Desktop Pause on Hover */}
        <div className="animate-marquee-clients flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 select-none">
          {displayLogos.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex items-center justify-center shrink-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.alt}
                title={client.name}
                loading="lazy"
                className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[210px] object-contain filter drop-shadow-sm pointer-events-auto"
                onError={(e) => {
                  // Fallback to text badge styling if SVG fails to load
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'logo-fallback font-display font-bold text-sm tracking-wide text-gray-300 uppercase px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10';
                    fallback.innerText = client.name;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
