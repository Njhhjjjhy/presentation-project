# 500.co-Inspired Design System Implementation

## Quick Start

This presentation flipbook now uses a 500.co-inspired design system with our own design tokens as the source of truth.

### Key Files

- **tokens.json** - Primary design tokens (colors, spacing)
- **mds.tokens.json** - Material design system tokens (fonts, effects, grid)
- **tokens.css** - CSS variables derived from tokens
- **tailwind.config.js** - Tailwind configuration with token mappings
- **docs/style-migration-500co.md** - Complete migration checklist

### Design Philosophy

**Aesthetic Target:** 500.co

- Calm, confident, global, editorial, premium
- Minimal but bold
- Founder/investor-grade professionalism

**Implementation:**

- Uses our design tokens (not 500.co's colors)
- Maintains all existing content and navigation
- Only visual presentation updated

---

## Typography

### Headlines

- **Font:** REM (editorial, confident)
- **Letter-spacing:** Negative tracking (-0.02em to -0.005em)
- **Line-height:** Tighter (1.2-1.35)
- **Weight:** 600-700

### Body Text

- **Font:** Inter (clean, readable)
- **Letter-spacing:** Slightly negative to neutral
- **Line-height:** Generous (1.6)
- **Weight:** 400-500

---

## Colors

All colors come from `tokens.json`:

- **Background:** `#F9F9F9` (neutral-50)
- **Text:** `#1E1F20` (neutral-950)
- **Text Subtle:** `#40444C` (neutral-600)
- **Brand Amber:** `#FBB931`
- **Brand Orange:** `#FF9424`
- **Link:** `#1282C0`

Use CSS variables: `var(--bg-subtle)`, `var(--text)`, etc.

---

## Spacing

Generous, editorial whitespace:

- Mobile: 2rem base padding
- Tablet: 3-4rem padding
- Desktop: 4-6rem padding
- Consistent 32px gap between header line and content

---

## Components

### Cards

```css
.card {
  background: var(--bg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-chevron);
}
```

### Buttons

- Clean, minimal styling
- Amber focus ring
- Subtle hover states

### Shadows

- Subtle, minimal (not decorative)
- Chevron shadow: `0 1px 2px rgba(64, 68, 76, 0.25)`

---

## Usage

The design system is automatically applied to `index.html`. No changes needed to use it.

To customize:

1. Update `tokens.json` for colors/spacing
2. Update `mds.tokens.json` for fonts/effects
3. Regenerate `tokens.css` if needed
4. Update `tailwind.config.js` if using Tailwind build process

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS variables supported
- Clamp() for responsive typography
- Backdrop blur for navigation elements

---

## Next Steps

See `docs/style-migration-500co.md` for complete migration checklist and verification steps.
