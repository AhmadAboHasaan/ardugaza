import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Proof } from '@/components/sections/Proof';
import { Organisation } from '@/components/sections/Organisation';
import { Projects } from '@/components/sections/Projects';
import { Pillars } from '@/components/sections/Pillars';
import { Changes } from '@/components/sections/Changes';
import { Ways } from '@/components/sections/Ways';
import { TrustStrip } from '@/components/sections/Strips';
import { CtaBand } from '@/components/ui/CtaBand';
import { giveAnchor } from '@/content/project';
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};
export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Organisation />
      <Projects />
      <Pillars />
      <Changes />
      <Ways />
      <TrustStrip />
      <CtaBand giveHref={giveAnchor.here} />
    </>
  );
}
