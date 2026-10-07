type Figure = { readonly value: string; readonly label: string };
type Props = {
  figures: readonly Figure[];
  className?: string;
  tone?: 'paper' | 'ink';
};
/** A row of headline figures with their labels. */
export function Figures({ figures, className = '', tone = 'paper' }: Props) {
  return (
    <dl className={`figures figures--${tone} ${className}`}>
      {figures.map((f) => (
        <div key={f.label}>
          <dt>{f.value}</dt>
          <dd>{f.label}</dd>
        </div>
      ))}
    </dl>
  );
}
