import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MediaFrame } from './MediaFrame';
import { SeatMatrix } from './SeatMatrix';
import { Section } from '../ui/Section';
import { integrations } from '@/data/integrations';
const meta = {
  title: 'Components/Content',
  parameters: { layout: 'padded' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const PlannedSeats: Story = {
  render: () => (
    <div style={{ maxWidth: 500 }}>
      <SeatMatrix />
      <p>100 planned seats per shift</p>
    </div>
  ),
};
export const FullBuild: Story = {
  render: () => (
    <div style={{ maxWidth: 500 }}>
      <SeatMatrix count={200} />
      <p>200 seats at the end of phase one</p>
    </div>
  ),
};
export const MediaPlaceholder: Story = {
  render: () => (
    <MediaFrame
      image={integrations.hallImage}
      caption="Approved photography to follow"
      fallback={
        <div className="hall-placeholder">500 m² · a planned place to work</div>
      }
    />
  ),
};
export const SemanticSection: Story = {
  render: () => (
    <Section aria-labelledby="example-title">
      <h2 id="example-title">Room for possibility.</h2>
      <p>A semantic, responsive section.</p>
    </Section>
  ),
};
