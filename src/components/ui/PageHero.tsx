import type { ReactNode } from 'react';
type Props = {
  title: string;
  lead: string;
  /** A short line above the headline: "Project 01". */
  kicker?: string;
  /** A status tag beside the kicker, on project pages. */
  tag?: ReactNode;
  /** A panel beside the headline: where a project stands and what it needs. */
  aside?: ReactNode;
};
/** Opening block of every inner page: the headline and one lead paragraph. */
export function PageHero({ title, lead, kicker, tag, aside }: Props) {
  return (
    <section
      className={`page-hero ${aside ? 'page-hero--split' : ''}`}
      aria-labelledby="page-title"
    >
      <div className="page-hero-inner">
        <div className="page-hero-copy">
          {(kicker || tag) && (
            <p className="page-kicker">
              {kicker && <span>{kicker}</span>}
              {tag}
            </p>
          )}
          <h1 id="page-title">{title}</h1>
          <p className="lead">{lead}</p>
        </div>
        {aside}
      </div>
    </section>
  );
}
