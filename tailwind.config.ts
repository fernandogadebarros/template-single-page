import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      lg: '1110px',
    },
    extend: {
      maxWidth: {
        600: '37.5rem',
      },
      fontSize: {
        '4xl': '2.5rem', // 40px
        '5xl': '3.5rem', // 56px
      },
      colors: {
        full: {
          purple: '#755CDE',
          orange: '#F6A560',
          pink: '#F39E9E',
          tomato: '#EB7565',
          green: '#61C4B7',
          wine: '#552049',
        },
        write: {
          dark: '#030303',
          brown: '#7A746E',
          light: '#FFF7F0',
        },
      },
    },
  },
  plugins: [],
};
export default config;
