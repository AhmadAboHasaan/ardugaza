type Props = { title: string; lead: string };
/** Opening block of every inner page: the headline and one lead paragraph. */
export function PageHero({ title, lead }: Props) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="page-hero-inner">
        <h1 id="page-title">{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}
