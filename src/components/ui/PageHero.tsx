import type { ReactNode } from 'react';
type Props = {
  title: string;
  lead: string;
  /** A short line above the headline: "Project 01". */
  kicker?: string;
  /** A status tag beside the kicker, on project pages. */
  tag?: ReactNode;
};
/** Opening block of every inner page: the headline and one lead paragraph. */
export function PageHero({ title, lead, kicker, tag }: Props) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="page-hero-inner">
        {(kicker || tag) && (
          <p className="page-kicker">
            {kicker && <span>{kicker}</span>}
            {tag}
          </p>
        )}
        <h1 id="page-title">{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}
