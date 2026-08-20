import { motion } from 'motion/react';
import { Calendar, Briefcase, Target, Award, Compass, GraduationCap, Settings, Globe } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  const industries = [
    { name: 'Travel & Tourism', icon: Compass, desc: 'Destination authority mapping & local booking SEO' },
    { name: 'EdTech & Learning', icon: GraduationCap, desc: 'High-intent course research & student acquisition maps' },
    { name: 'Automation Solutions', icon: Settings, desc: 'B2B keyword research & high-intent funnel conversion' },
    { name: 'Export & Import', icon: Globe, desc: 'Global supply keyword ranks & international indexing strategies' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-widest text-growth uppercase mb-3 block">
            ABOUT MY BACKGROUND
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
            Driven by Organic Traffic. Proven by Real Rankings.
          </h2>
          <div className="w-16 h-1 bg-growth mt-6 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Visual Profile Placeholder (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Custom Interactive Avatar / Branding Card */}
            <div className="relative rounded-3xl overflow-hidden bg-dark-card border border-dark-border p-8 group hover:border-growth/30 transition-all duration-300">
              
              {/* Background gradient line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-growth to-blue-500" />
              
              {/* Profile Image/Avatar container */}
              <div className="relative w-28 h-28 rounded-2xl bg-[#1C232B] flex items-center justify-center border border-white/5 mb-6 overflow-hidden group-hover:border-growth/20 transition-all">
                <img
                  src="https://lh3.googleusercontent.com/d/16rxbX3CU6nOddxaeXjmyXyhdt7qLWaek"
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Visual SEO Graph Overlay */}
                <div className="absolute bottom-1 right-1 bg-growth/10 backdrop-blur-sm border border-growth/20 rounded px-1.5 py-0.5 flex items-center gap-0.5 z-10">
                  <span className="text-[8px] font-mono font-bold text-growth">SEO</span>
                </div>
              </div>

              {/* Bio Meta details */}
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-growth transition-colors">
                {personalInfo.name}
              </h3>
              <p className="text-sm font-mono text-gray-400 mt-1 mb-4">
                {personalInfo.title}
              </p>

              <div className="space-y-3.5 border-t border-white/5 pt-5 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-growth/70" />
                  <span>3+ Years Professional SEO Freelancer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-growth/70" />
                  <span>Available for Independent Consulting</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-4 h-4 text-growth/70" />
                  <span>AravindSubramanian.com</span>
                </div>
              </div>


            </div>

            {/* Quick trust certificate callout */}
            <div className="rounded-2xl bg-growth/5 border border-growth/10 p-6 flex items-start gap-4">
              <Award className="w-6 h-6 text-growth shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                  Conversion-Focused
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  My strategies are tailored to generate actual sales leads, product trials, and phone consultations, not just arbitrary session numbers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Biography & Industries (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Meet Your Organic Growth Partner
              </h3>
              <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                {personalInfo.bio.main}
              </p>
              <p className="text-base text-gray-400 font-light leading-relaxed">
                {personalInfo.bio.description}
              </p>
            </div>

            {/* Industry expertise list - Infinite Auto-scroller */}
            <div className="w-full overflow-hidden mt-2">
              <h4 className="text-sm font-mono tracking-widest text-gray-400 uppercase mb-5">
                INDUSTRY EXPERIENCE
              </h4>
              
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] py-2">
                <div className="animate-marquee-slow flex gap-4">
                  {[...industries, ...industries].map((ind, idx) => {
                    const IconComponent = ind.icon;
                    return (
                      <div
                        key={`${ind.name}-${idx}`}
                        className="p-5 rounded-2xl bg-dark-card border border-dark-border flex items-start gap-4 hover:border-growth/30 transition-all duration-300 w-[290px] md:w-[320px] shrink-0 hover:bg-[#14181E]"
                      >
                        <div className="w-10 h-10 rounded-xl bg-growth/10 flex items-center justify-center shrink-0 border border-growth/10 text-growth">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <h5 className="font-display font-semibold text-white text-sm truncate">
                            {ind.name}
                          </h5>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                            {ind.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
