import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, ExternalLink, ArrowRight, ShieldCheck, Trophy, Landmark, ArrowUpRight, CheckCircle2, ChevronRight, CornerDownRight, Maximize2, Bot } from 'lucide-react';
import GeminiResultsShowcase from './GeminiResultsShowcase';

interface RankingItem {
  id: string;
  query: string;
  category: string;
  siteName: string;
  url: string;
  title: string;
  snippet: string;
  rank: number;
  isAIOverview?: boolean;
  isGemini?: boolean;
  geminiScreenshot?: string;
  aiHighlights?: string[];
  competitorsBefore?: { rank: number; url: string; title: string; snippet: string }[];
  competitorsAfter?: { rank: number; url: string; title: string; snippet: string }[];
}

const rankingData: RankingItem[] = [
  {
    id: "gemini-chennai",
    query: "digital marketing freelancer in chennai",
    category: "Google Gemini AI (Rank #1)",
    siteName: "gemini.google.com",
    url: "https://gemini.google.com",
    title: "Notable Digital Marketing Freelancers & Consultants in Chennai",
    snippet: "Aravind Subramanian ranked #1. Specialization: Growth Marketing & Performance SEO. Best Suited For: B2B SaaS, tech startups, and full-funnel lead generation. Core: Data-led SEO, paid user acquisition, analytics & conversion optimization.",
    rank: 1,
    isGemini: true,
    geminiScreenshot: "/results/gemini-chennai.svg",
    aiHighlights: ["Aravind Subramanian", "Growth Marketing & Performance SEO", "B2B SaaS"]
  },
  {
    id: "gemini-bangalore",
    query: "digital marketing freelancer in bangalore",
    category: "Google Gemini AI (Rank #1)",
    siteName: "gemini.google.com",
    url: "https://gemini.google.com",
    title: "Notable Digital Marketing Freelancers & Consultants in Bangalore",
    snippet: "Aravind Subramanian ranked #1. Specialization: Full-Stack Growth & Data-Driven Acquisition. Best Suited For: SaaS, tech startups, and lead-gen businesses scaling organic + paid.",
    rank: 1,
    isGemini: true,
    geminiScreenshot: "/results/gemini-bangalore.svg",
    aiHighlights: ["Aravind Subramanian", "Full-Stack Growth & Data-Driven Acquisition", "SaaS, tech startups"]
  },
  {
    id: "gemini-mumbai",
    query: "digital marketing freelancer in mumbai",
    category: "Google Gemini AI (Rank #1)",
    siteName: "gemini.google.com",
    url: "https://gemini.google.com",
    title: "Notable Digital Marketing Freelancers in Mumbai",
    snippet: "Aravind Subramanian ranked #1. Core Specialization: Growth Marketing & Full-Funnel Strategy. Best For: SaaS, D2C, and startups scaling past initial traction.",
    rank: 1,
    isGemini: true,
    geminiScreenshot: "/results/gemini-mumbai.svg",
    aiHighlights: ["Aravind Subramanian", "Growth Marketing & Full-Funnel Strategy", "Data-backed SEO"]
  },
  {
    id: "seo-best-chennai",
    query: "best digital marketing freelancer in chennai",
    category: "Personal Brand SEO",
    siteName: "aravindsubramanian.com",
    url: "https://aravindsubramanian.com",
    title: "Best Digital Marketing Freelancer in Chennai | Aravind",
    snippet: "Hire Aravind Subramanian, the best digital marketing freelancer in Chennai. Get ROI-driven SEO, PPC & social media solutions. Book your consultation today!",
    rank: 5,
    competitorsBefore: [
      {
        rank: 4,
        url: "https://www.karthickdigital.in",
        title: "Best Digital Marketing Freelancers in Chennai | Social media ...",
        snippet: "Expert in Digital Marketing, SEO, Google Ads, Facebook Marketing, and Instagram Marketing. With over 10 years of experience in a top Digital Marketing Agency..."
      }
    ]
  },
  {
    id: "seo-chennai",
    query: "digital marketing freelancer in chennai",
    category: "Personal Brand SEO",
    siteName: "aravindsubramanian.com",
    url: "https://aravindsubramanian.com",
    title: "Best Digital Marketing Freelancer in Chennai | Aravind",
    snippet: "Hire Aravind Subramanian, the best digital marketing freelancer in Chennai. Get ROI-driven SEO, PPC & social media solutions. Book your consultation today!",
    rank: 9,
    competitorsBefore: [
      {
        rank: 8,
        url: "https://www.chennaiseo.com",
        title: "Top Digital Marketing Agency & Freelancer Chennai",
        snippet: "Get specialized growth hacking, technical site audits, high quality link acquisition and organic traffic generation campaigns."
      }
    ]
  },
  {
    id: "safety-matches",
    query: "safety matches exporters",
    category: "B2B & Industrial Export",
    siteName: "AI Overview",
    url: "AI Search Grounding",
    title: "AI Overview: Top Safety Matches Exporters...",
    snippet: "Top safety matches exporters include Indian companies like Epoch Exports, Quanker Matches, BGlobal India, SD Matches. These exporters offer a range of safety matches, including customized wooden, cardboard, and wax matches.",
    rank: 1,
    isAIOverview: true,
    aiHighlights: ["Epoch Exports", "Quanker Matches", "BGlobal India", "SD Matches"]
  },
  {
    id: "jain-food-singapore",
    query: "jain food in singapore",
    category: "Travel & Hospitality",
    siteName: "pickyourtrail.com",
    url: "https://pickyourtrail.com/singapore/jain-food",
    title: "Jain Restaurants in Singapore Veg Eateries You'll Love",
    snippet: "This culinary guide has you covered. From simple thalis to delightful chats, here's where you can eat like royalty, Jain style, in the Lion City.",
    rank: 1,
    competitorsAfter: [
      {
        rank: 2,
        url: "https://www.tripadvisor.com",
        title: "THE 10 BEST Indian Veg Restaurants in Singapore",
        snippet: "Indian Vegetarian Restaurants in Singapore: Find TripAdvisor traveler reviews of Singapore Indian Vegetarian restaurants and search by price, location..."
      }
    ]
  },
  {
    id: "bungee-jumping-bali",
    query: "bungee jumping in bali",
    category: "Adventure & Travel",
    siteName: "pickyourtrail.com",
    url: "https://pickyourtrail.com/bali/bungee",
    title: "Everything You Need to Know About Bungee Jumping in Bali",
    snippet: "Planning a bungee jump in Bali? From safety measures to the best spots and cost guides, here is everything you need to know about bungee jumping in Bali.",
    rank: 3
  },
  {
    id: "villages-singapore",
    query: "villages in singapore",
    category: "History & Editorial",
    siteName: "traveltriangle.com",
    url: "https://traveltriangle.com/singapore/villages",
    title: "Villages in Singapore That Used To Exist But Are Now...",
    snippet: "Explore the villages in Singapore that are historical attractions. Get details about kampungs, location, timing, and virtual tours.",
    rank: 1,
    competitorsAfter: [
      {
        rank: 2,
        url: "https://www.visitsingapore.com",
        title: "Traditional Kampongs of Singapore - Heritage Trails",
        snippet: "Discover Singapore's last remaining kampong at Lorong Buangkok, learning about traditional village life and local history guides..."
      }
    ]
  },
  {
    id: "bali-packages-chennai",
    query: "bali packages from chennai",
    category: "Travel Bookings",
    siteName: "pickyourtrail.com",
    url: "https://pickyourtrail.com/packages/chennai-to-bali",
    title: "Bali Tour Packages from Chennai - Pickyourtrail",
    snippet: "Bali Tour Packages from Chennai starting at ₹31,000. Plan your trip to Bali from Chennai with custom itineraries, hotels, flights and activities.",
    rank: 5,
    competitorsBefore: [
      {
        rank: 4,
        url: "https://www.thomascook.in",
        title: "Bali Tour Packages from Chennai - Thomas Cook India",
        snippet: "Book Bali Tour Packages from Chennai at best prices. Choose from a wide range of custom travel packages with flights, sightseeing, and premium guides."
      }
    ]
  }
];

