'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * The site's motion, in one place and after hydration, so nothing is ever
 * hidden from someone whose scripts do not run:
 *
 * - `[data-reveal]` elements rise into place as they scroll into view
 *   (`.in`). Those already on screen when a page first opens are marked
 *   `.seen` and shown at once, never hidden.
 * - `[data-spotlight]` surfaces carry a soft glow that follows the pointer.
 *
 * With reduced motion preferred, nothing moves and everything is shown.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches || !('IntersectionObserver' in window)) {
      root.classList.remove('motion');
      return;
    }
    const watched = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
          watched.delete(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    const scan = () => {
      const first = !root.classList.contains('motion');
      const fold = window.innerHeight * 0.94;
      for (const el of document.querySelectorAll(
        '[data-reveal]:not(.in):not(.seen)',
      )) {
        if (watched.has(el)) continue;
        if (first && el.getBoundingClientRect().top < fold) {
          el.classList.add('seen');
          continue;
        }
        watched.add(el);
        observer.observe(el);
      }
    };
    scan();
    root.classList.add('motion');
    // Content that mounts later (a filtered list, a panel) is picked up too.
    let frame = 0;
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
      watched.clear();
    };
  }, [pathname]);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduce.matches) return;
    const move = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest?.(
        '[data-spotlight]',
      ) as HTMLElement | null;
      if (!target) return;
      const box = target.getBoundingClientRect();
      target.style.setProperty('--mx', `${event.clientX - box.left}px`);
      target.style.setProperty('--my', `${event.clientY - box.top}px`);
    };
    document.addEventListener('pointermove', move, { passive: true });
    return () => document.removeEventListener('pointermove', move);
  }, []);

  return null;
}
