import { LinkButton } from '@/components/ui/LinkButton';
import { SeatMatrix } from '@/components/content/SeatMatrix';
import { MediaFrame } from '@/components/content/MediaFrame';
import { integrations } from '@/data/integrations';
import { ctas, hero, pages } from '@/content/project';
export function Hero() {
  const giving = integrations.giving;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">
          {hero.titleStart}
          <em>{hero.titleEmphasis}</em>
        </h1>
        <p>{hero.lead}</p>
        <div className="actions">
          {giving.status === 'live' ? (
            <LinkButton href={giving.url} target="_blank" rel="noopener">
              {ctas.give}
            </LinkButton>
          ) : (
            <LinkButton href={pages.support.href}>
              {pages.support.title}
            </LinkButton>
          )}
          <LinkButton href={pages.partners.href} variant="text">
            {ctas.partner}
          </LinkButton>
        </div>
      </div>
      <MediaFrame
        image={integrations.heroImage}
        priority
        caption={hero.caption}
        className="hero-media"
        fallback={
          <div className="seat-poster">
            <div className="poster-top">
              <span>{hero.poster.top[0]}</span>
              <span>{hero.poster.top[1]}</span>
            </div>
            <div className="poster-title">
              {hero.poster.title[0]}
              <br />
              {hero.poster.title[1]}
            </div>
            <SeatMatrix count={hero.poster.seats} animated />
            <div className="poster-bottom">
              <span>
                <strong>{hero.poster.seats}</strong> {hero.poster.bottom}
              </span>
              <span className="next-seat-key">{hero.poster.key}</span>
            </div>
          </div>
        }
      />
    </section>
  );
}
