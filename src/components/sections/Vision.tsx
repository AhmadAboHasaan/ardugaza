import { vision } from '@/content/project';
/** The full size of Ardú, in the visitor's face, and the bridge to the four stages. */
export function Vision() {
  return (
    <section className="vision" aria-labelledby="vision-title">
      <div className="vision-inner">
        <div className="vision-figure" aria-hidden="true">
          <span className="vision-value">{vision.figure.value}</span>
          <span className="vision-label">{vision.figure.label}</span>
        </div>
        <div className="vision-copy">
          <h2 id="vision-title">{vision.title}</h2>
          <p className="lead">{vision.body}</p>
          <p className="vision-bridge">{vision.bridge}</p>
        </div>
      </div>
    </section>
  );
}
