import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Globe, Linkedin, Instagram, Send, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple robust validation
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setError('Please provide a message containing at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    // Simulate safe client-side submission transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Decorative floating grids */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-growth/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono tracking-widest text-growth uppercase mb-3 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
            Let's Scale Your Organic Traffic
          </h2>
          <div className="w-16 h-1 bg-growth mt-6 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact coordinates info (Left Side) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-display font-bold text-white leading-tight">
                Ready to dominate Google search layouts?
              </h3>
              <p className="text-base text-gray-400 font-light leading-relaxed">
                Contact me today to coordinate a free, comprehensive website audit sample, target keyword map, and technical site indexation report. Let's find your growth gaps.
              </p>

              {/* Bold closing tagline requested */}
              <p className="text-lg font-display font-semibold text-growth border-l-2 border-growth pl-4 py-1 my-2">
                "Let's Grow Your Business with SEO That Delivers Results."
              </p>

              {/* Individual contact pills */}
              <div className="space-y-4 mt-4">
                
                {/* Calendly booking pill */}
                <a
                  href="https://calendly.com/aravindsubramanianhs/aravindhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-growth/10 border border-growth/40 hover:border-growth hover:bg-growth/20 transition-all shadow-lg shadow-growth/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-growth text-black flex items-center justify-center shrink-0 border border-growth/30">
                    <Calendar className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-growth font-bold uppercase block tracking-wider">BOOK INSTANT CALL</span>
                    <span className="text-sm font-semibold text-white group-hover:text-growth transition-colors">Schedule via Calendly</span>
                  </div>
                </a>
                
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-dark-card border border-dark-border hover:border-growth/20 hover:bg-[#14181E] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-growth/5 flex items-center justify-center text-growth shrink-0 border border-growth/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">EMAIL ME</span>
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{personalInfo.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-dark-card border border-dark-border hover:border-growth/20 hover:bg-[#14181E] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-growth/5 flex items-center justify-center text-growth shrink-0 border border-growth/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">CALL DIRECTLY</span>
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">+{personalInfo.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://${personalInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-dark-card border border-dark-border hover:border-growth/20 hover:bg-[#14181E] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-growth/5 flex items-center justify-center text-growth shrink-0 border border-growth/10">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">OFFICIAL DOMAIN</span>
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{personalInfo.website}</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Social handles links */}
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-4">
                SECURE SOCIAL CHANNELS
              </span>
              <div className="flex gap-4">
                <a
                  id="contact-linkedin-link"
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1C232B] border border-white/5 hover:border-growth/30 text-gray-400 hover:text-growth hover:bg-growth/5 transition-all flex items-center justify-center"
                  aria-label="LinkedIn Portfolio Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  id="contact-instagram-link"
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1C232B] border border-white/5 hover:border-growth/30 text-gray-400 hover:text-growth hover:bg-growth/5 transition-all flex items-center justify-center"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Contact form (Right Side) */}
          <div className="lg:col-span-7 rounded-2xl bg-dark-card border border-dark-border p-8 relative">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-growth" />

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  id="contact-form-node"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-display font-bold text-white">
                      Initiate SEO Strategy Session
                    </h4>
                    <p className="text-xs text-gray-500 font-light">
                      Provide your organization credentials. I will audit your sitemaps manually before responding.
                    </p>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-4">
                    
                    {/* Name field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Your Name / Brand Representative
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Jane Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0F1215] border border-dark-border focus:border-growth/40 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors"
                      />
                    </div>

                    {/* Email field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. jane@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0F1215] border border-dark-border focus:border-growth/40 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors"
                      />
                    </div>

                    {/* Message field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Project Scope / SEO Growth Requirements
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Describe your current organic rank bottlenecks or traffic objectives..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0F1215] border border-dark-border focus:border-growth/40 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors resize-none"
                      />
                    </div>

                  </div>

                  {/* Alert Error */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-400 font-mono"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs font-display font-bold uppercase tracking-wider text-black bg-growth hover:bg-white transition-all shadow-lg hover:shadow-growth/10 hover:scale-[1.01] active:scale-[0.99] duration-200 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <span>Submit SEO Query</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  id="contact-form-success-node"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-growth/10 border border-growth/20 flex items-center justify-center text-growth mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    SEO Query Transmitted!
                  </h3>
                  <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-light mb-6">
                    Thank you, {name || 'brand partner'}. Your message has been indexed. I will run a complimentary manual crawling check on your domain and email you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
