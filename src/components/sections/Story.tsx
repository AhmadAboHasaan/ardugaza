import { Section } from '@/components/ui/Section';
import { MediaFrame } from '@/components/content/MediaFrame';
import { integrations } from '@/data/integrations';
import { why, place } from '@/content/project';
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
            {why.lead[0]}
            <br />
            {why.lead[1]}
          </p>
          <p>{why.body}</p>
          <div className="name-note">
            <strong>Ardú</strong>
            <span>{why.nameNote}</span>
          </div>
        </div>
      </Section>
      <Section id="place" className="place" aria-labelledby="place-title">
        <div className="place-copy">
          <h2 id="place-title">
            From the rubble,
            <br />a room.
          </h2>
          <p>{place.body1}</p>
          <p>{place.body2}</p>
          <p className="small">{place.small}</p>
        </div>
        <MediaFrame
          image={integrations.hallImage}
          caption={place.caption}
          fallback={
            <div className="hall-placeholder">
              <span className="hall-measure">{place.placeholder.measure}</span>
              <div className="hall-frame" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>{place.placeholder.label}</span>
              <small>{place.placeholder.note}</small>
            </div>
          }
        />
      </Section>
    </>
  );
}
