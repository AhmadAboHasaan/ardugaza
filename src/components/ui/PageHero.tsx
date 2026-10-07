type Props = { eyebrow: string; title: string; lead: string };
/** Opening block of every inner page: eyebrow, headline, one lead paragraph. */
export function PageHero({ eyebrow, title, lead }: Props) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="page-title">{title}</h1>
      <p className="lead">{lead}</p>
    </section>
  );
}
