import { Section } from '@/components/ui/Section';
import { tracks } from '@/content/project';
export function Programmes() {
  return (
    <Section className="programmes" aria-labelledby="programme-title">
      <div className="section-heading">
        <h2 id="programme-title">
          A seat opens
          <br />
          more than a laptop.
        </h2>
        <p className="lead">
          Space is the beginning.
          <br />A professional future is the purpose.
        </p>
      </div>
      <div className="track-list">
        {tracks.map((track) => (
          <article key={track.name}>
            <h3>{track.name}</h3>
            <p>{track.text}</p>
          </article>
        ))}
      </div>
      <div className="programme-note">
        <p>
          Partner-delivered courses are planned in recurring cycles, with
          certificates issued by the partner. No partnership is presented as
          agreed before it is signed.
        </p>
        <p>
          Live professional sessions and mentorship connect the room to
          experience beyond it. Paid desks for freelancers and paid courses
          outside supported categories are intended to help cover running costs.
        </p>
      </div>
    </Section>
  );
}
