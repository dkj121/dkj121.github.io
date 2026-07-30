# AGENTS.md — Coding Standards

## Formatting (EditorConfig)

- **Tabs** for indentation, 2-space indent size
- LF line endings, UTF-8
- Trailing whitespace trimmed
- Final newline inserted

## TypeScript

- Strict mode enabled
- Prefer `interface` for object types
- Avoid `any` — use proper types from `lib/posts.ts`
- TypeScript files: `.ts` for logic, `.tsx` for components with JSX

## Components

- **Server Components by default** — only add `'use client'` when needed
- Server Components fetch data directly (no `useEffect` for data loading)
- Keep components focused: one component, one purpose
- Use `@/lib/posts` `PostMeta` and `PostWithContent` types

## CSS & Styling

- Tailwind v4 utility classes preferred
- CSS custom properties in `globals.css` for theme tokens
- Fumadocs CSS presets (`fumadocs-ui/css/preset.css`, `neutral.css`)
- **Total brown rule**: No cream/light surfaces — all `#5D4037` brown
- Font stacks are system-only (no web fonts)

### Color Reference

```css
--color-bg:        #5D4037   (warm brown, entire page)
--color-text:      #FCFAF7   (light cream body text)
--color-text-muted:#BCAAA4   (secondary text)
--color-accent:    #FFCC80   (amber topic tags)
--color-divider:   #795548   (hairlines)
--color-card:      #4E342E   (profile card bg)
```

## Marginalia Syntax

In `.mdx` files:

```mdx
> [!note] Your annotation text here. Can span multiple lines.
```

Extracted at build time by `lib/posts.ts` → rendered in right sidebar.

## Build

- `output: 'export'` → static HTML in `out/`
- All pages prerendered at build time (SSG)
- Deploy `out/` to GitHub Pages
