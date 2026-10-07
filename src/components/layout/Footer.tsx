import Link from 'next/link';
import { Brand } from '@/components/layout/Brand';
import { footer, project } from '@/content/project';
import { contact, integrations } from '@/data/integrations';
export function Footer() {
  return (
    <footer className="site-footer">
      <Link className="wordmark" href="/" aria-label="Ardú home">
        <Brand height={36} />
      </Link>
      <p>{footer.tagline}</p>
      <nav aria-label="Footer" className="footer-links">
        <Link href="/plan">Full plan</Link>
        <a href="/ardu-project-summary.pdf">Project summary (PDF)</a>
        {integrations.linkedinPage.status === 'ready' ? (
          <a href={integrations.linkedinPage.value} rel="noopener" target="_blank">
            Ardú on LinkedIn
          </a>
        ) : (
          <a href={project.founderLinkedin} rel="noopener" target="_blank">
            Ahmed on LinkedIn
          </a>
        )}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </nav>
      <span>{footer.figures}</span>
    </footer>
  );
}
