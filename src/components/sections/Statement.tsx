import { Figures } from '@/components/ui/Figures';
import { statement } from '@/content/project';
/** The idea in one breath, with the four figures a visitor should carry away. */
export function Statement() {
  return (
    <section className="statement" aria-labelledby="statement-title">
      <div className="statement-inner">
        <h2 id="statement-title">
          {statement.title[0]} {statement.title[1]}
        </h2>
        <p className="lead">{statement.body}</p>
      </div>
      <Figures figures={statement.figures} className="statement-figures" />
    </section>
  );
}
