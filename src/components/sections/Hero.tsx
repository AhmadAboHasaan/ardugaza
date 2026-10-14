import { LinkButton } from '@/components/ui/LinkButton';
import { Road } from '@/components/content/Road';
import { integrations } from '@/data/integrations';
import { ctas, hero, pages } from '@/content/project';
export function Hero() {
  const giving = integrations.giving;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title">
            {hero.titleStart}
            <em>{hero.titleEmphasis}</em>
          </h1>
          <p>{hero.lead}</p>
          <div className="actions">
            {giving.status === 'live' ? (
              <LinkButton
                href={giving.url}
                variant="light"
                target="_blank"
                rel="noopener"
              >
                {ctas.give}
              </LinkButton>
            ) : (
              <LinkButton href={pages.support.href} variant="light">
                {pages.support.title}
              </LinkButton>
            )}
            <LinkButton href={pages.partners.href} variant="outline">
              {ctas.partner}
            </LinkButton>
          </div>
        </div>
        <Road />
      </div>
    </section>
  );
}
