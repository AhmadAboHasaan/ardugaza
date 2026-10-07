import { LinkButton } from '@/components/ui/LinkButton';
import { SeatMatrix } from '@/components/content/SeatMatrix';
import { MediaFrame } from '@/components/content/MediaFrame';
import { integrations } from '@/data/integrations';
import { hero } from '@/content/project';
function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
export function Hero() {
  const giving = integrations.giving;
  const live = giving.status === 'live';
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Under the rubble of a home in Gaza City, a room for <em>200 young people a day.</em>
        </h1>
        <p>{hero.lead}</p>
        <div className="actions">
          {live ? (
            <>
              <LinkButton href={giving.url} target="_blank" rel="noopener">
                Fund the first stage
              </LinkButton>
              <LinkButton href="#stages" variant="text">
                See the stages
              </LinkButton>
            </>
          ) : (
            <>
              <LinkButton href="#stages">See the stages</LinkButton>
              <LinkButton href="#support" variant="text">
                Get the launch update
              </LinkButton>
            </>
          )}
        </div>
        <p className="hero-giving-note">
          {live
            ? `${formatDate(giving.opensOn)} · ${hero.statusLive}`
            : `${hero.statusPending} ${formatDate(giving.opensOn)}.`}
        </p>
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
              <span className="next-seat-key">The next seat</span>
            </div>
            <p className="poster-note">{hero.poster.note}</p>
          </div>
        }
      />
      <div className="hero-foot">
        <span>{hero.foot[0]}</span>
        <span>{hero.foot[1]}</span>
      </div>
    </section>
  );
}
