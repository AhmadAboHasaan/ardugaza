import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { CtaBand } from '@/components/ui/CtaBand';
import { contact, integrations } from '@/data/integrations';
import { contactPage, ctas, pages, project } from '@/content/project';
export const metadata: Metadata = {
  title: pages.contact.title,
  description: contactPage.hero.lead,
  alternates: { canonical: pages.contact.href },
  openGraph: {
    url: pages.contact.href,
    title: `${pages.contact.title} · Ardú`,
    description: contactPage.hero.lead,
  },
};
export default function ContactPage() {
  const linkedin =
    integrations.linkedinPage.status === 'ready'
      ? integrations.linkedinPage.value
      : project.founderLinkedin;
  return (
    <>
      <PageHero {...contactPage.hero} />
      <Section className="contact" aria-labelledby="address-title">
        <div className="contact-address panel">
          <h2 id="address-title" className="visually-hidden">
            Email
          </h2>
          <Icon name="mail" />
          <a className="contact-mail" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <LinkButton
            href={linkedin}
            variant="outline"
            target="_blank"
            rel="noopener"
          >
            {contactPage.linkedin}
          </LinkButton>
        </div>
        <ul className="contact-routes">
          {contactPage.routes.map((route) => (
            <li key={route.title} className="card">
              <Icon name={route.icon} />
              <h3>{route.title}</h3>
              <p>{route.text}</p>
              <LinkButton
                href={contact.mailto(ctas.mailSubjects[route.subject])}
                variant="text"
                aria-label={`Write to us: ${route.title}`}
              >
                Write to us
              </LinkButton>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
