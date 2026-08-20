import { ComponentType } from 'react';
import {
  Search,
  Key,
  Layout,
  BarChart,
  Link as LinkIcon,
  Bot,
  Terminal,
  Grid,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data';

// Map skills to custom Lucide icons
const iconMap: Record<string, ComponentType<any>> = {
  'Website Audit': Search,
  'Keyword Research': Key,
  'On-Page SEO': Layout,
  'Content Gap Analysis': BarChart,
  'Link Building': LinkIcon,
  'AI Overview SEO': Bot,
  'CMS Management': Grid,
  'Technical SEO': Terminal,
};

export default function Skills() {
  // Dynamically duplicate items to ensure a seamless looping marquee
  const getDuplicatedSkills = (skills: typeof skillsData) => {
    if (skills.length === 0) return [];
    const minItems = 12; // Ensure enough items to span across screens
    const repeatTimes = Math.ceil(minItems / skills.length);
    const repeated: typeof skillsData = [];
    for (let i = 0; i < repeatTimes; i++) {
      repeated.push(...skills);
    }
    return repeated;
  };

  const marqueeItems = getDuplicatedSkills(skillsData);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-bg">
      <style>{`
        @keyframes marquee-skills {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-skills {
          animation: marquee-skills 45s linear infinite;
        }
      `}</style>

      {/* Decorative background lines */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-growth/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full relative z-10">
        
        {/* Section Heading - Contained inside standard max-width layout */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-start mb-16">
            <span className="text-xs font-mono tracking-widest text-growth uppercase mb-3 block">
              CORE EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
              Surgical Search Strategies
            </h2>
            <div className="w-16 h-1 bg-growth mt-6 rounded-full" />
          </div>
        </div>

        {/* Scrollable Marquee Row */}
        <div className="relative w-full overflow-hidden py-4 my-2">
          {/* Edge Fades for visual depth */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-dark-bg via-dark-bg/80 to-transparent z-20 pointer-events-none" />

          <div className="w-full overflow-hidden">
            <div className="flex gap-6 w-max animate-marquee-skills hover:[animation-play-state:paused] py-2 cursor-pointer">
              {marqueeItems.map((skill, idx) => {
                const IconComponent = iconMap[skill.name] || Sparkles;

                return (
                  <div
                    key={`${skill.name}-${idx}`}
                    id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}-${idx}`}
                    className="group relative rounded-2xl bg-dark-card border border-dark-border p-6 hover:border-growth/40 transition-all duration-300 hover:shadow-2xl hover:shadow-growth/5 hover:-translate-y-1.5 w-72 md:w-80 shrink-0 h-64 flex flex-col justify-between"
                  >
                    {/* Subtle top light effect */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-growth/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Skill icon */}
                      <div className="w-12 h-12 rounded-xl bg-[#1C232B] border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-growth group-hover:border-growth/20 group-hover:bg-growth/5 transition-all duration-300 mb-5">
                        <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
                      </div>

                      {/* Skill text content */}
                      <h3 className="text-base font-display font-bold text-white group-hover:text-growth transition-colors mb-2">
                        {skill.name}
                      </h3>

                      <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-3">
                        {skill.description}
                      </p>
                    </div>

                    {/* Category label indicator */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-gray-600 group-hover:text-growth/40 transition-colors">
                        {skill.category}
                      </span>
                      <span className="text-[9px] font-mono text-gray-500 uppercase opacity-0 group-hover:opacity-100 transition-all text-growth">
                        Active Scope &rarr;
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
