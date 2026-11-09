'use client';
import { useState, type ReactNode } from 'react';

type Option = { value: string; label: string; count: number };
type Props = {
  /** "Show programmes" */
  label: string;
  options: readonly Option[];
  /** The grid, rendered on the server; each item carries `data-status`. */
  children: ReactNode;
};

/**
 * Narrow the programmes by where they stand. The grid stays server-rendered;
 * the filter only says which status to show, so every card is still in the
 * page for search engines and for anyone without scripts.
 */
export function ProjectFilter({ label, options, children }: Props) {
  const [filter, setFilter] = useState('all');
  return (
    <div className="project-filter" data-filter={filter}>
      <div className="filter-chips" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className="filter-chip"
            aria-pressed={filter === option.value}
            disabled={option.count === 0}
            onClick={() => setFilter(option.value)}
          >
            {option.label}
            <span className="filter-count">{option.count}</span>
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
