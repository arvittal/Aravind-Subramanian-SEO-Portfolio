import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import RankingsShowcase from './components/RankingsShowcase';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import ContentPortfolio from './components/ContentPortfolio';
import Work from './components/Work';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'clients', 'rankings', 'content-portfolio', 'skills', 'achievements', 'case-studies', 'testimonials', 'work', 'tools', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120; // offset of header and buffer
      
      // Special case: bottom of page targets contact section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Execute on initial render
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-gray-200 antialiased font-sans flex flex-col selection:bg-growth/20 selection:text-growth">
      
      {/* Sticky header tracking active scrollspy section */}
      <Header activeSection={activeSection} />

      {/* Main Single Page structural blocks */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Clients />
        <RankingsShowcase />
        <ContentPortfolio />
        <Skills />
        <Achievements />
        <CaseStudies />
        <Testimonials />
        <Work />
        <Tools />
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Floating Scroll To Top Indicator */}
      <BackToTop />
    </div>
  );
}
