type Props = {
  items: readonly { q: string; a: string }[];
};
/**
 * Questions a giver asks before giving, each opening in place. Built on
 * `details`, so it works with a keyboard, a screen reader and no script.
 */
export function Faq({ items }: Props) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details
          key={item.q}
          className="faq-item"
          data-reveal
          style={{ ['--i' as string]: i }}
        >
          <summary>
            <span>{item.q}</span>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
