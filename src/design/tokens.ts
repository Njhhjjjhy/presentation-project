/**
 * Design Tokens - TypeScript Map
 * Derived from tokens.json and mds.tokens.json
 *
 * This file provides type-safe access to design tokens
 * for use in TypeScript/JavaScript code.
 */

export const tokens = {
  colors: {
    neutral: {
      50: '#F9F9F9',
      100: '#EDEEF1',
      200: '#D8DBDF',
      300: '#B6BAC3',
      400: '#8E95A2',
      500: '#6B7280',
      600: '#40444C',
      700: '#2B2D31',
      800: '#1E1F20',
      900: '#0F1011',
      950: '#1E1F20',
    },
    green: {
      50: '#F0FDF4',
      100: '#DCFCE7',
      200: '#BBF7D0',
      300: '#86EFAC',
      400: '#4ADE80',
      500: '#19B64E',
      600: '#16A34A',
      700: '#15803D',
      800: '#166534',
      900: '#14532D',
      950: '#052E16',
    },
    amber: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBB931',
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F',
      950: '#451A03',
    },
    orange: {
      50: '#FFF7ED',
      100: '#FFEDD5',
      200: '#FED7AA',
      300: '#FDBA74',
      400: '#FF9424',
      500: '#F97316',
      600: '#EA580C',
      700: '#C2410C',
      800: '#9A3412',
      900: '#7C2D12',
      950: '#431407',
    },
    base: {
      white: '#FEFEFE',
      background: '#F9F9F9',
      black: '#1E1F20',
    },
    interaction: {
      hyperlink: '#1282C0',
      success: '#19B64E',
      error: '#D03131',
      disabled: '#8E8F8F',
    },
    brand: {
      amber: '#FBB931',
      orange: '#FF9424',
    },
  },
  spacing: {
    0: '0',
    1: '4',
    2: '8',
    3: '12',
    4: '16',
    5: '20',
    6: '24',
    8: '32',
    10: '40',
    12: '48',
    16: '64',
    20: '80',
    24: '96',
    32: '128',
  },
  responsiveGrids: {
    mobile: {
      padding: '16',
      gutter: '16',
    },
    tablet: {
      padding: '48',
      gutter: '24',
    },
    desktop: {
      padding: '160',
      gutter: '32',
    },
    desktopLarge: {
      padding: '320',
      gutter: '32',
    },
  },
  fonts: {
    headline: {
      family: ['REM', 'system-ui', 'sans-serif'],
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    label: {
      family: ['REM', 'system-ui', 'sans-serif'],
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
    },
    body: {
      family: ['Noto Sans JP', 'Inter', 'system-ui', 'sans-serif'],
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
    },
    logo: {
      family: ['MohaLogo', 'REM', 'system-ui', 'sans-serif'],
    },
  },
  effects: {
    shadows: {
      sm: '0 1px 2px rgba(64, 68, 76, 0.1)',
      md: '0 4px 6px rgba(64, 68, 76, 0.1)',
      lg: '0 10px 15px rgba(64, 68, 76, 0.1)',
      xl: '0 20px 25px rgba(64, 68, 76, 0.1)',
      chevron: '0 1px 2px rgba(64, 68, 76, 0.25)',
    },
  },
  borderRadius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
} as const;

/**
 * Helper function to get pixel value from spacing token
 */
export function spacing(scale: keyof typeof tokens.spacing): string {
  return `${tokens.spacing[scale]}px`;
}

/**
 * Helper function to get pixel value from responsive grid padding
 */
export function gridPadding(breakpoint: keyof typeof tokens.responsiveGrids): string {
  return `${tokens.responsiveGrids[breakpoint].padding}px`;
}

/**
 * Helper function to get pixel value from responsive grid gutter
 */
export function gridGutter(breakpoint: keyof typeof tokens.responsiveGrids): string {
  return `${tokens.responsiveGrids[breakpoint].gutter}px`;
}
