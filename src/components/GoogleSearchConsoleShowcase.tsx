import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart3, Maximize2, X, ShieldCheck, CheckCircle2, MousePointerClick, Eye, ArrowUpRight, Sparkles } from 'lucide-react';

interface GSCReport {
  id: string;
  title: string;
  clientType: string;
  category: string;
  clicks: string;
  impressions: string;
  ctr: string;
  position: string;
  svgPath: string;
  description: string;
  highlights: string[];
}

const gscReports: GSCReport[] = [
  {
    id: 'campaign-896',
    title: 'High-Volume Enterprise & Regional Campaign',
    clientType: 'Multi-Location Organic Expansion',
    category: 'Scale & Authority',
    clicks: '896',
    impressions: '113k',
    ctr: '0.8%',
    position: '47.1',
    svgPath: '/results/gsc-performance-2.svg',
    description: 'Scaled brand organic visibility to over 113,000 impressions with consistent daily search clicks peaking at ~30 clicks per day, achieving massive reach across top-of-funnel and bottom-of-funnel commercial keywords.',
    highlights: ['113,000+ Verified Search Impressions', '896 Organic Qualified Clicks', 'Sustained Daily Traffic Pipeline', 'Wide-net Keyword Footprint']
  },
  {
    id: 'campaign-210',
    title: 'High-Intent Niche & Local Service Campaign',
    clientType: 'Targeted Local Business Growth',
    category: 'High-Conversion Intent',
    clicks: '210',
    impressions: '11.4k',
    ctr: '1.8%',
    position: '25.7',
    svgPath: '/results/gsc-performance-1.svg',
    description: 'Targeted service keywords delivering a high 1.8% average CTR and top-page average ranking position of 25.7, converting high-intent searchers into direct customer inquiries.',
    highlights: ['1.8% High-Intent Click-Through Rate', '25.7 Top Average Position', '11,400+ Targeted Impressions', 'High Customer Lead Conversion']
  }
];

