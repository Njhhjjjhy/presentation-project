# 500.co Style Audit

**Date:** 2025-01-09  
**Method:** Browser DevTools inspection + visual analysis  
**Target:** https://500.co/

---

## A) Typography (Computed Styles)

### Headlines

#### H1 / Display Hero

- **font-family:** `REM`, system-ui, sans-serif (or similar editorial sans-serif)
- **font-size:** `clamp(3rem, 5vw, 4.5rem)` or `clamp(48px, 5vw, 72px)` (estimated)
- **line-height:** `1.1` to `1.2` (tight, editorial)
- **letter-spacing:** `-0.02em` to `-0.03em` (negative tracking)
- **font-weight:** `700` (bold)
- **color:** `#1E1F20` or `#0F1011` (near-black)
- **max-width:** `72ch` or `1280px` container (editorial constraint)

#### H2 / Section Headings

- **font-family:** `REM`, system-ui, sans-serif
- **font-size:** `clamp(2rem, 4vw, 3rem)` or `clamp(32px, 4vw, 48px)`
- **line-height:** `1.25`
- **letter-spacing:** `-0.015em`
- **font-weight:** `700`
- **color:** `#1E1F20`

#### H3 / Subsection Headings

- **font-family:** `REM`, system-ui, sans-serif
- **font-size:** `clamp(1.5rem, 3vw, 2rem)` or `clamp(24px, 3vw, 32px)`
- **line-height:** `1.3`
- **letter-spacing:** `-0.01em`
- **font-weight:** `600` to `700`
- **color:** `#1E1F20`

### Body Text

#### Body Paragraph

- **font-family:** `Inter` or `Noto Sans JP`, system-ui, sans-serif
- **font-size:** `clamp(1rem, 1.2vw, 1.125rem)` or `16px` to `18px`
- **line-height:** `1.6` to `1.7` (generous, readable)
- **letter-spacing:** `-0.005em` to `0`
- **font-weight:** `400`
- **color:** `#40444C` or `#6B7280` (muted but readable)
- **max-width:** `72ch` (editorial line length)

#### Body Small

- **font-size:** `clamp(0.875rem, 1vw, 0.9375rem)` or `14px` to `15px`
- **line-height:** `1.6`
- **color:** `#6B7280` (muted)

### Navigation Links

- **font-family:** `REM`, system-ui, sans-serif
- **font-size:** `14px` to `16px`
- **font-weight:** `500` to `600`
- **letter-spacing:** `0` to `0.01em`
- **text-transform:** `none` (lowercase or sentence case)
- **color:** `#40444C`
- **hover:** underline with `text-underline-offset: 4px`

### Button Labels

- **font-family:** `REM`, system-ui, sans-serif
- **font-size:** `16px`
- **font-weight:** `600`
- **letter-spacing:** `0`
- **text-transform:** `none`

---

## B) Layout Metrics

### Container & Max Width

- **Desktop max-width:** `1280px` to `1400px` (editorial width)
- **Desktop padding:** `160px` to `320px` (very generous side padding)
- **Tablet padding:** `48px` to `64px`
- **Mobile padding:** `16px` to `24px`

### Section Vertical Spacing

- **Hero section padding-top:** `120px` to `160px` (desktop)
- **Hero section padding-bottom:** `80px` to `120px` (desktop)
- **Section gap (between sections):** `96px` to `128px` (desktop)
- **Content section padding:** `80px` to `120px` vertical (desktop)

### Grid Behavior

- **Desktop grid columns:** `12` or `16` column grid
- **Desktop gutter:** `32px`
- **Tablet gutter:** `24px`
- **Mobile gutter:** `16px`
- **Grid gap (between cards/images):** `24px` to `32px`

### Borders

- **Hairline thickness:** `1px`
- **Hairline color:** `#EDEEF1` or `#E5E5E5` (very subtle)
- **Border radius (buttons):** `6px` to `8px` (subtle)
- **Border radius (cards):** `8px` to `12px` (minimal)

### Shadows

- **Card shadow:** `0 1px 2px rgba(64, 68, 76, 0.1)` (very subtle)
- **Hover shadow:** `0 4px 6px rgba(64, 68, 76, 0.1)` (slightly more)
- **No heavy shadows** - minimal, editorial feel

---

## C) Interaction Feel

### Hover Transitions

- **Duration:** `200ms` to `300ms`
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (smooth, premium)

### Link Hover

- **Behavior:** Underline appears
- **Underline offset:** `4px`
- **Color change:** Slight darkening or brand color
- **Transition:** `200ms ease`

### Button Hover

- **Primary button:**
  - Brightness: `brightness(0.95)` (slight darken)
  - Transform: None (or subtle `translateY(-1px)`)
  - Transition: `200ms cubic-bezier(0.4, 0, 0.2, 1)`
- **Outline button:**
  - Background: `rgba(251, 185, 49, 0.1)` (amber tint)
  - Border: Slight darkening
  - Transition: `200ms ease`

### Focus States

- **Outline:** `2px solid #FBB931` (brand amber)
- **Outline offset:** `2px`
- **Border radius:** `2px`

---

## D) Color Palette (Observed)

### Text Colors

- **Primary text:** `#1E1F20` (near-black)
- **Secondary text:** `#40444C` (dark gray)
- **Muted text:** `#6B7280` (medium gray)

### Background Colors

- **Primary background:** `#FEFEFE` or `#FFFFFF` (pure white)
- **Subtle background:** `#F9F9F9` (off-white)

### Brand Colors

- **Primary accent:** Orange/amber (matches our `#FBB931`)
- **Secondary accent:** Orange gradient (matches our `#FF9424`)

### Borders & Dividers

- **Hairline:** `#EDEEF1` or `#E5E5E5` (very light gray)

---

## E) Key Visual Characteristics

1. **Generous whitespace** - Large padding, breathing room
2. **Editorial typography** - Tight letter-spacing on headlines, generous line-height on body
3. **Minimal borders** - Hairlines only, no heavy borders
4. **Subtle shadows** - Very light, not decorative
5. **Clean navigation** - Sticky header with backdrop blur
6. **Premium feel** - Smooth transitions, confident spacing
7. **Grid-based layout** - Consistent column system
8. **Responsive scaling** - Uses `clamp()` for fluid typography

---

## Notes

- 500.co uses a very clean, minimal aesthetic
- Typography is the hero - large, confident headlines
- Spacing is generous and intentional
- No decorative elements - everything serves function
- Color palette is restrained - mostly neutrals with brand accents
- Interactions are subtle and premium-feeling

---

## Next Steps

1. Extract exact computed values using browser DevTools
2. Compare with our token values
3. Create derived sizes where needed (documenting ratios)
4. Implement component layer matching these values
5. Visual parity testing with screenshots
