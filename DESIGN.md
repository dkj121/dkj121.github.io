---
name: dkj121.github.io
description: Personal blog with terminal-style navigation and warm reading experience
colors:
  timber-brown: "#5d4037"
  dark-timber: "#4e342e"
  deep-timber: "#3e2723"
  parchment: "#fcfaf7"
  ink: "#281901"
  aged-paper: "#bcaaa4"
  amber-accent: "#ffcc80"
  muted-amber: "#a1887f"
  border-wood: "#795548"
  terminal-prompt: "#66bb6a"
typography:
  heading:
    fontFamily: '"FangSong", "FangSong_GB2312", "STFangsong", "Noto Serif SC", serif'
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: '"Bahnschrift Light", "Bahnschrift", "Segoe UI", "DIN Next Light", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace'
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.2em"
  terminal:
    fontFamily: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "0.35rem"
  md: "0.5rem"
  lg: "0.75rem"
  full: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
components:
  terminal-input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.terminal}"
    padding: "0"
  terminal-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.125rem 0"
  terminal-link-hover:
    backgroundColor: "{colors.dark-timber}"
  post-label:
    backgroundColor: "transparent"
    textColor: "{colors.muted-amber}"
    typography: "{typography.label}"
  link-accent:
    textColor: "{colors.amber-accent}"
  link-accent-hover:
    textColor: "{colors.amber-accent}"
  code-block:
    backgroundColor: "{colors.timber-brown}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1rem 1.25rem"
  inline-code:
    backgroundColor: "{colors.timber-brown}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.15rem 0.4rem"
  mermaid-container:
    backgroundColor: "{colors.dark-timber}"
    rounded: "{rounded.lg}"
    padding: "2rem"
---

# Design System: dkj121.github.io

## Overview

**Creative North Star: "The Warm Study"**

This is a personal technical blog that balances developer precision with reading comfort. The design evokes a warm study lined with aged wood and worn books — intimate and focused, but systematic in its information architecture. The home page is a terminal-style directory listing where posts are navigated through CLI patterns; individual posts shift into a book-like reading mode with generous margins and serif headings. The brown palette suggests craft and durability; the monospace typography grounds the interface in technical truth.

The system is deliberately restrained. One accent color (amber) marks interaction and metadata; depth comes from tonal layering, not shadows. Chinese and Latin typography coexist through carefully chosen font stacks. The design refuses decoration: no gradients, no glass effects, no emoji standing in for icons. Every element serves reading or navigation.

**Key Characteristics:**

- Dual-mode interface: terminal for navigation, prose for reading
- Warm brown palette suggesting aged wood and paper
- Flat tonal depth model — no shadows except subtle insets
- Monospace for system UI, serif for content headings, sans for body
- Single amber accent used sparingly for interaction cues
- Bilingual typography optimized for Chinese and Latin scripts

## Colors

The palette is rooted in wood tones and paper, suggesting a physical workspace. Browns layer from light timber to deep shadow; cream text reads comfortably against all surfaces. Amber appears only on interactive elements and metadata labels, preserving its salience.

### Primary

