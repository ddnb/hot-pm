import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  base: '/your-repo-name/', // Will be replaced with your actual repository name
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/button' },
      { text: 'Examples', link: '/examples/markdown' },
      {
        text: 'Resources',
        items: [
          { text: 'Team', link: '/resources/team' },
          { text: 'Contributing', link: '/resources/contributing' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Configuration', link: '/guide/configuration' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Card', link: '/components/card' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown', link: '/examples/markdown' },
          { text: 'Vue Components', link: '/examples/vue-components' },
        ],
      },
    ],
  },
});