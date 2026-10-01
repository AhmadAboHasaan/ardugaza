import type { Meta, StoryObj } from '@storybook/nextjs-vite';
const meta = { title: 'Foundations/Open frame' } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Typography: Story = {
  render: () => (
    <div>
      <h1>Talent is here.</h1>
      <h2>Make room for its future.</h2>
      <h3>A place to begin.</h3>
      <p>
        Manrope is the shared display and reading family. Open shapes and a
        broad rhythm keep dense funding content readable.
      </p>
      <p className="small">Caption · estimates as of September 2026.</p>
    </div>
  ),
};
export const Colors: Story = {
  render: () => (
    <div>
      {['paper', 'ink', 'accent', 'surface', 'muted', 'line'].map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            padding: 12,
          }}
        >
          <span
            style={{
              display: 'block',
              width: 100,
              height: 60,
              background: `var(--${name})`,
              border: '1px solid var(--line)',
            }}
          />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
};
export const Spacing: Story = {
  render: () => (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <div key={n} style={{ marginBlock: 16 }}>
          <p>Space {n}</p>
          <div
            style={{
              height: 12,
              width: `var(--space-${n})`,
              background: 'var(--ink)',
            }}
          />
        </div>
      ))}
    </div>
  ),
};
export const Motion: Story = {
  render: () => (
    <div>
      <h2>Motion with a purpose.</h2>
      <p>
        One 700ms seat entrance explains the room coming together. Press
        feedback: 140ms. State feedback: 200ms. No continuous motion, scrolling
        interception or animated impact counters. Reduced motion removes
        movement.
      </p>
    </div>
  ),
};
