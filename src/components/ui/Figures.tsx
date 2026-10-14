import { Icon, type IconName } from '@/components/ui/Icon';
type Figure = {
  readonly icon?: IconName;
  readonly value: string;
  readonly label: string;
};
type Props = {
  figures: readonly Figure[];
  className?: string;
  tone?: 'paper' | 'ink';
};
/** A row of headline figures, each with its icon and label. */
export function Figures({ figures, className = '', tone = 'paper' }: Props) {
  return (
    <dl className={`figures figures--${tone} ${className}`}>
      {figures.map((f) => (
        <div key={f.label} className="figure">
          {f.icon && (
            <Icon name={f.icon} tone={tone === 'ink' ? 'cream' : 'teal'} />
          )}
          <dt>{f.value}</dt>
          <dd>{f.label}</dd>
        </div>
      ))}
    </dl>
  );
}
