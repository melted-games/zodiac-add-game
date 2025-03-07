import type { StorybookConfig } from '@storybook/svelte-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|ts|svelte)"
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    '@chromatic-com/storybook',
    "@storybook/experimental-addon-test"
  ],
  framework: '@storybook/svelte-vite',
  core: {
    builder: '@storybook/builder-vite'
  },
};
export default config;