import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffe000',
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-invert-links': 'var(--color-primary)',
              '[class~="lead"]': {
                color: '#fff',
              },

              h3: {
                fontWeight: '600',
              },
              strong: {
                fontWeight: '800',
              },
            },
          ],
        },
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
