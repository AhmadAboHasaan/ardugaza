import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LinkButton } from './LinkButton';
const meta = {
  title: 'Components/LinkButton',
  component: LinkButton,
  args: { href: '#support', children: 'Give now' },
} satisfies Meta<typeof LinkButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
export const Text: Story = {
  args: { variant: 'text', children: 'Partner with us' },
};
export const Light: Story = { args: { variant: 'light' } };
export const Outline: Story = {
  args: { variant: 'outline' },
  parameters: { backgrounds: { default: 'dark' } },
};
export const LongLabel: Story = {
  args: { children: 'Discuss a funding partnership with Ardú' },
};
