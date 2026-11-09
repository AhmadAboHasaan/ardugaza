'use client';
import { useEffect, useRef } from 'react';

type Parts = { prefix: string; target: number; suffix: string };

/**
 * "500 m²" becomes { "", 500, " m²" }. Figures that are not a single number
 * ("8 to 12", "50 + 50", "×2", "—") are left as they are.
 */
export function splitFigure(value: string): Parts | null {
  const match = /^(\D*?)(\d[\d,]*)(\D*)$/.exec(value);
  if (!match) return null;
  const target = Number(match[2].replace(/,/g, ''));
  if (!Number.isFinite(target) || target < 10) return null;
  return { prefix: match[1], target, suffix: match[3] };
}

const format = (n: number) => n.toLocaleString('en-GB');

/**
 * A figure that counts up from nothing as it scrolls into view. It renders
 * its final value on the server and for assistive technology; only the
 * visible copy moves, and only if it starts below the fold.
 */
export function CountUp({
  value,
  className = '',
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    const parts = splitFigure(value);
    if (!el || !parts) return;
    if (
      !('IntersectionObserver' in window) ||
      typeof window.matchMedia !== 'function' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) return;
    const { prefix, target, suffix } = parts;
    el.textContent = `${prefix}${format(0)}${suffix}`;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = Math.min(1800, 900 + target / 20);
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${prefix}${format(Math.round(target * eased))}${suffix}`;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value]);
  return (
    <span className={`count-up ${className}`}>
      <span aria-hidden="true" ref={ref}>
        {value}
      </span>
      <span className="visually-hidden">{value}</span>
    </span>
  );
}
