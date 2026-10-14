import Link from 'next/link';
import { Brand } from '@/components/layout/Brand';
import { footer, nav, pages, project } from '@/content/project';
import { contact, integrations } from '@/data/integrations';
export function Footer() {
  const linkedin =
    integrations.linkedinPage.status === 'ready'
      ? { href: integrations.linkedinPage.value, label: 'Ardú on LinkedIn' }
      : { href: project.founderLinkedin, label: 'Ahmed on LinkedIn' };
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <Link className="wordmark" href="/" aria-label="Ardú home">
            <Brand tone="cream" height={40} />
          </Link>
          <p>{footer.tagline}</p>
        </div>
        <nav aria-label="Footer" className="footer-col">
          <h2>{footer.explore}</h2>
          {[...nav, pages.contact].map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-col">
          <h2>{footer.connect}</h2>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={linkedin.href} rel="noopener" target="_blank">
            {linkedin.label}
          </a>
        </div>
        <p className="footer-small">
          {footer.small} © {new Date().getFullYear()} Ardú.
        </p>
      </div>
    </footer>
  );
}
