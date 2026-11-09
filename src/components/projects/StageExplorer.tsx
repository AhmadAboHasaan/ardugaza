'use client';
import {
  Children,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { Check } from 'lucide-react';

export type ExplorerTab = {
  number: number;
  title: string;
  state: 'done' | 'live' | 'now' | 'next' | 'later';
  /** "Funding now", "Funded"… */
  stateLabel: string;
};

type Props = {
  /** "The stages of Ardú Space" */
  label: string;
  tabs: readonly ExplorerTab[];
  /** One panel per tab, rendered on the server. */
  children: ReactNode;
};

/**
 * A programme's stages as stops on one road, each a tab: the road fills up
 * to the last funded stop, the stage open now is selected when the page
 * opens, and choosing a stop opens its story and its indicator.
 */
export function StageExplorer({ label, tabs, children }: Props) {
  const uid = useId();
  const panels = Children.toArray(children);
  const opening = Math.max(
    0,
    tabs.findIndex((tab) => tab.state === 'now'),
  );
  const [selected, setSelected] = useState(opening);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const reached = tabs.reduce(
    (last, tab, i) => (tab.state === 'live' || tab.state === 'done' ? i : last),
    -1,
  );
  const focus = (i: number) => {
    const next = (i + tabs.length) % tabs.length;
    setSelected(next);
    buttons.current[next]?.focus();
  };
  const onKeyDown = (event: KeyboardEvent, i: number) => {
    const moves: Record<string, number> = {
      ArrowRight: i + 1,
      ArrowDown: i + 1,
      ArrowLeft: i - 1,
      ArrowUp: i - 1,
      Home: 0,
      End: tabs.length - 1,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    focus(moves[event.key]);
  };
  return (
    <div className="explorer">
      <div
        className="explorer-road"
        style={{
          ['--n' as string]: tabs.length,
          ['--reached' as string]:
            reached < 0 ? 0 : reached / Math.max(1, tabs.length - 1),
        }}
      >
        <div className="explorer-tabs" role="tablist" aria-label={label}>
          {tabs.map((tab, i) => (
            <button
              key={tab.number}
              ref={(el) => {
                buttons.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-controls={`${uid}-panel-${i}`}
              aria-selected={i === selected}
              tabIndex={i === selected ? 0 : -1}
              className={`explorer-tab explorer-tab--${tab.state}`}
              onClick={() => setSelected(i)}
              onKeyDown={(event) => onKeyDown(event, i)}
            >
              <span className="explorer-dot" aria-hidden="true">
                {tab.state === 'live' || tab.state === 'done' ? (
                  <Check size={18} strokeWidth={2.75} />
                ) : (
                  tab.number
                )}
              </span>
              <span className="explorer-tab-title">{tab.title}</span>
              <span className="explorer-tab-state">{tab.stateLabel}</span>
            </button>
          ))}
        </div>
      </div>
      {panels.map((panel, i) => (
        <div
          key={tabs[i]?.number ?? i}
          role="tabpanel"
          id={`${uid}-panel-${i}`}
          aria-labelledby={`${uid}-tab-${i}`}
          hidden={i !== selected}
          className="explorer-panel"
          tabIndex={0}
        >
          {panel}
        </div>
      ))}
    </div>
  );
}
