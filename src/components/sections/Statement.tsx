import { Figures } from '@/components/ui/Figures';
import { statement } from '@/content/project';
/** The dark statement band under the hero, with the four headline figures. */
export function Statement() {
  return (
    <section className="statement" aria-labelledby="statement-title">
      <div className="statement-inner">
        <h2 id="statement-title">
          {statement.title[0]}
          <br />
          <em>{statement.title[1]}</em>
        </h2>
        <p className="lead">{statement.body}</p>
      </div>
      <Figures
        figures={statement.figures}
        tone="ink"
        className="statement-figures"
      />
    </section>
  );
}
