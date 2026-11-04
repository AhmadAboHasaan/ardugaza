import {
  resolveStages,
  type Project,
  type StageState,
} from '@/content/projects';

type Point = readonly [number, number];
const P0: Point = [40, 262];
const P1: Point = [190, 252];
const P2: Point = [292, 74];
const P3: Point = [446, 44];

const lerp = (a: Point, b: Point, t: number): Point => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
];
const f = (p: Point) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
/** The road up to `t`, split exactly out of the full curve (de Casteljau). */
function split(t: number) {
  const p01 = lerp(P0, P1, t);
  const p12 = lerp(P1, P2, t);
  const p23 = lerp(P2, P3, t);
  const p012 = lerp(p01, p12, t);
  const p123 = lerp(p12, p23, t);
  const end = lerp(p012, p123, t);
  return { path: `M${f(P0)} C${f(p01)} ${f(p012)} ${f(end)}`, end };
}
const full = `M${f(P0)} C${f(P1)} ${f(P2)} ${f(P3)}`;
const reached: StageState[] = ['done', 'live'];

/**
 * The cover of a project card until its photographs arrive: the rubble, the
 * road rising out of it, and one stop for each stage, filled as stages are
 * funded and ringed where funding is open now. Drawn from the same books as
 * the bars, so the picture never runs ahead of them.
 */
export function ProjectCover({ project }: { project: Project }) {
  const stages = resolveStages(project);
  const stops = stages.map((stage, i) => ({
    stage,
    t: (i + 1) / (stages.length + 1),
  }));
  const last = stops.filter((s) => reached.includes(s.stage.state)).pop();
  const travelled = last ? split(last.t) : null;
  return (
    <div className="project-cover" aria-hidden="true">
      <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMax meet">
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
        <path className="cover-road" d={full} />
        {travelled && (
          <path className="cover-road-travelled" d={travelled.path} />
        )}
        <circle className="cover-end-glow" cx={P3[0]} cy={P3[1]} r="18" />
        <circle className="cover-end" cx={P3[0]} cy={P3[1]} r="6" />
        {stops.map(({ stage, t }) => {
          const [x, y] = split(t).end.map((n) => Math.round(n * 10) / 10);
          return (
            <g
              key={stage.number}
              className={`cover-stop cover-stop--${stage.state}`}
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
          );
        })}
      </svg>
    </div>
  );
}
