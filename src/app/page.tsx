import { Hero } from '@/components/Sections/Hero';
import { Skills } from '@/components/Sections/Skills';
import { About } from '@/components/Sections/About';
import { Slider } from '@/components/Sections/Slider';
import { Contact } from '@/components/Sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Slider />
      <Contact />
    </main>
  );
}
