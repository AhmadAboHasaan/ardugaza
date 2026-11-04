'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Item = { id: string; label: string };
type Props = {
  /** "On this page" */
  label: string;
  items: readonly Item[];
  /** A call to action held at the end of the bar: "Fund this project". */
  action?: { href: string; text: string };
};

/**
 * The sections of a long page, held under the header as the page scrolls,
 * with the one being read marked as it passes. On narrow screens it scrolls
 * sideways and keeps the current section in view.
 */
export function SectionNav({ label, items, action }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const seen = new Map<string, boolean>();
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          seen.set(entry.target.id, entry.isIntersecting);
        const current = items.find((item) => seen.get(item.id));
        if (current) setActive(current.id);
      },
      { rootMargin: '-30% 0px -64% 0px' },
    );
    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const strip = list.current;
    const link = strip?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!strip || !link || strip.scrollWidth <= strip.clientWidth) return;
    const left = link.offsetLeft - strip.clientWidth / 2 + link.offsetWidth / 2;
    strip.scrollTo({
      left,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  }, [active]);

  return (
    <nav className="section-nav" aria-label={label}>
      <div className="section-nav-inner">
        <ul ref={list}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-id={item.id}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {action && (
          <a className="section-nav-action" href={action.href}>
            {action.text}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        )}
      </div>
    </nav>
  );
}
