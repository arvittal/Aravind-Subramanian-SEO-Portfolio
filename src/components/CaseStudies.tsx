import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, MapPin, Calendar, CheckSquare, Target, Trophy } from 'lucide-react';
import { caseStudiesData } from '../data';

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>('location-seo');

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-white/[0.03] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-growth uppercase mb-3 block">
            SEO STRATEGY DEEP DIVE
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
            Client Success Case Studies
          </h2>
          <p className="text-sm text-gray-400 mt-4 max-w-xl font-light">
            An inside look at how I analyze search structures, engineer high-indexation landing page networks, and secure local map pack real estate.
          </p>
          <div className="w-16 h-1 bg-growth mt-6 rounded-full" />
        </div>

        {/* Case Studies Container */}
        <div className="space-y-6">
          {caseStudiesData.map((study, idx) => {
            const isExpanded = expandedId === study.id;

            return (
              <motion.div
                key={study.id}
                layout="position"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-dark-card border-growth/30 shadow-xl shadow-growth/[0.02]'
                    : 'bg-dark-card/50 border-dark-border hover:border-white/10'
                }`}
              >
                {/* Header Block - Always Visible */}
                <div
                  id={`case-study-header-${study.id}`}
                  onClick={() => toggleExpand(study.id)}
                  className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none"
                >
                  <div className="flex-1">
                    {/* Meta tags row */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-3.5">
                      <span className="px-2.5 py-0.5 rounded bg-growth/10 text-growth border border-growth/15">
                        CASE STUDY 0{idx + 1}
                      </span>
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        <span>{study.clientType}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        <span>{study.duration}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-growth transition-colors">
                      {study.title}
                    </h3>
                    
                    {/* Intro Challenge */}
                    <p className="text-sm text-gray-400 font-light mt-3 leading-relaxed max-w-3xl line-clamp-2 md:line-clamp-none">
                      <span className="text-gray-300 font-medium">The Challenge:</span> {study.challenge}
                    </p>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div className="flex items-center justify-start md:justify-end shrink-0">
                    <button
                      id={`case-study-toggle-btn-${study.id}`}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isExpanded
                          ? 'bg-growth text-black'
                          : 'bg-[#1C232B] border border-white/5 text-gray-400 hover:text-white'
                      }`}
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Collapsible Details Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`case-study-body-${study.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-white/5 pt-6 flex flex-col gap-6 bg-gradient-to-b from-transparent to-growth/[0.01]">
                        
                        {/* Optimization Strategy List */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Target className="w-4.5 h-4.5 text-growth" />
                            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                              SEO Re-Engineering Playbook
                            </h4>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {study.strategy.map((item, sIdx) => (
                              <div
                                key={sIdx}
                                className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-bg/60 border border-dark-border"
                              >
                                <CheckSquare className="w-4.5 h-4.5 text-growth shrink-0 mt-0.5" />
                                <span className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Outcomes Block */}
                        <div className="rounded-xl bg-growth/5 border border-growth/10 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Trophy className="w-5 h-5 text-growth" />
                              <h5 className="text-xs font-mono font-bold uppercase text-growth tracking-widest">
                                SEO IMPACT QUANTIFIED
                              </h5>
                            </div>
                            <p className="text-sm md:text-base text-white font-medium">
                              {study.result}
                            </p>
                            <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                              {study.longResult}
                            </p>
                          </div>
                          <div className="px-5 py-3.5 rounded-xl bg-growth/10 border border-growth/20 text-center shrink-0">
                            <span className="text-2xl font-display font-black text-growth block">
                              200%
                            </span>
                            <span className="text-[9px] font-mono font-medium text-gray-300 uppercase tracking-wider block mt-0.5">
                              Lead Capture Speed
                            </span>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