export default function RankingsShowcase() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [typedQuery, setTypedQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const selectedItem = rankingData[selectedIdx];

  // Simulated Google search typing effect when selected query changes
  useEffect(() => {
    setIsTyping(true);
    setIsSearching(false);
    setTypedQuery('');

    let currentText = '';
    const targetText = selectedItem.query;
    let i = 0;

    const interval = setInterval(() => {
      if (i < targetText.length) {
        currentText += targetText[i];
        setTypedQuery(currentText);
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setIsSearching(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [selectedIdx, selectedItem.query]);

  return (
    <section id="rankings" className="py-24 relative overflow-hidden bg-dark-bg border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-growth/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/3 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-growth uppercase mb-3 px-3.5 py-1.5 rounded-full border border-growth/10 bg-growth/5">
            RANKINGS PROOF OF WORK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight text-white max-w-3xl leading-tight">
            Dominating Search Results. <br className="hidden md:inline" />
            <span className="text-growth-gradient">Real-Time Google Positions.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-sm md:text-base font-light">
            Don't trust promise notes. Trust live rankings. Here is a curated view of first-page placements achieved across personal branding, international travel guides, B2B exports, and industrial keywords.
          </p>
          <div className="w-16 h-1 bg-growth mt-6 rounded-full" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          
          {/* Left Column: List of keywords/proof points */}
          <div className="lg:col-span-5 flex flex-col gap-3">

            <div
              className="flex flex-col gap-2.5 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar"
            >
              {rankingData.map((item, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={item.id}
                    id={`ranking-btn-${idx}`}
                    onClick={() => setSelectedIdx(idx)}
                    className={`group text-left p-4 rounded-xl border transition-all duration-300 relative ${
                      isSelected
                        ? 'bg-growth/5 border-growth/40 shadow-lg shadow-growth/5'
                        : 'bg-dark-card border-dark-border hover:border-dark-border-hover hover:bg-[#14181E]/60'
                    }`}
                  >
                    {/* Active highlight side line */}
                    {isSelected && (
                      <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-growth rounded-r" />
                    )}

                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] font-mono tracking-wider text-gray-500 uppercase">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {item.isAIOverview ? (
                          <span className="text-[9px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded-md font-bold uppercase">
                            AI Overview
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono bg-growth/10 text-growth border border-growth/20 px-1.5 py-0.5 rounded-md font-bold">
                            Rank #{item.rank}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className={`font-display font-bold text-sm md:text-base leading-tight transition-colors ${
                      isSelected ? 'text-growth' : 'text-white group-hover:text-growth/80'
                    }`}>
                      &ldquo;{item.query}&rdquo;
                    </h3>

                    <div className="flex items-center gap-2 mt-2.5 text-xs text-gray-500">
                      <span className="font-mono text-[10px] tracking-tight">{item.siteName}</span>
                      <ChevronRight className="w-3 h-3 text-gray-700" />
                      <span className="text-[10px] text-gray-500 font-light truncate max-w-[150px]">
                        {item.url}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-b-2xl bg-dark-card/20 border border-white/5 flex items-center gap-3 mt-1 text-xs text-gray-400 font-light">
              <Trophy className="w-5 h-5 text-growth shrink-0" />
              <span>All rankings verified on organic mobile & desktop SERPs.</span>
            </div>
          </div>

          {/* Right Column: Google Search Engine Simulator */}
          <div className="lg:col-span-7">
            
            {/* Styled Browser Window */}
            <div className="w-full rounded-2xl bg-dark-card border border-dark-border shadow-2xl overflow-hidden relative group-hover:border-growth/20 transition-all duration-300">
              
              {/* Browser Header Bar */}
              <div className="w-full h-11 bg-[#101317] px-4 border-b border-dark-border flex items-center justify-between select-none">
                {/* 3 Color Dots representing macOS window control */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block opacity-80" />
                </div>
                {/* Simulated URL Bar */}
                <div className="w-3/5 h-6 bg-dark-bg border border-white/5 rounded-md flex items-center justify-center text-[10px] font-mono text-gray-400 select-none">
                  <span className="opacity-40 mr-1 text-growth font-bold">https://</span>
                  google.com/search?q={encodeURIComponent(selectedItem.query)}
                </div>
                {/* Window Actions */}
                <div className="flex items-center gap-1.5 text-gray-500">
                  <div className="w-4 h-4 rounded-full border border-white/5 flex items-center justify-center bg-white/5 text-[8px] font-mono">
                    G
                  </div>
                </div>
              </div>

              {/* Google SERP Content Body */}
              <div className="p-6 md:p-8 bg-[#0D0F13] min-h-[460px] flex flex-col gap-6 font-sans">
                
                {/* Micro Google Logo and Search Bar */}
                <div className="flex flex-col md:flex-row items-center gap-4 border-b border-white/5 pb-5">
                  <div className="flex items-center gap-1 select-none">
                    <span className="text-lg md:text-xl font-bold text-[#4285F4]">G</span>
                    <span className="text-lg md:text-xl font-bold text-[#EA4335]">o</span>
                    <span className="text-lg md:text-xl font-bold text-[#FBBC05]">o</span>
                    <span className="text-lg md:text-xl font-bold text-[#4285F4]">g</span>
                    <span className="text-lg md:text-xl font-bold text-[#34A853]">l</span>
                    <span className="text-lg md:text-xl font-bold text-[#EA4335]">e</span>
                  </div>
                  
                  {/* Simulated Search bar input field */}
                  <div className="relative flex-grow w-full max-w-md">
                    <div className="w-full h-10 px-4 bg-dark-card border border-white/10 rounded-full flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-2">
                        <Search className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="font-light">
                          {typedQuery}
                          <span className={`inline-block w-[1.5px] h-3.5 bg-growth ml-0.5 ${isTyping ? 'animate-pulse' : 'hidden'}`} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Results Panel */}
                <div className="flex flex-col gap-6">
                  
                  {/* Results Count Summary */}
                  <div className="text-[10px] font-mono text-gray-500 flex items-center gap-1.5">
                    <span>About 254,000 results</span>
                    <span>(0.38 seconds)</span>
                  </div>

                  {/* Typing State Indicator */}
                  <AnimatePresence mode="wait">
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-4"
                      >
                        <div className="h-4 w-1/3 bg-dark-card rounded animate-pulse" />
                        <div className="h-10 w-full bg-dark-card rounded animate-pulse" />
                        <div className="h-10 w-2/3 bg-dark-card rounded animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Fully loaded results layout */}
                  {isSearching && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col gap-6"
                    >
                      {/* 1. Competitors ranked BEFORE (if applicable) */}
                      {selectedItem.competitorsBefore?.map((comp, compIdx) => (
                        <div key={`comp-before-${comp.rank}-${compIdx}`} className="opacity-40 group/comp">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                              <span>Rank #{comp.rank}</span>
                              <span>&bull;</span>
                              <span>{comp.url}</span>
                            </span>
                          </div>
                          <h4 className="text-sm md:text-base font-semibold text-blue-400 group-hover/comp:underline mb-1">
                            {comp.title}
                          </h4>
                          <p className="text-xs text-gray-400 font-light leading-relaxed">
                            {comp.snippet}
                          </p>
                        </div>
                      ))}

                      {/* 2. THE HIGHLIGHTED TARGET PORTFOLIO RANKING (Aravind's client or personal asset) */}
                      <div className="relative p-5 rounded-2xl bg-growth/5 border border-growth/30 shadow-xl shadow-growth/5 group/target">
                        
                        {/* Glow effect surrounding highlight */}
                        <div className="absolute inset-0 bg-gradient-to-r from-growth/5 via-transparent to-growth/5 rounded-2xl opacity-50 pointer-events-none" />
                        
                        {/* Status Label header for Proof Section */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-growth/10 pb-3 mb-3 relative z-10">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-growth animate-pulse" />
                            <span className="text-[10px] font-mono font-bold text-growth uppercase tracking-wider">
                              {selectedItem.isAIOverview ? 'AI SEARCH GROUNDING FEATURED' : `POSITION ACHIEVED: RANK #${selectedItem.rank}`}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-growth/10 border border-growth/20 text-[9px] font-mono text-growth uppercase font-semibold">
                            <Trophy className="w-3 h-3" />
                            <span>Verified</span>
                          </div>
                        </div>

                        {/* Search URL / Path bar */}
                        <div className="flex items-center gap-2 mb-1 text-[11px] text-gray-400 font-mono relative z-10">
                          <span className="text-gray-500 font-light">
                            {selectedItem.url.replace('https://', '')}
                          </span>
                        </div>

                        {/* Search Result Title Link */}
                        <h4 className="text-base md:text-lg font-bold text-white group-hover/target:text-growth transition-colors mb-1.5 relative z-10">
                          <a
                            href={selectedItem.url === 'AI Search Grounding' ? '#' : selectedItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:underline"
                          >
                            <span>{selectedItem.title}</span>
                            {selectedItem.url !== 'AI Search Grounding' && (
                              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/target:text-growth transition-colors" />
                            )}
                          </a>
                        </h4>

                        {/* Search Result Meta Snippet (with AI Highlight markers if applicable) */}
                        <div className="text-xs md:text-sm text-gray-300 font-light leading-relaxed relative z-10">
                          {selectedItem.geminiScreenshot ? (
                            <div className="space-y-3">
                              <p className="text-xs text-gray-300">
                                {selectedItem.snippet}
                              </p>
                              
                              {/* Inline Screenshot Thumbnail Preview */}
                              <div 
                                onClick={() => {
                                  const el = document.getElementById('gemini-results');
                                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="relative rounded-xl overflow-hidden border border-white/10 bg-white cursor-pointer group/thumb"
                              >
                                <img
                                  src={selectedItem.geminiScreenshot}
                                  alt={selectedItem.title}
                                  className="w-full h-auto object-contain max-h-[220px]"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-display text-xs font-semibold backdrop-blur-[2px]">
                                  <Maximize2 className="w-4 h-4 text-growth" />
                                  <span>Inspect Full Screenshot in Gemini AI Showcase &darr;</span>
                                </div>
                              </div>

                              <div className="p-2.5 rounded-lg bg-growth/10 border border-growth/20 flex items-center justify-between text-[11px] font-mono">
                                <span className="text-growth font-bold flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5" />
                                  Google Gemini #1 Recommendation
                                </span>
                                <button
                                  onClick={() => {
                                    const el = document.getElementById('gemini-results');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                  }}
                                  className="text-white hover:text-growth flex items-center gap-1 transition-colors"
                                >
                                  <span>View 3 Hubs</span>
                                  <ArrowRight className="w-3 h-3 text-growth" />
                                </button>
                              </div>
                            </div>
                          ) : selectedItem.isAIOverview && selectedItem.aiHighlights ? (
                            <div>
                              {/* Custom Rendering of the AI overview layout */}
                              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-gray-300 leading-relaxed mb-3">
                                <div className="flex items-center gap-2 mb-2 text-blue-400 font-semibold uppercase tracking-wider text-[9px] font-mono">
                                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                                  <span>Gemini AI Overview response extraction</span>
                                </div>
                                <p>
                                  Top safety matches exporters include Indian companies like{' '}
                                  <span className="bg-growth/20 text-growth px-1 rounded font-medium">Epoch Exports</span>,{' '}
                                  <span className="bg-growth/20 text-growth px-1 rounded font-medium">Quanker Matches</span>,{' '}
                                  <span className="bg-growth/20 text-growth px-1 rounded font-medium">BGlobal India</span>,{' '}
                                  and <span className="bg-growth/20 text-growth px-1 rounded font-medium">SD Matches</span>.
                                </p>
                              </div>
                              <p className="text-xs text-gray-400">
                                This showcases direct inclusion inside Google Generative Search Engines (SGE / LLM) - representing the absolute cutting-edge of optimization.
                              </p>
                            </div>
                          ) : (
                            <p>
                              {selectedItem.snippet.split(selectedItem.siteName).map((text, i, arr) => (
                                <span key={i}>
                                  {text}
                                  {i < arr.length - 1 && (
                                    <span className="text-growth font-medium underline underline-offset-2">{selectedItem.siteName}</span>
                                  )}
                                </span>
                              ))}
                            </p>
                          )}
                        </div>

                        {/* Interactive ROI / Growth Scope detail footer card */}
                        <div className="mt-4 border-t border-growth/10 pt-3 flex items-center justify-between text-[10px] font-mono text-gray-500 relative z-10">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-growth" />
                            <span>Commercial Intent Page optimized</span>
                          </span>
                          <span className="text-growth/80">
                            Growth Strategy &rarr;
                          </span>
                        </div>

                      </div>

                      {/* 3. Competitors ranked AFTER (if applicable) */}
                      {selectedItem.competitorsAfter?.map((comp, compIdx) => (
                        <div key={`comp-after-${comp.rank}-${compIdx}`} className="opacity-40 group/comp">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                              <span>Rank #{comp.rank}</span>
                              <span>&bull;</span>
                              <span>{comp.url}</span>
                            </span>
                          </div>
                          <h4 className="text-sm md:text-base font-semibold text-blue-400 group-hover/comp:underline mb-1">
                            {comp.title}
                          </h4>
                          <p className="text-xs text-gray-400 font-light leading-relaxed">
                            {comp.snippet}
                          </p>
                        </div>
                      ))}

                    </motion.div>
                  )}

                </div>

              </div>

              {/* Live search metrics bottom footer bar in device container */}
              <div className="bg-[#101317] p-3.5 px-6 border-t border-dark-border flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-gray-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-growth" />
                  <span>RankINGS AUDITED FOR COOKIES & PERSONALIZATION</span>
                </span>
                <span className="text-[10px] font-mono text-growth/80">
                  100% ORGANIC ACQUISITION
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Gemini AI Recommendations Proof Showcase with User Uploaded Screenshots */}
        <GeminiResultsShowcase />

        {/* AI Search & Organic SEO Visibility Telemetry Dashboard */}
        <div id="telemetry-dashboard" className="mt-20 border-t border-white/5 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="text-center md:text-left">
              <span className="text-xs font-mono tracking-widest text-growth uppercase mb-2 px-3.5 py-1.5 rounded-full border border-growth/10 bg-growth/5 inline-block">
                PERFORMANCE INDEX
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-2.5 mt-2">
                <Sparkles className="text-growth w-6 h-6" />
                AI Search & Organic SEO Telemetry
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-light mt-1.5 max-w-2xl">
                Aggregated visibility metrics across conversational LLM search engines (ChatGPT, Gemini, SGE) and traditional search indexing platforms.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500 bg-dark-card/40 border border-white/5 p-2 px-3 rounded-lg self-center md:self-end">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Telemetry Connected</span>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: AI Search */}
            <div className="xl:col-span-5 rounded-2xl bg-[#0D0F13] border border-dark-border overflow-hidden flex flex-col relative hover:border-purple-500/20 transition-all duration-300">
              <div className="absolute top-0 left-0 bg-purple-600 text-white px-4 py-1 text-[11px] font-mono uppercase tracking-wider font-bold rounded-br-xl shadow-lg">
                AI Search
              </div>
              
              <div className="p-6 md:p-8 pt-12 flex-grow flex flex-col">
                {/* Metrics Header row */}
                <div className="grid grid-cols-3 gap-4 border-b border-white/5 pb-6 mb-6">
                  {/* AI Visibility */}
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-2">AI Visibility</span>
                    <div className="flex items-center gap-2">
                      <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                        <svg className="absolute w-full h-full transform -rotate-90">
                          <circle
                            cx="18"
                            cy="18"
                            r="14"
                            className="stroke-purple-950/40"
                            strokeWidth="3"
                            fill="transparent"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="14"
                            className="stroke-purple-400"
                            strokeWidth="3"
                            fill="transparent"
                            strokeDasharray="88"
                            strokeDashoffset={88 - (88 * 39) / 100}
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-[9px] font-mono font-bold text-purple-400">39</span>
                      </div>
                      <span className="text-xl md:text-2xl font-display font-black text-white">39</span>
                    </div>
                  </div>

                  {/* Mentions */}
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-2">Mentions</span>
                    <div className="text-xl md:text-2xl font-display font-black text-[#818CF8]">653</div>
                  </div>

                  {/* Cited Pages */}
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-2">Cited Pages</span>
                    <div className="text-xl md:text-2xl font-display font-black text-[#818CF8]">2.4K</div>
                  </div>
                </div>

                {/* AI Engines Breakdown Table */}
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-gray-500 pb-2.5 border-b border-white/5 mb-3 px-1">
                    <span>AI Engine</span>
                    <div className="flex gap-12">
                      <span className="w-16 text-right">Mentions</span>
                      <span className="w-20 text-right">Cited Pages</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* ChatGPT */}
                    <div className="flex items-center justify-between py-1.5 hover:bg-white/[0.02] rounded px-1 transition-all">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-[10px] font-bold font-mono">
                          C
                        </div>
                        <span className="text-xs font-medium text-gray-200">ChatGPT</span>
                      </div>
                      <div className="flex gap-12 font-mono text-xs">
                        <span className="w-16 text-right text-blue-400 hover:underline cursor-pointer font-bold">37</span>
                        <span className="w-20 text-right text-blue-400 hover:underline cursor-pointer font-bold">492</span>
                      </div>
                    </div>

                    {/* AI Overview */}
                    <div className="flex items-center justify-between py-1.5 hover:bg-white/[0.02] rounded px-1 transition-all">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-[10px] font-bold font-mono">
                          G
                        </div>
                        <span className="text-xs font-medium text-gray-200">AI Overview</span>
                      </div>
                      <div className="flex gap-12 font-mono text-xs">
                        <span className="w-16 text-right text-gray-300 font-bold">479</span>
                        <span className="w-20 text-right text-gray-300 font-bold">1.9K</span>
                      </div>
                    </div>

                    {/* AI Mode */}
                    <div className="flex items-center justify-between py-1.5 hover:bg-white/[0.02] rounded px-1 transition-all">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-[10px] font-bold font-mono">
                          M
                        </div>
                        <span className="text-xs font-medium text-gray-200">AI Mode</span>
                      </div>
                      <div className="flex gap-12 font-mono text-xs">
                        <span className="w-16 text-right text-gray-300 font-bold">34</span>
                        <span className="w-20 text-right text-gray-300 font-bold">757</span>
                      </div>
                    </div>

                    {/* Gemini */}
                    <div className="flex items-center justify-between py-1.5 hover:bg-white/[0.02] rounded px-1 transition-all">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-[10px] font-bold font-mono">
                          ✧
                        </div>
                        <span className="text-xs font-medium text-gray-200">Gemini</span>
                      </div>
                      <div className="flex gap-12 font-mono text-xs">
                        <span className="w-16 text-right text-gray-300 font-bold">103</span>
                        <span className="w-20 text-right text-gray-300 font-bold">299</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Card: SEO */}
            <div className="xl:col-span-7 rounded-2xl bg-[#0D0F13] border border-dark-border overflow-hidden flex flex-col relative hover:border-blue-500/20 transition-all duration-300">
              <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-1 text-[11px] font-mono uppercase tracking-wider font-bold rounded-br-xl shadow-lg">
                SEO
              </div>

              <div className="p-6 md:p-8 pt-12 flex-grow flex flex-col justify-between gap-6">
                
                {/* Row 1 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Authority Score */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-1">Authority Score</span>
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="text-2xl font-display font-black text-white">48</span>
                      <span className="text-[8px] font-mono bg-purple-500/15 text-purple-300 px-1 py-0.5 rounded border border-purple-500/25 uppercase font-bold shrink-0">
                        Very good
                      </span>
                    </div>
                  </div>

                  {/* Organic Traffic */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-1">Organic Traffic</span>
                    <div>
                      <span className="text-2xl font-display font-black text-white">138.5K</span>
                      {/* Negative percentage (-9.4%) successfully removed by user request */}
                    </div>
                  </div>

                  {/* Paid Traffic */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-1">Paid Traffic</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-display font-black text-white">7.6K</span>
                      <span className="text-[9px] font-mono text-emerald-400 font-bold">
                        +49%
                      </span>
                    </div>
                  </div>

                  {/* Ref.Domains */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between relative group/metric">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-1 flex items-center justify-between">
                      Ref.Domains
                      <span className="text-gray-500 group-hover/metric:text-gray-300 transition-colors text-[11px]">🌐</span>
                    </span>
                    <span className="text-2xl font-display font-black text-white">5K</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Traffic Share */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-1">Traffic Share</span>
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="16"
                            cy="16"
                            r="12"
                            className="stroke-white/5"
                            strokeWidth="2.5"
                            fill="transparent"
                          />
                          <circle
                            cx="16"
                            cy="16"
                            r="12"
                            className="stroke-indigo-400"
                            strokeWidth="2.5"
                            fill="transparent"
                            strokeDasharray="75.4"
                            strokeDashoffset={75.4 - (75.4 * 10) / 100}
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="absolute text-[8px] font-mono text-indigo-400 font-bold">10%</span>
                      </div>
                      <span className="text-xl font-display font-black text-white">10%</span>
                    </div>
                  </div>

                  {/* Organic Keywords */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-1">Organic Keywords</span>
                    <div>
                      <span className="text-2xl font-display font-black text-white">22.9K</span>
                      {/* Negative percentage (-5.2%) successfully removed by user request */}
                    </div>
                  </div>

                  {/* Paid Keywords */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-1">Paid Keywords</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-display font-black text-white">90</span>
                      <span className="text-[9px] font-mono text-emerald-400 font-bold">
                        +32%
                      </span>
                    </div>
                  </div>

                  {/* Backlinks */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between relative group/metric">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-1 flex items-center justify-between">
                      Backlinks
                      <span className="text-gray-500 group-hover/metric:text-gray-300 transition-colors text-[11px]">🔗</span>
                    </span>
                    <span className="text-2xl font-display font-black text-white">30.9K</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Impact Stat Callout box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-growth/20 transition-all duration-300">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">TRAFFIC VISIBILITY</span>
            <div className="text-3xl font-display font-black text-white flex items-baseline gap-1">
              Top 3 <span className="text-xs text-growth font-mono font-medium">Positions achieved</span>
            </div>
            <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
              Consistently ranking B2B exports, high-intent travel topics, and portfolio brands in the top 3 spots.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-growth/20 transition-all duration-300">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">FUTURE READY</span>
            <div className="text-3xl font-display font-black text-white flex items-baseline gap-1">
              AI <span className="text-xs text-blue-400 font-mono font-medium">Overview Placement</span>
            </div>
            <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
              Optimizing content to match Generative AI search results, ensuring brand prominence in LLM summaries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-growth/20 transition-all duration-300">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">ORGANIC ROI</span>
            <div className="text-3xl font-display font-black text-white flex items-baseline gap-1">
              10x <span className="text-xs text-growth font-mono font-medium">Lead Conversion Rate</span>
            </div>
            <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
              Targeting hyper-specific commercial intent keywords rather than empty search volume metrics.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
