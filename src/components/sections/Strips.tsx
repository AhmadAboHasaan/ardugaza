import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { founderStrip, pages, trustStrip } from '@/content/project';
/** Two short closing notes on the home page: the paper trail, and the person behind it. */
export function TrustStrip() {
  return (
    <Section className="strips" aria-label="Trust and founder">
      <article className="strip" aria-labelledby="trust-title">
        <Icon name="shield" />
        <h2 id="trust-title">
          {trustStrip.title[0]} {trustStrip.title[1]}
        </h2>
        <p>{trustStrip.body}</p>
        <LinkButton href={`${pages.support.href}#safeguarded`} variant="text">
          {trustStrip.more}
        </LinkButton>
      </article>
      <article className="strip" aria-labelledby="founder-title">
        <Icon name="user" />
        <h2 id="founder-title">
          {founderStrip.title[0]} {founderStrip.title[1]}
        </h2>
        <p>{founderStrip.body}</p>
        <LinkButton href={pages.about.href} variant="text">
          {founderStrip.more}
        </LinkButton>
      </article>
    </Section>
  );
}
