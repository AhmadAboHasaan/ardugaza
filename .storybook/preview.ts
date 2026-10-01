import { createElement } from 'react';
import { manrope } from '../src/styles/font';
import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/globals.css';
const preview: Preview = {
  decorators: [
    (Story) =>
      createElement(
        'div',
        { className: manrope.variable },
        createElement(Story),
      ),
  ],
  parameters: {
    viewport: {
      options: {
        mobile390: {
          name: 'Mobile · 390px',
          styles: { width: '390px', height: '844px' },
          type: 'mobile',
        },
        tablet768: {
          name: 'Tablet · 768px',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
      },
    },
    layout: 'padded',
    a11y: { test: 'error' },
    nextjs: { appDirectory: true },
  },
};
export default preview;
