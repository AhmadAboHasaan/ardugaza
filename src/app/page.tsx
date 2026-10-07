import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Story } from '@/components/sections/Story';
import { Stages } from '@/components/sections/Stages';
import { Impact } from '@/components/sections/Impact';
import { Energy } from '@/components/sections/Energy';
import { Trust } from '@/components/sections/Trust';
import { Who } from '@/components/sections/Who';
import { Doors } from '@/components/sections/Doors';
export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Story />
        <Stages />
        <Impact />
        <Energy />
        <Trust />
        <Who />
        <Doors />
      </main>
      <Footer />
    </>
  );
}
