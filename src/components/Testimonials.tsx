import { motion } from 'motion/react';
import { Quote, Star, CheckCircle2, ThumbsUp, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-dark-bg border-t border-white/[0.04]">
      {/* Background glow and grid overlay for subtle depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-44 bg-growth/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative vertical guide line */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-white/[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-growth/10 border border-growth/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-growth" />
            <span className="text-xs font-mono tracking-widest text-growth uppercase font-semibold">
              CLIENT TESTIMONIALS & FEEDBACK
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white"
          >
            What Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-gray-400 mt-4 max-w-xl font-light"
          >
            Real feedback from business owners who scaled their online reach, converted search traffic, and generated high-intent customer leads.
          </motion.p>
          <div className="w-16 h-1 bg-growth mt-6 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-2xl bg-dark-card/70 border border-dark-border hover:border-growth/40 transition-all duration-300 p-8 flex flex-col justify-between shadow-lg shadow-black/20 hover:shadow-growth/[0.04]"
            >
              {/* Subtle top corner gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-growth/[0.04] rounded-tr-2xl rounded-bl-full pointer-events-none group-hover:bg-growth/[0.08] transition-colors" />

              <div>
                {/* Top Row: Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-growth">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-growth text-growth" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-growth/20 group-hover:text-growth/40 transition-colors shrink-0" />
                </div>

                {/* Service Tag */}
                <div className="mb-4">
                  <span className="inline-block text-[11px] font-mono tracking-wider text-growth bg-growth/10 border border-growth/20 px-2.5 py-0.5 rounded-full uppercase">
                    {item.service}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-gray-200 text-base md:text-lg leading-relaxed font-light italic mb-8 relative z-10">
                  &ldquo;{item.content}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  {/* Initial Avatar */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-growth/20 to-emerald-700/20 border border-growth/30 flex items-center justify-center text-growth font-display font-bold text-base shrink-0 shadow-inner">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base tracking-wide flex items-center gap-1.5">
                      {item.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-growth" />
                    </h3>
                    <p className="text-xs text-gray-400 font-mono">
                      {item.role || 'Business Owner'}
                    </p>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="hidden sm:flex items-center gap-1 text-[11px] text-gray-400 font-mono bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5">
                  <ThumbsUp className="w-3 h-3 text-growth" />
                  <span>Verified Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
