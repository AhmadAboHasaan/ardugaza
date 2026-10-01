import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Story } from '@/components/sections/Story';
import { Impact } from '@/components/sections/Impact';
import { Programmes } from '@/components/sections/Programmes';
import { Energy } from '@/components/sections/Energy';
import { Funding } from '@/components/sections/Funding';
import { Accountability } from '@/components/sections/Accountability';
import { Founder } from '@/components/sections/Founder';
import { Roadmap } from '@/components/sections/Roadmap';
import { Support } from '@/components/sections/Support';
export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Story />
        <Impact />
        <Programmes />
        <Energy />
        <Funding />
        <Accountability />
        <Founder />
        <Roadmap />
        <Support />
      </main>
      <Footer />
    </>
  );
}
