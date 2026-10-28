import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Globe, Search, BookOpen, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { blogPortfolioData } from '../data';
import { BlogPostItem } from '../types';

export default function ContentPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const list = ['All', 'Travel & Tourism', 'Industrial & Energy B2B', 'SEO & Strategy'];
    return list;
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPortfolioData.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.targetKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.client.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blogPortfolioData.length };
    blogPortfolioData.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="content-portfolio" className="py-24 relative overflow-hidden bg-dark-surface/50 border-t border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-growth/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth/10 border border-growth/20 text-growth text-xs font-mono uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CONTENT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
              Published Articles & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth to-teal-400">
                Search Intent Architecture
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Real, live articles authored and optimized across technical B2B engineering, seasonal travel demand clusters, and high-value localized freelance consulting.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-4 border border-white/10 rounded-2xl bg-dark-card/60 p-4 backdrop-blur-md">
            <div>
              <div className="text-2xl font-mono font-bold text-growth">10</div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Live Articles</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-mono font-bold text-white">3</div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Industries</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-mono font-bold text-teal-400">100%</div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Intent Mapped</div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] || 0;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-growth text-black font-semibold shadow-lg shadow-growth/15'
                      : 'bg-dark-card text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                      isActive ? 'bg-black/20 text-black' : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search / Filter Input */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword, topic, or client..."
              className="w-full pl-10 pr-4 py-2 text-xs md:text-sm bg-dark-card border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-growth/50 focus:ring-1 focus:ring-growth/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 px-4 border border-dashed border-white/10 rounded-2xl bg-dark-card/30">
            <Filter className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-white mb-1">No matching articles found</h3>
            <p className="text-sm text-gray-400 mb-4">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-growth text-black hover:bg-white transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPosts.map((post: BlogPostItem) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex flex-col justify-between bg-dark-card border border-white/5 hover:border-growth/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-growth/5 hover:-translate-y-1"
                >
                  <div>
                    {/* Top Meta Header */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-gray-300 bg-white/5 group-hover:bg-growth/10 group-hover:text-growth transition-colors">
                          <Globe className="w-3 h-3 text-growth/70" />
                          {post.domain}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-gray-500">{post.readTime}</span>
                    </div>

                    {/* Category & Client Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-medium text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-400">{post.client}</span>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-lg font-display font-semibold text-white group-hover:text-growth transition-colors line-clamp-2 leading-snug mb-3">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline focus:outline-none"
                      >
                        {post.title}
                      </a>
                    </h3>

                    {/* Target Keyword Badge */}
                    <div className="mb-4">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-growth" />
                        Target Search Term
                      </div>
                      <div className="inline-block text-xs font-mono font-medium text-growth bg-growth/5 border border-growth/20 px-2.5 py-1 rounded-lg">
                        "{post.targetKeyword}"
                      </div>
                    </div>

                    {/* Strategy & Intent Highlight */}
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-6">
                      {post.strategyHighlight}
                    </p>
                  </div>

                  {/* Outbound Link Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gray-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-growth" />
                      Live Published
                    </span>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-growth transition-colors"
                      aria-label={`Read ${post.title} on ${post.domain}`}
                    >
                      <span>Read Live</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Verification Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-growth/5 via-dark-card to-teal-500/5 border border-growth/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-growth/10 border border-growth/30 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-growth" />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-display font-semibold text-white">
                Need a High-Impact Content Strategy for Your Brand?
              </h4>
              <p className="text-xs md:text-sm text-gray-400">
                I build topical authority clusters, map user search intent, and create conversion-optimized content that outranks competitors.
              </p>
            </div>
          </div>
          <a
            href="https://calendly.com/aravindsubramanianhs/aravindhs"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-black bg-growth hover:bg-white transition-all shadow-lg shadow-growth/15 hover:scale-105 active:scale-95 duration-200"
          >
            Discuss Content Strategy
          </a>
        </div>
      </div>
    </section>
  );
}
