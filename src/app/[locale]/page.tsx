import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Process } from '@/components/sections/process';
import { Projects } from '@/components/sections/projects';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { CtaBanner } from '@/components/sections/cta-banner';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CtaBanner textKey="afterAbout" />
      <Skills />
      <Process />
      <Projects />
      <CtaBanner textKey="afterProjects" />
      <Faq />
      <Contact />
    </>
  );
}
