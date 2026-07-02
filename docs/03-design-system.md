# PROTIBAE — Design System

> The design language of PROTIBAE.
> This document defines how the interface looks, feels, and behaves.
> Every component, layout, and interaction must conform to these standards.

**Document:** `03-design-system.md`
**Status:** Living Document
**Owner:** Design Leadership
**Last Revised:** July 2026
**Parent Documents:** `00-project-constitution.md` · `01-project-specification.md` · `02-brand-guidelines.md`

---

## 1. Design Philosophy

Five principles govern every design decision. When two good ideas conflict, this hierarchy resolves it.

1. **Minimal Interface.** Remove until it breaks. Then add back one element. That is the design.
2. **Maximum Emotion.** Restraint in layout creates space for impact in typography, photography, and motion. Minimalism is not emptiness — it is amplification.
3. **Product First.** The bar is the hero of every surface. No decorative element should compete with the product for visual dominance.
4. **Motion Supports Storytelling.** Animation guides the narrative, provides feedback, and creates personality. It never distracts, delays, or decorates without purpose.
5. **Performance First.** A beautiful design that loads slowly is a failed design. Every visual decision must pass a performance budget. Craft does not excuse weight.

---

## 2. Layout System

### Grid Philosophy

The grid provides rhythm without rigidity. Layouts should feel structured but never mechanical. The grid is sensed by the viewer, never seen.

- Use a consistent column grid across all pages for horizontal alignment.
- Allow full-bleed sections to break the grid deliberately for visual impact — hero images, product showcases, and brand moments.
- Asymmetry is permitted when it serves hierarchy. Not every layout needs to be centered or symmetrical.

### Container Widths

- Content containers use a maximum width that prevents long reading lines. Body text should never span the full viewport on desktop.
- Hero sections and product imagery may extend beyond content containers to create visual scale.
- On mobile, content fills the viewport width with consistent horizontal padding.

### Section Spacing

- Sections are separated by generous vertical space. Content breathes between sections.
- Spacing increases with hierarchy — the gap between major sections is larger than the gap between subsections.
- Consistent spacing tokens are used throughout. No arbitrary values.

### Vertical Rhythm

- All text and spacing align to a consistent baseline increment. This creates an invisible vertical rhythm that makes the page feel cohesive even when layouts vary.
- Line heights, padding, and margins are multiples of the base unit.

### White Space Philosophy

Whitespace is the brand's most powerful design tool. It communicates premium quality, creates breathing room, and forces every remaining element to justify its presence. When in doubt, add space. Never fill space because it feels empty.

---

## 3. Typography System

Typography is the primary design layer. Before color, before imagery, before motion — type establishes the brand.

### Display Text

Reserved for hero moments and single-word impact statements. Largest scale in the system. Used sparingly — no more than once per viewport. Display type should feel like a statement, not a headline.

### Headlines

Section-level headings that establish content hierarchy. Bold weight, generous tracking, clear contrast against body text. Headlines announce — they do not explain.

### Section Titles

Smaller than headlines, used for sub-sections and content groups. They orient the reader within a section without competing with the primary headline.

### Body Text

Optimized for sustained reading. Comfortable size, generous line height, moderate line length. Body text should be effortless to read on both mobile and desktop. Never sacrifice readability for aesthetic density.

### Captions

Small-scale text for labels, metadata, and supporting information. Captions are quiet — they inform without demanding attention.

### Hierarchy Rules

- No more than three levels of typographic hierarchy should be visible in any single viewport.
- Hierarchy is established through scale and weight contrast — not through color, decoration, or underlines.
- Sentence case for all headings. Title case feels corporate and dated.
- No all-caps except for small labels and navigational elements where brevity demands density.

---

## 4. Color System

The palette is drawn from the product itself — cocoa, coffee, millet, earth.

### Primary Colors

Anchored in deep, warm tones. The primary palette creates the foundation of the brand experience — dominant on backgrounds, navigation, and key surfaces. These are the colors a user remembers.

### Secondary Colors

Warm accent tones that create energy and draw attention to calls-to-action, highlights, and interactive elements. Used with discipline — accents lose power when overused.

### Neutral Palette

