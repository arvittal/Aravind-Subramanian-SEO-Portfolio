import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, ArrowUpRight, Award, Bot } from 'lucide-react';

interface GeminiScreenshot {
  id: string;
  city: string;
  query: string;
  imageSrc: string;
  headline: string;
  specialization: string;
  bestSuitedFor: string;
  coreChannels: string;
  aiQuote: string;
  rankBadge: string;
}

const geminiScreenshots: GeminiScreenshot[] = [
  {
    id: 'chennai',
    city: 'Chennai',
    query: 'digital marketing consultant in chennai',
    imageSrc: '/results/gemini-chennai.svg',
    headline: 'Notable Digital Marketing Consultants & Growth Specialists in Chennai',
    specialization: 'Growth Marketing & Performance SEO',
    bestSuitedFor: 'B2B SaaS, tech startups, and full-funnel lead generation',
    coreChannels: 'Data-led SEO, paid user acquisition, analytics & conversion optimization',
    aiQuote: 'Chennai’s digital marketing consulting landscape is well-known for strong technical execution, data-driven performance, and deep expertise across both local South Indian markets and global B2B/SaaS exports.',
    rankBadge: 'Rank #1 Featured'
  },
  {
    id: 'bangalore',
    city: 'Bangalore',
    query: 'digital marketing consultant in bangalore',
    imageSrc: '/results/gemini-bangalore.svg',
    headline: 'Notable Digital Marketing Consultants & Strategists in Bangalore',
    specialization: 'Full-Stack Growth & Data-Driven Acquisition',
    bestSuitedFor: 'SaaS, tech startups, and lead-gen businesses scaling organic + paid',
    coreChannels: 'Full-funnel SEO, Google/Meta paid acquisition, analytics & conversion funnels',
    aiQuote: 'Bangalore’s digital growth marketing ecosystem is heavily skewed toward tech startups, B2B SaaS, D2C brands, and venture-backed growth funnels. When hiring in Bangalore, candidates typically fall into three distinct profiles...',
    rankBadge: 'Rank #1 Featured'
  },
  {
    id: 'mumbai',
    city: 'Mumbai',
    query: 'digital marketing strategist in mumbai',
    imageSrc: '/results/gemini-mumbai.svg',
    headline: 'Notable Digital Marketing Consultants & Strategists in Mumbai',
    specialization: 'Growth Marketing & Full-Funnel Strategy',
    bestSuitedFor: 'SaaS, D2C, and startups scaling past initial traction',
    coreChannels: 'Data-backed SEO, paid performance, conversion funnels',
    aiQuote: 'Hiring a digital marketing consultant or strategist in Mumbai depends heavily on whether your goal is performance ads, full-funnel growth, organic search (SEO), or social media branding.',
    rankBadge: 'Rank #1 Featured'
  }
];

