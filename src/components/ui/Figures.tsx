import { Icon, type IconName } from '@/components/ui/Icon';
import { CountUp } from '@/components/motion/CountUp';
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
/** A row of headline figures, each with its icon and label, counting up as they arrive. */
export function Figures({ figures, className = '', tone = 'paper' }: Props) {
  return (
    <dl className={`figures figures--${tone} ${className}`}>
      {figures.map((f, i) => (
        <div
          key={f.label}
          className="figure"
          data-reveal
          style={{ ['--i' as string]: i }}
        >
          {f.icon && (
            <Icon name={f.icon} tone={tone === 'ink' ? 'cream' : 'teal'} />
          )}
          <dt>
            <CountUp value={f.value} />
          </dt>
          <dd>{f.label}</dd>
        </div>
      ))}
    </dl>
  );
}
