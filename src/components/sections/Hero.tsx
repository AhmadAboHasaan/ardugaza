import { LinkButton } from '@/components/ui/LinkButton';
import { SeatMatrix } from '@/components/content/SeatMatrix';
import { MediaFrame } from '@/components/content/MediaFrame';
import { integrations } from '@/data/integrations';
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Talent is here.
          <br />
          Make room
          <br />
          for its <em>future.</em>
        </h1>
        <p>
          A reliable place to learn, work and build a career.
          <br className="desktop-break" /> Built in Gaza, for Gaza.
        </p>
        <div className="actions">
          <LinkButton href="#support">Fund the next seat</LinkButton>
          <LinkButton href="#plan" variant="text">
            See the plan
          </LinkButton>
        </div>
        <p className="hero-giving-note">
          Support currently begins with a conversation with Ahmed.
        </p>
      </div>
      <MediaFrame
        image={integrations.heroImage}
        priority
        caption="A seat is the beginning. Power, connection and opportunity make it work."
        className="hero-media"
        fallback={
          <div className="seat-poster">
            <div className="poster-top">
              <span>Gaza City, Palestine</span>
              <span>A place to begin</span>
            </div>
            <div className="poster-title">
              Room for
              <br />
              possibility.
            </div>
            <SeatMatrix animated />
            <div className="poster-bottom">
              <span>
                <strong>200</strong> planned seats / session
              </span>
              <span className="next-seat-key">The next seat</span>
            </div>
            <p className="poster-note">
              Schematic · not a floor plan. Opening subject to structural
              sign-off.
            </p>
          </div>
        }
      />
      <div className="hero-foot">
        <span>One place. Many futures.</span>
        <span>Explore the plan below</span>
      </div>
    </section>
  );
}
