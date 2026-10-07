type Props = { count?: 100 | 200 | 500; animated?: boolean };
/** Decorative seat diagram. One mark per planned seat per shift; the filled mark is "the next seat". */
export function SeatMatrix({ count = 100, animated = false }: Props) {
  const next = Math.floor(count * 0.7) - 1;
  return (
    <div
      className={`seat-matrix ${animated ? 'seat-matrix--entrance' : ''}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={i === next ? 'seat seat--next' : 'seat'} />
      ))}
    </div>
  );
}
