import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import { useLanguage } from '@/i18n';

const Index = () => {
  const { t } = useLanguage();

  // Keep the tab title and meta description in sync with the active language.
  useEffect(() => {
    document.title = t.meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', t.meta.description);
    }
  }, [t]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
