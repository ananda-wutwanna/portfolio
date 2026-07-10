import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme colors are CSS variables (RGB channels) so the palette can
        // switch between light and dark — see globals.css :root / [data-theme].
        paper: 'rgb(var(--c-paper) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        subink: 'rgb(var(--c-subink) / <alpha-value>)',
        hairline: 'rgb(var(--c-hairline) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        'accent-soft': 'rgb(var(--c-accent-soft) / <alpha-value>)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,20,0.04), 0 12px 32px -18px rgba(16,24,20,0.18)',
        glow: '0 0 0 1px rgba(10,125,69,0.18), 0 22px 50px -24px rgba(16,24,20,0.28)',
      },
      fontFamily: {
        // Latin faces come first; IBM Plex Sans Thai is the shared Thai
        // fallback in every stack so all Thai text renders in one font.
        display: [
          'var(--font-space-grotesk)',
          'var(--font-inter)',
          'var(--font-ibm-plex-thai)',
          'system-ui',
          'sans-serif',
        ],
        sans: [
          'var(--font-inter)',
          'var(--font-ibm-plex-thai)',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'var(--font-jetbrains-mono)',
          'var(--font-ibm-plex-thai)',
          'ui-monospace',
          'monospace',
        ],
      },
      maxWidth: {
        page: '1180px',
      },
      letterSpacing: {
        label: '0.18em',
      },
      keyframes: {
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};

export default config;
