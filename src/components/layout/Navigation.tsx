'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { LinkButton } from '@/components/ui/LinkButton';
import { Brand } from '@/components/layout/Brand';
import { nav } from '@/content/project';
import { integrations } from '@/data/integrations';
export function Navigation() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const giving = integrations.giving;
  const cta =
    giving.status === 'live'
      ? { href: giving.url, label: 'Fund a stage', external: true }
      : { href: '/#stages', label: 'See the stages', external: false };
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
      <Link href="/" className="wordmark" aria-label="Ardú home">
        <Brand />
      </Link>
      <nav aria-label="Main navigation" className="desktop-nav">
        {nav.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
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
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {nav.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href={cta.href}
          onClick={() => setOpen(false)}
          {...(cta.external ? { target: '_blank', rel: 'noopener' } : {})}
        >
          {cta.label}
        </a>
      </nav>
    </header>
  );
}
