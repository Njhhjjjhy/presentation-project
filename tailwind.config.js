// Tailwind Config - 500.co-inspired design system
// Using design tokens from tokens.json and mds.tokens.json

const tokens = require('./tokens.json');
const mds = require('./mds.tokens.json');

// Helpers
const px = (n) => `${n}px`;

// Pull primary palettes
const light = tokens['Primary/Light'];
const dark = tokens['Primary/Dark'];

const spacingScale = Object.fromEntries(
  Object.entries(light.spacing).map(([k, v]) => [k, px(Number(v))]),
);

// Colors
const colors = {
  neutral: light.color.neutral,
  green: light.color.green,
  amber: light.color.amber,
  orange: light.color.orange,
  base: light.color.base,
  interaction: light.color.interaction,
  brand: light.color.brand,
};

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        // semantic aliases (preferred in UI)
        bg: {
          DEFAULT: colors.base.white, // #FEFEFE from tokens
          subtle: colors.base.background, // #F9F9F9
          inverted: dark.color.base.background,
        },
        text: {
          DEFAULT: colors.neutral['950'] || colors.neutral['900'],
          subtle: colors.neutral['600'],
          muted: colors.neutral['500'],
          inverted: dark.color.neutral['950'],
        },
        border: {
          DEFAULT: colors.neutral['200'],
          subtle: colors.neutral['100'],
        },
        accent: {
          amber: colors.brand.amber, // #FBB931
          orange: colors.brand.orange, // #FF9424
          link: colors.interaction.interactionHyperlink, // #1282C0
        },
        state: {
          success: colors.interaction.interactionSuccess,
          error: colors.interaction.interactionError,
          disabled: colors.interaction.interactionDisabled,
        },

        // raw palettes for convenience
        neutral: colors.neutral,
        green: colors.green,
        amber: colors.amber,
        orange: colors.orange,
      },

      spacing: spacingScale,

      fontFamily: {
        // from mds.tokens.json
        headline: mds.font.headline.family,
        label: mds.font.label.family,
        body: mds.font.body.family,
        logo: mds.font.logo.family,
      },

      boxShadow: {
        // from mds.tokens.json effect.floatingchevron
        chevron: `0 ${mds.effect.floatingchevron.offsetY}px ${mds.effect.floatingchevron.radius}px ${mds.effect.floatingchevron.color}`,
        sm: mds.effect.shadow.sm,
        md: mds.effect.shadow.md,
        lg: mds.effect.shadow.lg,
        xl: mds.effect.shadow.xl,
      },

      borderRadius: {
        // 500.co-like subtle rounding
        sm: mds.borderRadius.sm,
        md: mds.borderRadius.md,
        lg: mds.borderRadius.lg,
        xl: mds.borderRadius.xl,
      },

      maxWidth: {
        // 500.co-like editorial widths
        content: mds.grid.container.maxWidth,
        prose: '72ch',
      },

      // 500.co responsive grid padding
      padding: {
        ...spacingScale,
        'grid-mobile': '16px',
        'grid-tablet': '48px',
        'grid-desktop': '160px',
        'grid-desktop-lg': '320px',
      },
    },
  },
  plugins: [],
};
