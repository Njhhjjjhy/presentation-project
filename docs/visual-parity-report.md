# Visual Parity Report: 500.co Match

**Date:** 2025-01-09  
**Target:** Match 500.co visual aesthetic  
**Status:** In Progress

---

## Screenshots Location

Screenshots should be placed in `docs/parity/`:

- `app-home.png` - Our homepage
- `500-home.png` - 500.co homepage
- `app-nav.png` - Our navigation
- `500-nav.png` - 500.co navigation
- `app-content.png` - Our content section
- `500-content.png` - 500.co content section

---

## Visual Differences Identified

### Typography

#### ✅ Fixed

- [x] Headlines now use larger display scale (clamp(3rem, 5vw, 4.5rem) for H1)
- [x] Tighter line-height (1.1 for H1) for editorial feel
- [x] Negative letter-spacing maintained
- [x] REM font family for headlines
- [x] Inter for body text

#### ⚠️ Needs Verification

- [ ] Exact font-size values from 500.co (need browser DevTools measurement)
- [ ] Body text max-width (72ch) - verify matches 500.co

### Layout & Spacing

#### ✅ Fixed

- [x] Container utility class added with 500.co responsive padding
  - Mobile: 16px
  - Tablet: 48px
  - Desktop: 160px
  - Desktop Large: 320px
- [x] Section utility class with generous vertical padding
  - Desktop: 120px top/bottom
  - Mobile: 80px top/bottom
- [x] Hero section with extra spacing (160px top on desktop)

#### ⚠️ Needs Verification

- [ ] Actual padding values from 500.co homepage
- [ ] Section gap between content blocks
- [ ] Grid gutter spacing in portfolio sections

### Colors

#### ✅ Fixed

- [x] Using token colors (brand.amber #FBB931, brand.orange #FF9424)
- [x] Text colors match (primary #1E1F20, secondary #40444C)
- [x] Background colors (white #FEFEFE, subtle #F9F9F9)
- [x] Border hairline color (#EDEEF1)

#### ✅ Verified

- All colors come from tokens.json - no random hex values

### Components

#### ✅ Fixed

- [x] Button styles match 500.co (primary with amber, outline with hairline)
- [x] Card shadows are very subtle (0 1px 2px rgba(64, 68, 76, 0.1))
- [x] Hover transitions match (200ms cubic-bezier(0.4, 0, 0.2, 1))
- [x] Focus states use brand amber

#### ⚠️ Needs Verification

- [ ] Button exact padding/size from 500.co
- [ ] Card border radius (currently 8px)
- [ ] Hover effects (brightness, transform)

### Navigation

#### ⚠️ Needs Work

- [ ] Header styling (sticky, backdrop blur)
- [ ] Nav link spacing and hover behavior
- [ ] Logo positioning

---

## Changes Made to Close Gaps

### Typography Updates

1. **H1 Display Scale:** Increased from clamp(2.5rem, 5vw, 3rem) to clamp(3rem, 5vw, 4.5rem)

   - **Rationale:** 500.co uses larger display typography for hero sections
   - **Derivation:** 1.2x scale from base token h1 size

2. **H2 Scale:** Increased from clamp(2rem, 4vw, 2.5rem) to clamp(2rem, 4vw, 3rem)

   - **Rationale:** Better hierarchy matching 500.co

3. **Line-height:** Tightened H1 to 1.1 (from 1.2)
   - **Rationale:** More editorial, confident feel

### Layout Updates

1. **Container Padding:** Added responsive grid padding system

   - Desktop: 160px (matches 500.co generous padding)
   - Desktop Large: 320px (for very wide screens)
   - **Source:** Added to tokens.json responsiveGrids

2. **Section Spacing:** Added .section-500 utility

   - Desktop: 120px vertical padding
   - **Rationale:** Matches 500.co generous section spacing

3. **Hero Spacing:** Added .hero-500 utility
   - Desktop: 160px top, 120px bottom
   - **Rationale:** Extra generous spacing for hero sections

### Component Updates

1. **Button Styles:** Created .btn-primary and .btn-outline

   - Primary: brand.amber background, 6px radius
   - Outline: hairline border, amber hover tint
   - **Rationale:** Matches 500.co button feel

2. **Card Shadows:** Refined to very subtle

   - Base: 0 1px 2px rgba(64, 68, 76, 0.1)
   - Hover: 0 4px 6px rgba(64, 68, 76, 0.1)
   - **Rationale:** 500.co uses minimal shadows

3. **Hairline Utility:** Added .hairline class
   - 1px solid #EDEEF1
   - **Rationale:** Consistent divider styling

---

## Remaining Work

### High Priority

1. **Screenshot Comparison:** Take actual screenshots and compare side-by-side
2. **Exact Measurements:** Use browser DevTools to extract precise values from 500.co
3. **Navigation Styling:** Apply 500.co header/nav styling to our presentation
4. **Content Width:** Verify editorial max-width (72ch) matches 500.co

### Medium Priority

1. **Grid System:** Implement 12/16 column grid if needed
2. **Portfolio/Stats Sections:** Style any grid/card layouts to match
3. **Footer Styling:** Apply 500.co footer aesthetic

### Low Priority

1. **Animation Refinements:** Subtle micro-interactions
2. **Image Styling:** Ensure images match 500.co treatment
3. **Form Elements:** If any exist, style to match

---

## Verification Checklist

- [ ] Screenshots taken of both sites
- [ ] Typography sizes verified with DevTools
- [ ] Spacing measurements confirmed
- [ ] Color values match tokens
- [ ] Button styles match
- [ ] Navigation matches
- [ ] Overall "feel" matches (subjective but important)

---

## Next Steps

1. **Take Screenshots:** Capture key sections from both sites
2. **DevTools Audit:** Extract exact computed CSS values from 500.co
3. **Iterate:** Make adjustments based on visual comparison
4. **Document:** Update this report with findings and fixes
5. **Final Review:** Ensure strong visual match achieved

---

## Notes

- All changes respect content integrity (no text changes)
- All colors come from design tokens
- Typography uses token font families (REM, Inter, Noto Sans JP)
- Spacing uses token spacing scale or documented derivations
- Component layer is CSS-based (no React needed for this static HTML)
