import { LinkButton } from '@/components/ui/LinkButton';
import { Road } from '@/components/content/Road';
import { ctas, giveAnchor, hero, pages } from '@/content/project';
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title">
            {hero.titleStart}
            <em>{hero.titleEmphasis}</em>
          </h1>
          <p>{hero.lead}</p>
          <p className="hero-tagline">{hero.tagline}</p>
          <div className="actions">
            <LinkButton href={giveAnchor.here} variant="light">
              {ctas.give}
            </LinkButton>
            <LinkButton href={pages.programmes.href} variant="outline">
              {ctas.programmes}
            </LinkButton>
          </div>
        </div>
        <Road />
      </div>
    </section>
  );
}
