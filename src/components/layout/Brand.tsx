/* eslint-disable @next/next/no-img-element */
type Props = { tone?: 'teal' | 'cream'; height?: number; className?: string };
/** The Ardú lockup (rising-stroke mark + wordmark) as a static SVG asset. */
export function Brand({ tone = 'teal', height = 46, className = '' }: Props) {
  const src =
    tone === 'cream'
      ? '/brand/ardu-logo-horizontal-cream-on-deep.svg'
      : '/brand/ardu-logo-horizontal-teal.svg';
  return (
    <img
      src={src}
      alt="Ardú"
      height={height}
      width={Math.round(height * 3.0)}
      className={className}
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}
