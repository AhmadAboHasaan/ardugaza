import { BookOpen, Briefcase, Users, Zap } from 'lucide-react';
import { hero } from '@/content/project';
const stops = [
  {
    x: 151.5,
    y: 438.5,
    Glyph: Users,
    label: { x: 186, y: 444, anchor: 'start' },
  },
  {
    x: 286.1,
    y: 334.9,
    Glyph: BookOpen,
    label: { x: 320, y: 341, anchor: 'start' },
  },
  {
    x: 392.3,
    y: 219.6,
    Glyph: Briefcase,
    label: { x: 426, y: 226, anchor: 'start' },
  },
  { x: 523.2, y: 133, Glyph: Zap, label: { x: 498, y: 108, anchor: 'end' } },
] as const;
/**
 * The road Ardú opens: a single stroke rising from the rubble to the ambition,
 * with the four things Ardú gives as stops along it. Drawn once on load.
 */
export function Road() {
  return (
    <figure className="road">
      <svg
        viewBox="0 0 640 520"
        className="road-svg"
        aria-hidden="true"
        focusable="false"
      >
        <g className="road-rubble">
          <polygon
            className="rubble-b"
            points="12,478 54,452 98,462 108,490 70,500 24,496"
          />
          <polygon
            className="rubble-a"
            points="60,438 104,426 134,444 128,470 92,476 66,462"
          />
          <polygon
            className="rubble-b"
            points="118,464 162,452 190,470 182,494 140,498 116,484"
          />
          <polygon
            className="rubble-a"
            points="30,440 62,428 78,446 58,460 36,456"
          />
          <polygon
            className="rubble-a"
            points="150,432 180,428 194,446 172,454 152,448"
          />
          <polygon
            className="rubble-b"
            points="96,496 128,488 146,502 118,512 98,508"
          />
          <polygon
            className="rubble-a"
            points="196,482 224,478 232,494 208,500"
          />
          <polygon className="rubble-b" points="6,456 26,448 32,464 12,470" />
        </g>
        <path
          className="road-shadow"
          d="M40 460 C230 460 300 300 380 230 S570 120 610 60"
        />
        <path
          className="road-line"
          d="M40 460 C230 460 300 300 380 230 S570 120 610 60"
          pathLength={1}
        />
        <path
          className="road-tip"
          d="M548 103 C566 90 586 76 610 60"
          pathLength={1}
        />
        {stops.map((stop, i) => (
          <g
            key={stop.label.x}
            className="road-node"
            style={{ ['--d' as string]: `${0.9 + i * 0.22}s` }}
          >
            <circle cx={stop.x} cy={stop.y} r={23} />
            <stop.Glyph
              x={stop.x - 11}
              y={stop.y - 11}
              width={22}
              height={22}
              strokeWidth={1.75}
            />
            <text
              x={stop.label.x}
              y={stop.label.y}
              textAnchor={stop.label.anchor}
            >
              {hero.road.stops[i]}
            </text>
          </g>
        ))}
        <g className="road-end" style={{ ['--d' as string]: '1.9s' }}>
          <circle cx={610} cy={60} r={30} className="road-glow" />
          <circle cx={610} cy={60} r={12} className="road-dot" />
          <text x={596} y={36} textAnchor="end">
            {hero.road.end}
          </text>
        </g>
        <text x={40} y={512} className="road-start">
          {hero.road.start}
        </text>
      </svg>
      <figcaption>{hero.road.caption}</figcaption>
    </figure>
  );
}
