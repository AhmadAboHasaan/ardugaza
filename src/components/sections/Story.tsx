import { Section } from '@/components/ui/Section';
import { MediaFrame } from '@/components/content/MediaFrame';
import { integrations } from '@/data/integrations';
export function Story() {
  return (
    <>
      <Section className="idea" aria-labelledby="idea-title">
        <h2 id="idea-title">
          The missing piece
          <br />
          is rarely <em>ability.</em>
        </h2>
        <div className="idea-copy">
          <p className="lead">
            Sometimes it is a seat. A socket.
            <br />A connection that stays on.
          </p>
          <p>
            Young people in Gaza have the talent and ambition to build
            professional lives. Ardú is a plan to put the infrastructure around
            them: space to work, skills to grow and people who can open a door.
          </p>
          <p>
            Founder Ahmed Abuhassan is a self-taught developer in Gaza. His
            experience with unreliable power and connectivity helped shape this
            practical starting point.
          </p>
          <div className="name-note">
            <strong>Ardú</strong>
            <span>
              Irish for “a lifting, a raising up.”
              <br />A name for what we can build together.
            </span>
          </div>
        </div>
      </Section>
      <Section id="place" className="place" aria-labelledby="place-title">
        <div className="place-copy">
          <h2 id="place-title">
            A real place.
            <br />A possible future.
          </h2>
          <p>
            In central Gaza City, a roughly 500-square-metre hall is the
            physical starting point. The plan is to restore its damaged roof and
            walls and make it a reliable environment for learning and work.
          </p>
          <p>
            The first step is an engineer’s structural assessment. Restoration,
            equipment and opening capacity depend on that sign-off.
          </p>
          <p className="small">
            The hall is family property, intended for Ardú under a written use
            agreement at symbolic rent. The rent will enter the accounts once
            set.
          </p>
        </div>
        <MediaFrame
          image={integrations.hallImage}
          caption="Central Gaza City · approximately 500 m² · approved site photography to follow"
          fallback={
            <div className="hall-placeholder">
              <span className="hall-measure">500 m²</span>
              <div className="hall-frame" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>A foundation for learning & work</span>
              <small>Spatial study only · not an architectural plan</small>
            </div>
          }
        />
      </Section>
    </>
  );
}