export default function GoogleSearchConsoleShowcase() {
  const [selectedId, setSelectedId] = useState<string>('campaign-896');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const activeReport = gscReports.find(r => r.id === selectedId) || gscReports[0];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsZoomed(false);
    };
    if (isZoomed) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  return (
    <div className="mt-20 pt-16 border-t border-white/[0.06]">
      {/* Sub-header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-growth/10 border border-growth/20 mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-growth" />
          <span className="text-[11px] font-mono tracking-widest text-growth uppercase font-semibold">
            VERIFIED GOOGLE SEARCH CONSOLE DATA
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
          Proof in Numbers: Search Console Performance
        </h3>
        <p className="text-sm md:text-base text-gray-400 mt-3 max-w-2xl font-light">
          Real, unretouched Google Search Console performance reports demonstrating sustained impression volume expansions and daily organic click conversions.
        </p>
      </div>

      {/* Campaign Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {gscReports.map((report) => {
          const isSelected = report.id === selectedId;
          return (
            <button
              key={report.id}
              onClick={() => setSelectedId(report.id)}
              className={`px-5 py-3 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 ${
                isSelected
                  ? 'bg-growth/10 border-growth text-white shadow-lg shadow-growth/5'
                  : 'bg-dark-card border-dark-border text-gray-400 hover:border-white/20 hover:text-gray-200'
              }`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-growth shadow-sm shadow-growth' : 'bg-gray-600'}`} />
              <div>
                <div className="text-xs font-mono uppercase tracking-wider font-semibold text-gray-300">
                  {report.title}
                </div>
                <div className="text-[11px] text-gray-400 font-mono mt-0.5">
                  <span className="text-growth font-bold">{report.clicks} Clicks</span> · {report.impressions} Impr · CTR {report.ctr}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Showcase Card Container */}
      <div className="rounded-2xl bg-dark-card border border-dark-border overflow-hidden shadow-2xl relative">
        {/* Browser Top Bar */}
        <div className="px-4 py-3 bg-[#111419] border-b border-white/[0.06] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
          </div>

          <div className="px-4 py-1 rounded-md bg-dark-bg border border-white/5 text-[11px] font-mono text-gray-400 flex items-center gap-2 max-w-md w-full justify-center">
            <span className="text-growth font-semibold">https://</span>
            <span>search.google.com/search-console/performance</span>
          </div>

          <button
            onClick={() => setIsZoomed(true)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-mono transition-colors"
            title="Expand Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5 text-growth" />
            <span className="hidden sm:inline">Zoom</span>
          </button>
        </div>

        {/* Metric Badges Quick Row */}
        <div className="p-6 md:p-8 bg-[#0B0D11] border-b border-white/[0.04]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[#1A73E8]/10 border border-[#1A73E8]/30">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#4285F4] uppercase tracking-wider mb-1">
                <MousePointerClick className="w-3.5 h-3.5" />
                <span>Total Clicks</span>
              </div>
              <div className="text-2xl md:text-3xl font-display font-extrabold text-white">
                {activeReport.clicks}
              </div>
              <div className="text-[10px] text-gray-400 font-mono mt-1">Verified Organic Searches</div>
            </div>

            <div className="p-4 rounded-xl bg-[#5E35B1]/10 border border-[#5E35B1]/30">
              <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                <Eye className="w-3.5 h-3.5" />
                <span>Total Impressions</span>
              </div>
              <div className="text-2xl md:text-3xl font-display font-extrabold text-white">
                {activeReport.impressions}
              </div>
              <div className="text-[10px] text-gray-400 font-mono mt-1">Google SERP Appearances</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Average CTR</div>
              <div className="text-2xl md:text-3xl font-display font-extrabold text-gray-200">
                {activeReport.ctr}
              </div>
              <div className="text-[10px] text-gray-500 font-mono mt-1">Click-Through Rate</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Avg Position</div>
              <div className="text-2xl md:text-3xl font-display font-extrabold text-gray-200">
                {activeReport.position}
              </div>
              <div className="text-[10px] text-gray-500 font-mono mt-1">Google Search Average</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
            <div>
              <h4 className="text-lg font-display font-bold text-white flex items-center gap-2">
                {activeReport.title}
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-growth/10 text-growth border border-growth/20">
                  {activeReport.clientType}
                </span>
              </h4>
              <p className="text-sm text-gray-400 mt-1 max-w-3xl font-light leading-relaxed">
                {activeReport.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {activeReport.highlights.map((h, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-[11px] font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  <CheckCircle2 className="w-3 h-3 text-growth" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshot View Area */}
        <div className="p-4 md:p-6 bg-[#08090C] flex flex-col items-center justify-center">
          <div
            onClick={() => setIsZoomed(true)}
            className="w-full rounded-xl overflow-hidden border border-white/10 shadow-lg cursor-pointer group/preview relative transition-all duration-300 hover:border-growth/40"
          >
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-[1px]">
              <div className="px-4 py-2 rounded-full bg-dark-bg/90 border border-growth/40 text-white font-mono text-xs flex items-center gap-2 shadow-2xl">
                <Maximize2 className="w-3.5 h-3.5 text-growth" />
                <span>Click to view full screenshot</span>
              </div>
            </div>

            <img
              src={activeReport.svgPath}
              alt={activeReport.title}
              className="w-full h-auto object-contain block select-none bg-white rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="text-[11px] font-mono text-gray-500 mt-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-growth animate-pulse" />
            <span>Actual Google Search Console performance export. Daily interval data.</span>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 md:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-dark-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 bg-[#111419] border-b border-white/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="text-white font-display font-bold text-base md:text-lg flex items-center gap-2">
                    {activeReport.title}
                    <span className="text-xs font-mono text-growth bg-growth/10 border border-growth/20 px-2 py-0.5 rounded">
                      Google Search Console
                    </span>
                  </h4>
                  <div className="text-xs text-gray-400 font-mono mt-0.5">
                    {activeReport.clicks} Clicks · {activeReport.impressions} Impressions · {activeReport.ctr} CTR · Pos {activeReport.position}
                  </div>
                </div>

                <button
                  onClick={() => setIsZoomed(false)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body with crisp image */}
              <div className="p-4 md:p-6 overflow-auto bg-[#07090D] flex items-center justify-center">
                <img
                  src={activeReport.svgPath}
                  alt={activeReport.title}
                  className="max-w-full h-auto object-contain rounded-lg border border-white/10 shadow-2xl bg-white"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 bg-[#111419] border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>Verified Google Performance Data Export</span>
                <button
                  onClick={() => setIsZoomed(false)}
                  className="text-growth hover:underline"
                >
                  Close [Esc]
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
