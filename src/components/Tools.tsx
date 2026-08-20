import { motion } from 'motion/react';
import { Database, Search, ShieldCheck, Cpu, Code2, LineChart, CpuIcon, CheckSquare } from 'lucide-react';
import { toolsData } from '../data';

// Map tools to specific small visual indicator category icon
const getToolIcon = (name: string) => {
  if (name.includes('Google') || name.includes('Console') || name.includes('Analytics')) return LineChart;
  if (name.includes('Ahrefs') || name.includes('SEMrush')) return Search;
  if (name.includes('WordPress') || name.includes('Growth')) return Database;
  if (name.includes('ChatGPT') || name.includes('Automation') || name.includes('Chatbot')) return Cpu;
  return ShieldCheck;
};

export default function Tools() {
  const row1 = toolsData.slice(0, 5);
  const row2 = toolsData.slice(5);

  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <section id="tools" className="py-24 relative overflow-hidden bg-dark-bg">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
      `}</style>

      {/* Absolute background accent line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-growth uppercase mb-3 block">
            MY SEO STACK
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
            Industry-Standard Tooling
          </h2>
          <p className="text-sm text-gray-400 mt-4 max-w-xl font-light">
            I utilize a suite of top-tier analytical platform software, custom crawling engines, and AI workflow systems to inspect keyword metrics, map links, and automate reporting pipelines.
          </p>
          <div className="w-16 h-1 bg-growth mt-6 rounded-full" />
        </div>

        {/* Scrolling Rows Container with Edge Fades */}
        <div className="relative w-full overflow-hidden flex flex-col gap-5 py-4">
          
          {/* Edge Fades to blend into background */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dark-bg to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dark-bg to-transparent z-20 pointer-events-none" />

          {/* Row 1: Scrolling Left */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-4 w-max animate-marquee-left hover:[animation-play-state:paused] py-1 cursor-pointer">
              {duplicatedRow1.map((tool, idx) => {
                const IconComponent = getToolIcon(tool.name);

                return (
                  <div
                    key={`${tool.name}-row1-${idx}`}
                    className="group p-5 rounded-2xl bg-dark-card border border-dark-border hover:border-growth/30 hover:bg-[#14181E] transition-all duration-300 flex flex-col justify-between h-36 w-52 md:w-60 shrink-0"
                  >
                    {/* Tool Icon & Category Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-growth group-hover:bg-growth/5 group-hover:border-growth/20 border border-transparent transition-all">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[8px] font-mono text-gray-600 group-hover:text-growth/40 transition-colors uppercase tracking-widest">
                        SEO_NODE
                      </span>
                    </div>

                    {/* Tool Title */}
                    <div>
                      <h3 className="font-display font-bold text-white text-sm group-hover:text-growth transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase tracking-widest truncate">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-4 w-max animate-marquee-right hover:[animation-play-state:paused] py-1 cursor-pointer">
              {duplicatedRow2.map((tool, idx) => {
                const IconComponent = getToolIcon(tool.name);

                return (
                  <div
                    key={`${tool.name}-row2-${idx}`}
                    className="group p-5 rounded-2xl bg-dark-card border border-dark-border hover:border-growth/30 hover:bg-[#14181E] transition-all duration-300 flex flex-col justify-between h-36 w-52 md:w-60 shrink-0"
                  >
                    {/* Tool Icon & Category Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-growth group-hover:bg-growth/5 group-hover:border-growth/20 border border-transparent transition-all">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[8px] font-mono text-gray-600 group-hover:text-growth/40 transition-colors uppercase tracking-widest">
                        SEO_NODE
                      </span>
                    </div>

                    {/* Tool Title */}
                    <div>
                      <h3 className="font-display font-bold text-white text-sm group-hover:text-growth transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase tracking-widest truncate">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Tech Stack Callout */}
        <div className="mt-12 rounded-2xl border border-white/5 bg-dark-card/30 p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-growth/5 border border-growth/10 flex items-center justify-center text-growth shrink-0">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                Full API Integrations
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                I bind search console data directly to custom automated client dashboards via Google Sheets/N8N so you have real-time visibility.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono bg-growth/10 text-growth border border-growth/15 px-3 py-1 rounded-full uppercase tracking-widest shrink-0">
            PROPIETARY SYSTEM
          </span>
        </div>

      </div>
    </section>
  );
}
