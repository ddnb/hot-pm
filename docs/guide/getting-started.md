# Getting Started

## Quick Start

1. Install VitePress:
```bash
npm install -D vitepress
```

2. Create your first page:
```bash
echo '# Hello VitePress' > index.md
```

3. Start the dev server:
```bash
npm run docs:dev
```

## Project Structure

A basic VitePress project structure looks like this:

```
.
├── docs
│   ├── .vitepress
│   │   └── config.ts
│   ├── index.md
│   └── guide
│       └── getting-started.md
└── package.json
```

Each Markdown file is converted into a page with its own URL pattern based on the file path.