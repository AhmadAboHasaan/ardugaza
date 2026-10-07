import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { founderStrip, pages, trustStrip } from '@/content/project';
/** Two short closing strips on the home page: the paper trail, and the person behind it. */
export function TrustStrip() {
  return (
    <Section className="strip strip--trust" aria-labelledby="trust-title">
      <h2 id="trust-title">
        {trustStrip.title[0]}
        <br />
        {trustStrip.title[1]}
      </h2>
      <div>
        <p>{trustStrip.body}</p>
        <LinkButton href={`${pages.support.href}#safeguarded`} variant="text">
          {trustStrip.more}
        </LinkButton>
      </div>
    </Section>
  );
}
export function FounderStrip() {
  return (
    <Section className="strip strip--founder" aria-labelledby="founder-title">
      <h2 id="founder-title">
        {founderStrip.title[0]}
        <br />
        {founderStrip.title[1]}
      </h2>
      <div>
        <p>{founderStrip.body}</p>
        <LinkButton href={pages.about.href} variant="text">
          {founderStrip.more}
        </LinkButton>
      </div>
    </Section>
  );
}
