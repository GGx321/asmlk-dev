import { Hero } from '@/components/sections/hero';
import { TechMarquee } from '@/components/sections/tech-marquee';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Process } from '@/components/sections/process';
import { Projects } from '@/components/sections/projects';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { CtaBanner } from '@/components/sections/cta-banner';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <CtaBanner textKey="afterAbout" />
      <Skills />
      <Process />
      <Projects />
      <Testimonials />
      <CtaBanner textKey="afterProjects" />
      <Faq />
      <Contact />
    </>
  );
}
