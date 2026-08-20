import { ArrowUpRight, TrendingUp, BarChart2, Search, Link2, Bot, FileText, Globe } from 'lucide-react';
import { workGalleryData } from '../data';

// Custom Map for decorative vector icons based on card index
const iconMap = [Search, BarChart2, Globe, TrendingUp, Link2, Bot];

export default function Work() {
  return (
    <section id="work" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start">
            <span className="text-xs font-mono tracking-widest text-growth uppercase mb-3 block">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
              SEO Campaign Blueprints
            </h2>
            <p className="text-sm text-gray-400 mt-4 max-w-xl font-light">
              A visual overview of core auditing files, search strategy maps, and competitive research assets delivered during recent campaigns.
            </p>
            <div className="w-16 h-1 bg-growth mt-6 rounded-full" />
          </div>

          <div className="text-xs font-mono text-gray-500 flex items-center gap-1.5 self-start md:self-end bg-dark-card/40 border border-white/5 p-2 px-3 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-growth animate-pulse" />
            <span>Hover to pause scroll</span>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Gallery Row with horizontal space-fade overlays */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft edge fades to blend with background */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-36 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-36 bg-gradient-to-l from-dark-bg via-dark-bg/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-slow flex gap-8">
          {[...workGalleryData, ...workGalleryData].map((item, idx) => {
            const originalIndex = idx % workGalleryData.length;
            const IconComponent = iconMap[originalIndex] || FileText;

            return (
              <div
                key={`${item.id}-${idx}`}
                className="group relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border hover:border-growth/40 transition-all duration-300 w-[290px] md:w-[380px] shrink-0"
              >
                
                {/* Visual Placeholder Dashboard Container */}
                <div className="relative aspect-video w-full bg-[#0F1215] flex items-center justify-center overflow-hidden border-b border-dark-border">
                  
                  {/* Subtle Grid overlay inside the image container */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                  {/* Simulated Premium Dashboard Node */}
                  <div className="relative w-4/5 h-4/5 rounded-xl border border-white/5 bg-[#14181E] p-4 flex flex-col justify-between group-hover:scale-105 group-hover:border-growth/20 transition-all duration-500">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider ml-1.5">{item.category}</span>
                      </div>
                      <IconComponent className="w-4 h-4 text-growth/60" />
                    </div>

                    {/* Simulated Graph/Metrics inside placeholder */}
                    <div className="flex items-end justify-between h-14 px-2">
                      <div className="w-[12%] h-[20%] bg-white/5 rounded-t" />
                      <div className="w-[12%] h-[40%] bg-white/5 rounded-t" />
                      <div className="w-[12%] h-[35%] bg-white/5 rounded-t" />
                      <div className="w-[12%] h-[60%] bg-white/10 rounded-t" />
                      <div className="w-[12%] h-[55%] bg-white/10 rounded-t" />
                      <div className="w-[12%] h-[80%] bg-growth/20 rounded-t border-t border-growth/40 group-hover:bg-growth/30" />
                      <div className="w-[12%] h-[95%] bg-growth/30 rounded-t border-t border-growth group-hover:bg-growth/40" />
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 border-t border-white/5 pt-2">
                      <span>AUDIT_NODE_INDEX</span>
                      <span className="text-growth">ACTIVE_GROWTH_CURVE</span>
                    </div>
                  </div>

                  {/* Caption Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#0B0D10]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <span className="text-[10px] font-mono tracking-widest text-growth uppercase">
                      Campaign Asset
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-base font-display font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                      <span>Interactive asset sample</span>
                      <ArrowUpRight className="w-3 h-3 text-growth" />
                    </div>
                  </div>

                </div>

                {/* Card Title Information (Always Visible Below Asset Card) */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[10px] font-mono text-growth uppercase tracking-wider">
                      {item.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-growth group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-base font-display font-bold text-white group-hover:text-growth transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
