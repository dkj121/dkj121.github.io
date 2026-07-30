# dkj121.github.io

dkj121's personal blog, deployed on GitHub Pages.

## Stack

- **Next.js 16** (static export with `output: 'export'`)
- **Tailwind CSS v4** + Fumadocs UI CSS presets
- **TypeScript 5**
- **pnpm** package manager

## Design

| Key          | Value                            |
| ------------ | -------------------------------- |
| Background   | `#5D4037` brown, entire page     |
| Text         | `#FCFAF7` cream on brown         |
| Accent       | `#FFCC80` amber for topic tags   |
| Heading font | 仿宋 system stack                |
| Body font    | Bahnschrift Light system stack   |
| Mono font    | JetBrains Mono for terminal menu |

## Structure

```txt
app/
├── layout.tsx          Root layout + profile footer
├── page.tsx            Home (terminal-style post menu)
├── globals.css         Theme, fonts, Fumadocs presets
└── posts/[slug]/
    └── page.tsx        Individual blog post
components/
├── post-list.tsx       Terminal-style menu (date | title | topic)
├── post-content.tsx    Two-column layout (content + marginalia)
└── profile-footer.tsx  Author card
content/posts/          ← .mdx blog posts go here
lib/posts.ts            MDX processing (gray-matter + remark)
```

## Features

- **Terminal menu**: Home page styled as a CLI directory listing
- **Marginalia**: `> [!note]` blocks in MDX rendered as right sidebar notes
- **Auto-fold sidebar**: Marginalia collapses at widths < 900px via CSS
- **Profile card**: Author info at bottom of every page
- **Static export**: Pure HTML output to `out/`

## Commands

```bash
pnpm dev       # Start dev server
pnpm build     # Build static export to out/
pnpm fmt       # Format with Prettier
```

## Content Format

```mdx
---
title: Post Title
date: 2024-07-30
topic: ai
---

Post content here.

> [!note] This is a marginal note that appears in the sidebar.
```
