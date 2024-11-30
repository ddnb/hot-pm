# Configuration Guide

## Site Configuration

The `.vitepress/config.ts` file contains your site's configuration:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Site',
  description: 'A VitePress Site'
})
```

## Theme Customization

You can customize the theme by modifying the following properties:

- `themeConfig.nav`: Navigation menu items
- `themeConfig.sidebar`: Sidebar menu structure
- `themeConfig.footer`: Footer content and links

## Deployment

Build your site for production:

```bash
npm run docs:build
```

The built files will be in `.vitepress/dist`.