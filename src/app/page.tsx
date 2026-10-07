import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Statement } from '@/components/sections/Statement';
import { Pillars } from '@/components/sections/Pillars';
import { Changes } from '@/components/sections/Changes';
import { Direction } from '@/components/sections/Direction';
import { Weight } from '@/components/sections/Weight';
import { Ways } from '@/components/sections/Ways';
import { FounderStrip, TrustStrip } from '@/components/sections/Strips';
import { CtaBand } from '@/components/ui/CtaBand';
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};
export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Pillars />
      <Changes />
      <Direction />
      <Weight />
      <Ways />
      <TrustStrip />
      <FounderStrip />
      <CtaBand />
    </>
  );
}