A range from near-black to near-white with warm undertones. Neutrals carry the majority of the interface — text, backgrounds, borders, and dividers. Cold greys are avoided. Every neutral should feel connected to the brand's warmth.

### Semantic Colors

Functional colors for system states — success, warning, error, information. These must be legible, accessible, and distinct from the brand palette while still feeling harmonious. They appear only in context — never as decoration.

### Usage Philosophy

- Dark tones anchor and ground. They communicate premium and create depth.
- Warm accents energize and direct. They guide the eye to action.
- Neutrals recede and support. They let content and imagery lead.
- Color is never used to fill space. If a section feels empty, the solution is better content or more whitespace — not a background color.

---

## 5. Component Principles

Every component follows three rules: it has a clear purpose, it responds to interaction, and it looks like it belongs to PROTIBAE.

| Component | Guiding Principle |
|---|---|
| **Buttons** | Bold, confident, tactile. Primary actions are visually dominant. Secondary actions are quiet. Every button provides hover and press feedback through motion, not just color change. |
| **Cards** | Content containers with clear boundaries. Cards use elevation and spacing to separate from the background — never heavy borders. Product cards prioritize imagery over text. |
| **Navigation** | Minimal, fixed, persistent. Navigation stays out of the way until needed. It never competes with content for attention. Mobile navigation is a full-screen overlay — not a cramped dropdown. |
| **Footer** | Structured, informative, branded. The footer is the last brand impression — it should feel finished, not abandoned. |
| **Inputs** | Clean, generous, clearly labeled. Inputs provide immediate validation feedback. Placeholder text is never used as a label substitute. |
| **Forms** | Short, focused, single-column. Every field justifies its existence. Progressive disclosure for complex forms — never show all fields at once. |
| **Product Cards** | Photography-dominant. The product image is the largest element. Price, name, and a single action are the only required text elements. No clutter. |
| **Badges & Chips** | Small, pill-shaped, informational. Used for status, categories, and filters. Never decorative. |
| **Modals** | Used sparingly — only when the action requires focused attention and cannot be handled inline. Modals dim the background and center the user's focus. |
| **Dialogs** | Confirmation-only. Short copy, clear actions, no ambiguity. The destructive action is never the visually dominant button. |
| **Drawers** | Slide-in panels for supplementary content — cart, filters, details. Drawers do not replace pages. They augment them. |
| **Toasts** | Brief, non-blocking, auto-dismissing. Toasts confirm actions without interrupting flow. They appear, communicate, and leave. |
| **Tables** | Clean, aligned, scannable. Used only for structured data comparison — never for layout. Rows are separated by subtle dividers, not alternating colors. |

---

## 6. Motion Principles

Motion is language. Every animation communicates hierarchy, transition, feedback, or personality.

| Motion Type | Principle |
|---|---|
| **Entry** | Content enters the viewport with directional movement and opacity. Elements arrive from a consistent origin — typically bottom-to-top or left-to-right. Staggered timing creates narrative sequence. Nothing appears abruptly. |
| **Exit** | Elements exit faster than they enter. Exit motion is quick, quiet, and never draws attention away from what replaces it. |
| **Hover** | Interactive elements respond immediately to cursor proximity. Hover states use subtle scale, shadow, or tonal shifts — never dramatic transformations. Feedback must feel tactile. |
| **Scroll** | Scroll-driven motion reveals content progressively. Parallax is used with restraint — one or two layers maximum. Scroll animations respect the user's pace and never lock the scroll position. |
| **Loading** | Skeleton screens maintain layout stability while content loads. Shimmer animations indicate activity. Spinners are a last resort. The page should never feel empty or broken during loading. |
| **Micro-interactions** | Button presses, toggle switches, cart additions, form validations — small moments where motion provides confirmation. These interactions are fast, subtle, and satisfying. |

### Motion Rules

- Every animation has easing. Nothing moves linearly.
- Elements have weight. Light elements move faster. Heavy elements move slower.
- Duration scales with distance. Small movements are fast. Large movements are slower.
- Respect reduced-motion preferences. All decorative motion is disabled when the user requests it. Functional motion remains.

---

## 7. Imagery

### Product Photography

The bar is the hero. Product photography is textural, close-up, and appetite-driven. Show the surface, the ingredients, the cross-section, the bite. Warm, directional lighting with depth. Never flat, never clinical. The viewer should want to reach into the screen.

