'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Props = {
  /** "Ardú Space" */
  name: string;
  /** "Stage two, Light: funding now" */
  line: string;
  /** "Fund this project" */
  cta: string;
  /** The hero and the giving section: the bar steps aside while either is on screen. */
  heroId: string;
  fundId: string;
};

/**
 * On a phone, a project's way to give stays one thumb away: a bar at the
 * foot of the screen once the hero has scrolled off, out of the way again
 * when the giving section itself is on screen.
 */
export function FundBar({ name, line, cta, heroId, fundId }: Props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById(heroId);
    const fund = document.getElementById(fundId);
    if (!hero || !fund || !('IntersectionObserver' in window)) return;
    const visible = new Map<Element, boolean>([
      [hero, true],
      [fund, false],
    ]);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries)
        visible.set(entry.target, entry.isIntersecting);
      setShow(!visible.get(hero) && !visible.get(fund));
    });
    observer.observe(hero);
    observer.observe(fund);
    return () => observer.disconnect();
  }, [heroId, fundId]);
  return (
    <div className="fund-bar" data-show={show ? '' : undefined} inert={!show}>
      <div className="fund-bar-copy">
        <strong>{name}</strong>
        <span>{line}</span>
      </div>
      <a className="link-button link-button--light" href={`#${fundId}`}>
        {cta}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </div>
  );
}
