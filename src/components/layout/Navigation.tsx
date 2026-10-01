'use client';
import { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { LinkButton } from '@/components/ui/LinkButton';
const links = [
  { href: '#place', label: 'The place' },
  { href: '#plan', label: 'The plan' },
  { href: '#accountability', label: 'Accountability' },
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
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
      <a href="#top" className="wordmark" aria-label="Ardú home">
        ardú
        <span className="brand-mark" aria-hidden="true" />
      </a>
      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <LinkButton href="#support" className="header-cta">
        Fund the next seat
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
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#support" onClick={() => setOpen(false)}>
          Fund the next seat
        </a>
      </nav>
    </header>
  );
}
