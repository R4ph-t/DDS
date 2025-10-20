/** @type {import('@ladle/react').UserConfig} */
export default {
  stories: 'templates/components/**/*.stories.tsx',
  viteConfig: '.ladle/vite.config.mjs',
  appendToHead: `<style>
    .ladle-wrapper { flex-direction: row-reverse; }
  </style>`,
  addons: {
    theme: {
      enabled: true,
      defaultState: 'dark',
    },
    mode: {
      enabled: true,
      defaultState: 'full',
    },
    width: {
      enabled: true,
      options: {
        xsmall: 414,
        small: 640,
        medium: 768,
        large: 1024,
        xlarge: 1280,
      },
      defaultState: 0,
    },
  },
}

