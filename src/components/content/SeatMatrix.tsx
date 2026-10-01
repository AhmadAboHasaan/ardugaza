type Props = { count?: 200 | 500; animated?: boolean };
export function SeatMatrix({ count = 200, animated = false }: Props) {
  return (
    <div
      className={`seat-matrix ${animated ? 'seat-matrix--entrance' : ''}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={i === 139 ? 'seat seat--next' : 'seat'} />
      ))}
    </div>
  );
}
