import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Vision } from '@/components/sections/Vision';
import { Pillars } from '@/components/sections/Pillars';
import { Changes } from '@/components/sections/Changes';
import { Direction } from '@/components/sections/Direction';
import { Weight } from '@/components/sections/Weight';
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
      <Vision />
      <Direction giveHref={giveAnchor.here} />
      <Pillars />
      <Changes />
      <Weight />
      <Ways />
      <TrustStrip />
      <CtaBand giveHref={giveAnchor.here} />
    </>
  );
}