- **Amber Accent** (#ffcc80): The sole accent color. Used for topic tags, links, and interactive hover states. Appears on ≤10% of any screen to maintain its signal.
- **Muted Amber** (#a1887f): Dimmed variant for non-interactive labels (topic tags in post metadata). Softer than the primary accent.

### Neutral

- **Timber Brown** (#5d4037): Main background surface. All pages and the root body.
- **Dark Timber** (#4e342e): Elevated surface. Used for cards (profile footer, code containers, mermaid diagrams). One step darker than the main surface.
- **Deep Timber** (#3e2723): Reserved for future use or extreme depth. Not currently active in the system.
- **Parchment** (#fcfaf7): Primary text color on all brown surfaces. Cream tone ensures warm contrast (≥4.5:1 on Timber Brown).
- **Ink** (#281901): Used sparingly for body text in certain contexts. Nearly black with a warm undertone.
- **Aged Paper** (#bcaaa4): Secondary text. Used for dates, metadata, muted help text, and code comments. Legible but recedes (≥4.5:1).
- **Border Wood** (#795548): Dividers, borders, table edges, and scrollbar thumbs. Mid-tone brown that separates without harshness.
- **Terminal Prompt** (#66bb6a): Green prompt color in the CLI. A technical nod to Unix terminals; appears only in the terminal menu's `dkj121@blog:~/posts$` prompt.

### Named Rules

**The One Voice Rule.** Amber accent appears on ≤10% of any screen. Its rarity preserves its signal as an interaction or metadata cue. When in doubt, use neutral tones.

**The Tonal Separation Rule.** Depth is expressed through darker browns, never shadows (except inset on code blocks). Dark Timber (#4e342e) cards sit on Timber Brown (#5d4037) background; the 9% lightness difference creates clear layering without decoration.

## Typography

**Display Font:** FangSong (with FangSong_GB2312, STFangsong, Noto Serif SC, serif fallback)  
**Body Font:** Bahnschrift Light (with Bahnschrift, Segoe UI, DIN Next Light, sans-serif fallback)  
**Terminal/Mono Font:** JetBrains Mono (with Fira Code, Cascadia Code, monospace fallback)

**Character:** A trilingual typographic system balancing Latin sans-serif clarity (Bahnschrift Light), Chinese serif authority (FangSong), and monospace precision (JetBrains Mono). FangSong brings traditional brush-stroke character to headings; Bahnschrift's geometric lightness keeps body text airy and modern; JetBrains Mono anchors the CLI and code in developer familiarity. The pairing feels both scholarly and technical.

### Hierarchy

- **Heading** (700 weight, 2.25rem / 36px, 1.2 line-height): Post titles and major section headings. Uses FangSong for traditional elegance. Appears in dark ink (#281901) for maximum contrast.
- **Subheading** (varies, 1.5rem / 24px, 1.3 line-height): H2 elements in posts. Same FangSong face, smaller scale. Generous top margin (2.5rem) provides breathing room.
- **Body** (400 weight, 1rem / 16px, 1.6 line-height): Post prose and most UI text. Bahnschrift Light in Parchment (#fcfaf7). Max line length 720px container (approximately 65–75ch depending on language mix).
- **Label** (400 weight, 0.75rem / 12px, 1.5 line-height, 0.2em tracking, uppercase): Topic tags and metadata categories. JetBrains Mono in Muted Amber (#a1887f). Wide tracking and uppercase give it a technical, systematic feel.
- **Terminal** (400 weight, 0.875rem / 14px, 1.5 line-height): CLI interface text (commands, post rows, help output). JetBrains Mono in various neutral tones depending on role (prompt green, dates muted, titles primary).

### Named Rules

**The Font-per-Mode Rule.** Monospace (JetBrains Mono) owns the terminal home page and code. Serif (FangSong) owns content headings. Sans (Bahnschrift Light) owns body prose and the profile card. Never mix modes within a single context.

**The Fallback Path Rule.** Every font family includes a Chinese-optimized fallback (Noto Serif SC, Microsoft YaHei UI implied, system CJK stacks) before the generic keyword. The blog is bilingual; Chinese glyphs must render with the same authority as Latin.

## Layout

The system has two spatial modes:

**Terminal mode** (home page): 900px max-width container, centered. Monospace grid with three columns (DATE | TITLE | TOPIC). Minimal vertical rhythm; rows stack tightly with 0.125rem vertical padding and hover background. The layout mimics `ls -l` output: tabular, scannable, systematic.

**Reading mode** (post pages): 720px max-width article container, centered. Generous 2rem top/bottom padding, 1.5rem horizontal padding. Prose flows in a single column with comfortable 65–75ch measure. Headings use large top margins (2.5rem on H2) to create clear section breaks. Code blocks and diagrams break out slightly with their own padding and borders.

**Responsive behavior:** The design is desktop-first but respects narrow viewports. Containers shrink gracefully; the terminal grid remains three-column even on mobile (titles truncate). No breakpoint-driven layout shifts; the hierarchy is intrinsically flexible.

**Spacing rhythm:** Follows a 0.5rem (8px) base. Most spacing is 1rem, 1.5rem, or 2rem. Code blocks and diagrams get 2rem padding for breathing room. The terminal UI is deliberately tight (0.125rem row padding) to maximize density.

## Elevation & Depth

This system uses **flat tonal layering**. Depth is expressed by darker brown surfaces against the main Timber Brown background, never through drop shadows. The model suggests a workspace built from stacked wood panels, each layer one shade darker.

### Tonal Layers

- **Base surface** (Timber Brown #5d4037): The canvas. Body background, page root.
- **Elevated surface** (Dark Timber #4e342e): Cards, code blocks, mermaid diagrams, profile footer. One step darker creates clear separation without decoration.
- **Recessed surface** (code blocks only): A subtle `inset 0 1px 0 rgba(252, 250, 247, 0.04)` glow suggests the surface is cut into the page. This is the only shadow in the system and it pushes inward, not outward.

### Named Rules

**The No-Shadow Rule.** Drop shadows (offset blur) do not exist in this system. Depth comes from tonal contrast. The one exception is mermaid diagrams, which receive a minimal `drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))` to lift the SVG slightly — this is a functional aid for complex diagrams, not decoration.

**The Inset-Only Rule.** When a shadow is necessary, it must push inward (inset) to suggest a carved or recessed surface. Outward shadows imply lifting or floating, which conflicts with the flat-panel aesthetic.

## Shapes

The form language is rectilinear with **gently softened corners**. Borders are always 1px and serve structural roles (dividers, table edges, input strokes) rather than decoration. The system avoids pills and extreme radii; rounded corners are subtle and consistent.

### Corner Strategy

- **Small radius** (0.35rem / ~6px): Inline code snippets. Tight radius for small elements.
- **Medium radius** (0.5rem / 8px): Code blocks, tables. The default for rectangular containers.
- **Large radius** (0.75rem / 12px): Mermaid diagram containers. Reserved for larger feature elements.
- **Full radius** (999px): Scrollbar thumbs only. Functional rounding, not a button treatment.

### Border Treatment

Borders are single-pixel and use Border Wood (#795548), a mid-tone that separates without creating harsh edges. They appear on:

- Dividers (horizontal rules between terminal sections, post metadata)
- Table cells
- Code block containers
- Input fields (terminal has none; future forms would)
- Blockquote left edge (3px, thicker for emphasis)

**The No-Decoration Border Rule.** Colored left/right borders as decoration (the 4px accent stripe on cards) are banned. The only colored border is blockquote's 3px left edge in Border Wood, which serves a semantic role (quotation indicator), not decoration.

## Components

### Terminal Input

- **Style:** Transparent background, no border. Monospace (JetBrains Mono, 0.875rem). Ink (#281901) text. Feels like typing directly into the terminal.
- **Placeholder:** Border Wood (#795548) color, reads as a hint without interfering.
- **Focus:** No focus ring; the terminal is always "focused" — the entire panel is clickable to restore input focus.

### Terminal Post Links

- **Default:** Three-column grid (date | title | topic). Date and title in neutral tones, topic in Amber Accent. 0.125rem vertical padding keeps rows tight.
- **Hover:** Dark Timber (#4e342e) background fills the row. Subtle and immediate.
- **Typography:** Date uses Aged Paper (#bcaaa4), title uses Ink (#281901), topic uses Amber Accent (#ffcc80). All monospace at 0.875rem.

### Post Metadata Label

- **Style:** Uppercase monospace (JetBrains Mono, 0.75rem), 0.2em letter-spacing. Muted Amber (#a1887f) color. Appears above post title as a category label.
- **Purpose:** Signals post topic at a glance. The wide tracking and uppercase give it a technical, stamped quality.

### Accent Links

- **Default:** Amber Accent (#ffcc80) text, no underline.
- **Hover:** Underline appears. Color stays Amber Accent (no shift). Simple and direct.
- **Context:** Used in the profile footer for external links (GitHub, email, university). Also used for in-content hyperlinks when they exist.

### Code Blocks

- **Shape:** Medium rounded corners (0.5rem). 1px Border Wood border.
- **Background:** Timber Brown (#5d4037) — matches the page background, creating a recessed feel.
- **Shadow:** `inset 0 1px 0 rgba(252, 250, 247, 0.04)` — a subtle top-edge glow suggesting the block is carved into the surface.
- **Padding:** 1rem vertical, 1.25rem horizontal. Comfortable but not excessive.
- **Typography:** JetBrains Mono at 0.875rem, 1.7 line-height. Syntax highlighting uses muted pastels (greens, blues, yellows) for strings, keywords, and functions. Comments in Aged Paper (#bcaaa4) italic.
- **Scrollbar:** Thin custom scrollbar (10px height/width) with Border Wood thumb and Timber Brown track. Scrollbar thumb is fully rounded (999px radius).

### Inline Code

- **Style:** Small rounded (0.35rem), 1px Border Wood border, Timber Brown background. Tight padding (0.15rem vertical, 0.4rem horizontal).
- **Typography:** JetBrains Mono at 0.92em (slightly smaller than surrounding text). Ink (#281901) color.
- **Behavior:** `white-space: nowrap` prevents wrapping; code tokens stay intact.

### Mermaid Diagrams

- **Container:** Dark Timber (#4e342e) background, large rounded corners (0.75rem), 1px Border Wood border. 2rem padding on all sides.
- **SVG treatment:** Centered flex container. The SVG itself gets `drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))` for subtle depth.
- **Node labels:** Bahnschrift Light (body font, not mono) at 1.125rem, 500 weight, 1.4 line-height. Padding: 0.5rem vertical, 0.75rem horizontal.
- **Edge labels:** Same font, slightly smaller (0.9375rem), 500 weight. Dark Timber background, small rounded (0.25rem), padding: 0.25rem vertical, 0.5rem horizontal.
- **Stroke weights:** Nodes and paths use 2.5px strokes for visibility against the brown background. This is thicker than default mermaid; the brown palette demands it for legibility.
- **Theme:** Custom base theme with Parchment (#fcfaf7) text, Amber Accent (#ffcc80) borders, and brown surface fills. Configured in `mermaid.initialize()` to match the system.

### Profile Card

- **Style:** Dark Timber (#4e342e) background. 1px Border Wood top and bottom borders (no left/right). Max-width 900px, centered, with horizontal padding (1.5rem) and vertical padding (2rem).
- **Layout:** Horizontal flex with 1rem gap. Profile image (56×64px) on the left, text block on the right.
- **Typography:** Name in 1.125rem sans-serif (Bahnschrift), semibold, Parchment color. Bio text in 0.875rem, Aged Paper color. Links in Amber Accent with hover underline.
- **Footer links:** Horizontal row with dividers. GitHub and email in Aged Paper, hover to Amber Accent. Divider is Border Wood.

### Table

- **Style:** Border-collapse, 1px Border Wood borders on all cells and outer edge. Timber Brown background (matches page).
- **Padding:** 0.65rem vertical, 0.8rem horizontal per cell. Comfortable but not loose.
- **Typography:** Body font (Bahnschrift Light), standard size. Headers (`<th>`) have no special weight; structure is conveyed by border alone.

### Blockquote

- **Style:** Timber Brown background (matches page), 3px left border in Border Wood. No other borders.
- **Padding:** 0.85rem vertical, 1rem horizontal.
- **Typography:** Body font, standard size and color. The left border is the only indicator; no italic or indent.

## Do's and Don'ts

### Do:

- **Do** use Amber Accent (#ffcc80) sparingly — only for interactive elements (links, hover states) and metadata labels (topic tags). Its scarcity is the signal.
- **Do** express depth through tonal layering: Dark Timber (#4e342e) surfaces sit on Timber Brown (#5d4037) backgrounds. The 9% lightness difference is enough.
- **Do** use monospace (JetBrains Mono) for all CLI interface elements, labels, and code. It anchors the technical character.
- **Do** use serif (FangSong) for post headings to bring traditional Chinese typographic authority. The contrast with sans-serif body is intentional.
- **Do** preserve generous vertical spacing in reading mode: 2.5rem above H2 headings, 2rem padding on diagrams and code blocks.
- **Do** use 1px Border Wood (#795548) borders for all structural separation (dividers, tables, containers). Consistent stroke weight throughout.
- **Do** ensure Chinese and Latin text render with equal authority by including Chinese-optimized fallbacks (Noto Serif SC, STFangsong, etc.) in every font stack.

### Don't:

- **Don't** use drop shadows (offset blur). The one exception is mermaid diagrams' minimal drop-shadow for functional clarity.
- **Don't** use gradients, glass effects, or blur as decoration. The only backdrop treatment is the terminal menu itself, which is solid.
- **Don't** introduce a second accent color. Amber is the sole voice; introducing blue or green dilutes its signal.
- **Don't** use emoji or Unicode glyphs as icons. If icons are needed, use SVG from a consistent library.
- **Don't** use colored left/right borders on cards or list items for decoration. Blockquote's 3px left border is semantic, not ornamental.
- **Don't** mix typography modes within a context: no monospace in prose paragraphs (except `<code>`), no serif in the terminal menu.
- **Don't** add rounded corners beyond the established scale (0.35rem, 0.5rem, 0.75rem). Pills (999px radius) are reserved for scrollbar thumbs only.
- **Don't** break the 720px article measure for body text. Long lines reduce comprehension; the constraint is intentional.
