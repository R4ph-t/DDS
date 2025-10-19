/** @type {import('@ladle/react').UserConfig} */
export default {
  stories: 'components/**/*.stories.{js,jsx,ts,tsx}',
  viteConfig: '.ladle/vite.config.mjs',
  addons: {
    theme: {
      enabled: true,
      defaultState: 'light',
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