### Lifestyle Photography

Real contexts — desks, gym bags, backpacks, kitchen counters, coffee tables. The product appears in places Gen Z actually exists. Never staged fitness shoots. Never stock-photo smiles. The feeling is candid, natural, and aspirational without being unattainable.

### Ingredient Photography

Individual ingredients — millet grains, cocoa nibs, coffee beans — shot with the same attention as the product. Ingredients are a feature, not fine print. The photography should make raw ingredients feel beautiful and intentional.

### Background Usage

Full-bleed imagery is reserved for hero sections and key brand moments. Backgrounds never compete with foreground content. When used, backgrounds are desaturated or darkened to maintain text legibility and visual hierarchy.

---

## 8. Iconography

Icons are functional, not decorative. Every icon communicates an action or a concept that text alone would slow down.

- **Style:** Line icons with a consistent stroke weight. Never filled unless indicating an active state.
- **Consistency:** All icons share the same visual weight, corner radius, and grid size. A mismatched icon breaks the system.
- **Usage:** Icons accompany labels — they do not replace them, except for universally understood symbols (cart, search, close, menu).
- **Size:** Icons scale with their context. Navigation icons are larger. Inline icons match text size.

---

## 9. Accessibility

Accessibility is not a feature — it is a standard. Every interface must be usable by every person.

- **Typography:** Minimum body text size ensures readability. Line height and letter spacing are optimized for legibility, not just aesthetics.
- **Contrast:** All text meets WCAG AA contrast ratios against its background. Interactive elements are distinguishable without relying on color alone.
- **Touch Targets:** All interactive elements meet minimum touch target sizes on mobile. Targets are spaced to prevent accidental activation.
- **Keyboard Navigation:** Every interactive element is reachable and operable via keyboard. Focus states are visible and styled consistently.
- **Motion Reduction:** All decorative animations respect the `prefers-reduced-motion` preference. Functional transitions remain but are simplified.
- **Readable Interfaces:** Content is structured with proper heading hierarchy. Screen readers can navigate the page logically. Images have meaningful alt text.

---

## 10. Responsive Philosophy

We design for four breakpoints. Mobile is the origin — everything else is an expansion.

| Breakpoint | Philosophy |
|---|---|
| **Mobile** | The default canvas. Single-column layouts. Touch-optimized interactions. Full-width imagery. Navigation collapses to a menu overlay. Every design starts here. |
| **Tablet** | The transitional layout. Two-column grids where content benefits from side-by-side presentation. Touch interactions remain primary. Navigation may expand partially. |
| **Desktop** | The expanded experience. Multi-column grids, hover interactions, and larger typographic scale. Whitespace increases. Content containers are width-constrained to prevent reading fatigue. |
| **Large Screens** | Content remains centered and width-constrained. Large screens gain more whitespace, not more content. The experience scales through breathing room, not by filling the viewport. |

### Adaptation Rules

- Layouts adapt through reflow, not through hiding content. Mobile users see the same information — arranged differently.
- Images are art-directed per breakpoint when composition demands it. A landscape hero on desktop may become a cropped portrait on mobile.
- Typography scales smoothly between breakpoints. No abrupt size jumps.

---

## 11. Quality Checklist

Every new UI component must satisfy every item before acceptance.

- [ ] The component has a clear, singular purpose.
- [ ] It follows the established typographic hierarchy.
- [ ] It uses only colors from the design system palette.
- [ ] It uses only spacing values from the defined scale.
- [ ] It has defined states: default, hover, active, focused, disabled, loading, error, empty.
- [ ] All interactive states provide visual feedback through motion.
- [ ] It meets WCAG AA contrast requirements.
- [ ] Touch targets meet minimum size requirements.
- [ ] It is keyboard navigable with a visible focus state.
- [ ] It respects reduced-motion preferences.
- [ ] It renders correctly at all four responsive breakpoints.
- [ ] It does not introduce layout shift during loading.
- [ ] It uses no arbitrary values — all tokens come from the system.
- [ ] It looks like it belongs to PROTIBAE. If it could belong to any other brand, it is not ready.

---

*End of Design System. The Motion System (`04-motion-system.md`) will define detailed animation specifications, timing curves, and choreography rules.*
