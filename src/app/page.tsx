import { About } from '@/components/Sections/About';
import { Contact } from '@/components/Sections/Contact';
import { Hero } from '@/components/Sections/Hero';
import { Skills } from '@/components/Sections/Skills';
import { Slider } from '@/components/Sections/Slider';

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      {/* <About />
      <Slider />
      <Contact /> */}
    </main>
  );
}