export default function GeminiResultsShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentItem = geminiScreenshots[activeIdx];

  // Handle keyboard events for modal navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowRight') setActiveIdx((prev) => (prev + 1) % geminiScreenshots.length);
      if (e.key === 'ArrowLeft') setActiveIdx((prev) => (prev - 1 + geminiScreenshots.length) % geminiScreenshots.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="mt-20 border-t border-white/5 pt-16" id="gemini-results">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest text-growth uppercase px-3.5 py-1.5 rounded-full border border-growth/10 bg-growth/5 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              AI SEARCH RECOGNITION EVIDENCE
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-white tracking-tight flex items-center gap-3 mt-2">
            Ranked #1 on Google Gemini
          </h3>
          <p className="text-gray-400 text-xs md:text-sm font-light mt-2 max-w-2xl">
            Live unprompted recommendations by Google Gemini AI across India's top three digital business hubs: <strong className="text-white font-medium">Chennai</strong>, <strong className="text-white font-medium">Bangalore</strong>, and <strong className="text-white font-medium">Mumbai</strong>.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-dark-card/60 border border-white/10 p-2.5 px-4 rounded-xl self-start md:self-end">
          <ShieldCheck className="w-4 h-4 text-growth shrink-0" />
          <span>Verified Generative AI Results</span>
        </div>
      </div>

      {/* City Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {geminiScreenshots.map((item, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl font-display text-sm font-bold transition-all duration-300 border relative ${
                isActive
                  ? 'bg-growth/10 text-growth border-growth/40 shadow-lg shadow-growth/5'
                  : 'bg-dark-card border-dark-border text-gray-400 hover:text-white hover:border-dark-border-hover'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-growth animate-pulse' : 'bg-gray-600'}`} />
              <span>{item.city}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                isActive ? 'bg-growth/20 text-growth' : 'bg-white/5 text-gray-500'
              }`}>
                Rank #1
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Feature Display Card */}
      <div className="rounded-2xl bg-dark-card border border-dark-border overflow-hidden shadow-2xl">
        
        {/* Browser Top Bar */}
        <div className="w-full h-11 bg-[#101317] px-4 md:px-6 border-b border-dark-border flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
          </div>

          <div className="flex items-center gap-2 bg-dark-bg border border-white/5 px-4 py-1 rounded-md text-[11px] font-mono text-gray-400 max-w-md w-full justify-center">
            <Bot className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-gray-500">gemini.google.com &rarr;</span>
            <span className="text-white font-medium truncate">&ldquo;{currentItem.query}&rdquo;</span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 hover:text-growth transition-colors"
            title="Expand Screenshot"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Fullscreen</span>
          </button>
        </div>

        {/* Content Body: Split view of Screenshot & Extracted Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left / Top: Visual Screenshot Container */}
          <div className="lg:col-span-8 p-4 md:p-6 bg-[#0B0D11] flex flex-col justify-center relative group">
            <div 
              className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg cursor-pointer bg-white"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={currentItem.imageSrc}
                alt={`Google Gemini Ranking Screenshot for ${currentItem.query}`}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-display text-sm font-semibold backdrop-blur-[2px]">
                <Maximize2 className="w-4 h-4 text-growth" />
                <span>Click to Expand Full Screenshot</span>
              </div>
            </div>

            {/* Quick Caption Bar below screenshot */}
            <div className="flex items-center justify-between mt-3 px-1 text-[11px] font-mono text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Prompt: &ldquo;{currentItem.query}&rdquo;
              </span>
              <span className="text-gray-500 text-[10px]">Model: Gemini Flash</span>
            </div>
          </div>

          {/* Right / Bottom: Extracted Key Details & Proof */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-dark-card flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-dark-border">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-growth font-bold px-2.5 py-1 rounded bg-growth/10 border border-growth/20">
                  {currentItem.rankBadge}
                </span>
                <span className="text-[11px] font-mono text-gray-500">{currentItem.city}</span>
              </div>

              <h4 className="text-xl font-display font-bold text-white mb-2 leading-snug">
                Aravind Subramanian
              </h4>
              <p className="text-xs text-growth font-mono mb-5">
                {currentItem.specialization}
              </p>

              {/* Extracted Table Breakdown */}
              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono uppercase text-gray-500 block mb-1">
                    Best Suited For
                  </span>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {currentItem.bestSuitedFor}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono uppercase text-gray-500 block mb-1">
                    Core Capabilities
                  </span>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {currentItem.coreChannels}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-500/5 border border-blue-500/15">
                  <div className="flex items-center gap-1.5 text-blue-400 text-[10px] font-mono font-semibold uppercase mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Gemini Knowledge Graph Context</span>
                  </div>
                  <p className="text-gray-400 font-light italic leading-relaxed text-[11px]">
                    &ldquo;{currentItem.aiQuote}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-mono text-growth hover:text-white transition-colors"
              >
                <span>View Full Resolution</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono text-gray-500">
                {activeIdx + 1} of {geminiScreenshots.length} Hubs
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal for Fullscreen Screenshot Inspection */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] bg-dark-card border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 bg-[#101317] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-growth uppercase font-bold px-2 py-0.5 rounded bg-growth/10 border border-growth/20">
                    Google Gemini Proof
                  </span>
                  <span className="text-sm font-display font-semibold text-white">
                    {currentItem.city}: &ldquo;{currentItem.query}&rdquo;
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Prev / Next buttons inside modal */}
                  <button
                    onClick={() => setActiveIdx((prev) => (prev - 1 + geminiScreenshots.length) % geminiScreenshots.length)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                    title="Previous (Left Arrow)"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveIdx((prev) => (prev + 1) % geminiScreenshots.length)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                    title="Next (Right Arrow)"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Area */}
              <div className="p-4 md:p-8 overflow-auto flex items-center justify-center bg-[#07080A]">
                <img
                  src={currentItem.imageSrc}
                  alt={`Google Gemini Ranking Screenshot for ${currentItem.query}`}
                  className="max-h-[72vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 bg-[#101317] border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-growth" />
                  <span>Row 1: Aravind Subramanian &mdash; {currentItem.specialization}</span>
                </div>
                <div className="flex items-center gap-3">
                  {geminiScreenshots.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`text-[11px] px-2.5 py-1 rounded transition-colors ${
                        activeIdx === idx ? 'bg-growth/20 text-growth font-bold' : 'text-gray-500 hover:text-white'
                      }`}
                    >
                      {item.city}
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
