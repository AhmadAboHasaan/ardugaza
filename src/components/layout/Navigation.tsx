'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { LinkButton } from '@/components/ui/LinkButton';
import { Brand } from '@/components/layout/Brand';
import { ctas, nav, pages } from '@/content/project';
import { integrations } from '@/data/integrations';
export function Navigation() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const giving = integrations.giving;
  const cta =
    giving.status === 'live'
      ? { href: giving.url, label: ctas.give, external: true }
      : {
          href: pages.support.href,
          label: pages.support.title,
          external: false,
        };
  const current = (href: string) => (pathname === href ? 'page' : undefined);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <div className="site-header-inner">
        <Link href="/" className="wordmark" aria-label="Ardú home">
          <Brand height={40} />
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={current(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <LinkButton
          href={cta.href}
          className="header-cta"
          {...(cta.external ? { target: '_blank', rel: 'noopener' } : {})}
        >
          {cta.label}
        </LinkButton>
        <button
          ref={trigger}
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {[...nav, pages.contact].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={current(link.href)}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        {cta.external ? (
          <a
            href={cta.href}
            className="mobile-nav__cta"
            onClick={() => setOpen(false)}
            target="_blank"
            rel="noopener"
          >
            {cta.label}
          </a>
        ) : (
          <Link
            href={cta.href}
            className="mobile-nav__cta"
            onClick={() => setOpen(false)}
          >
            {cta.label}
          </Link>
        )}
      </nav>
    </header>
  );
}
