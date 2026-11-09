import { ViewTransition } from 'react';
import { icons } from '@/components/ui/Icon';
import {
  resolveStages,
  stageState,
  type Project,
  type StageState,
} from '@/content/projects';

type Point = readonly [number, number];
const P0: Point = [40, 262];
const P1: Point = [190, 252];
const P2: Point = [292, 74];
const P3: Point = [446, 44];
const W = 480;
const H = 300;

const lerp = (a: Point, b: Point, t: number): Point => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
];
const f = (p: Point) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
type Curve = readonly [Point, Point, Point, Point];
const road: Curve = [P0, P1, P2, P3];

/** Split a cubic at `t` (de Casteljau): the part before and the part after. */
function split([a, b, c, d]: Curve, t: number): [Curve, Curve] {
  const ab = lerp(a, b, t);
  const bc = lerp(b, c, t);
  const cd = lerp(c, d, t);
  const abc = lerp(ab, bc, t);
  const bcd = lerp(bc, cd, t);
  const m = lerp(abc, bcd, t);
  return [
    [a, ab, abc, m],
    [m, bcd, cd, d],
  ];
}
/** The stretch of road between `from` and `to`, exactly on the curve. */
function stretch(from: number, to: number): Curve {
  const [head] = split(road, to);
  return from <= 0 ? head : split(head, from / to)[1];
}
const d = ([a, b, c, e]: Curve) => `M${f(a)} C${f(b)} ${f(c)} ${f(e)}`;
const at = (t: number) => split(road, t)[0][3];

const reached: StageState[] = ['done', 'live'];

type Props = {
  project: Project;
  /** The card's cover, or the large one on the programme's own page, with its stops named. */
  variant?: 'card' | 'hero';
};

/**
 * The cover of a programme until its photographs arrive: the rubble, the road
 * rising out of it to the programme's emblem, one stop for each stage (filled
 * with a check when funded, ringed and pulsing where funding is open now),
 * and a light travelling the stretch the open stage will cover. Drawn from
 * the same indicators as the bars, so the picture never runs ahead of them.
 * The card's cover becomes the page's cover when a visitor opens the
 * programme.
 */
export function ProjectCover({ project, variant = 'card' }: Props) {
  const stages = resolveStages(project);
  const stops = stages.map((stage, i) => {
    const t = (i + 1) / (stages.length + 1);
    const [x, y] = at(t).map((n) => Math.round(n * 10) / 10);
    return { stage, t, x, y };
  });
  const last = stops.filter((s) => reached.includes(s.stage.state)).pop();
  const open = stops.find((s) => s.stage.state === 'now');
  const Emblem = icons[project.icon];
  const travelled = last ? d(stretch(0, last.t)) : null;
  const ahead = open ? d(stretch(last?.t ?? 0, open.t)) : null;
  return (
    <ViewTransition
      name={`project-cover-${project.slug}`}
      share="morph"
      default="none"
    >
      <div
        className={`project-cover project-cover--${variant}`}
        aria-hidden="true"
      >
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax meet">
          <g className="cover-rubble">
            <polygon
              className="cover-rubble-a"
              points="0,300 0,236 34,222 58,240 64,300"
            />
            <polygon
              className="cover-rubble-b"
              points="40,300 52,252 92,246 108,268 102,300"
            />
            <polygon
              className="cover-rubble-a"
              points="92,300 104,272 140,266 150,300"
            />
            <polygon
              className="cover-rubble-b"
              points="0,262 18,248 30,268 6,280"
            />
            <polygon
              className="cover-rubble-b"
              points="132,300 146,284 170,288 174,300"
            />
          </g>
          <g className="cover-motes">
            <circle cx="60" cy="250" r="1.6" />
            <circle cx="96" cy="262" r="1.2" />
            <circle cx="128" cy="276" r="1.8" />
            <circle cx="30" cy="236" r="1.3" />
          </g>
          <path className="cover-road" d={d(road)} />
          {travelled && (
            <path
              className="cover-road-travelled"
              d={travelled}
              pathLength={1}
            />
          )}
          {ahead && (
            <>
              <path className="cover-road-ahead" d={ahead} />
              <circle className="cover-traveller" r="4.5">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  path={ahead}
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.45 0 0.25 1"
                />
              </circle>
            </>
          )}
          <circle className="cover-end-glow" cx={P3[0]} cy={P3[1]} r="26" />
          <circle className="cover-end" cx={P3[0]} cy={P3[1]} r="16" />
          <g className="cover-emblem">
            <Emblem
              x={P3[0] - 9}
              y={P3[1] - 9}
              width={18}
              height={18}
              strokeWidth={2}
            />
          </g>
          {stops.map(({ stage, x, y }, i) => (
            <g
              key={stage.number}
              className={`cover-stop cover-stop--${stage.state}`}
              style={{ ['--i' as string]: i }}
            >
              {stage.state === 'now' && (
                <circle className="cover-stop-pulse" cx={x} cy={y} r="16" />
              )}
              <circle className="cover-stop-ring" cx={x} cy={y} r="10" />
              {reached.includes(stage.state) && (
                <path
                  className="cover-stop-check"
                  d={`M${x - 4.2} ${y + 0.2} l3 3 l5.6 -6.2`}
                />
              )}
            </g>
          ))}
        </svg>
        {variant === 'hero' && (
          <ol className="cover-labels">
            {stops.map(({ stage, x, y }, i) => (
              <li
                key={stage.number}
                className={`cover-label cover-label--${stage.state} ${y / H > 0.66 ? 'cover-label--above' : ''}`}
                style={{
                  left: `${(x / W) * 100}%`,
                  top: `${(y / H) * 100}%`,
                  ['--i' as string]: i,
                }}
              >
                <strong>{stage.title}</strong>
                <span>{stageState[stage.state]}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </ViewTransition>
  );
}
