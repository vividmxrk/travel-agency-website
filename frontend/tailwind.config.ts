import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: '#0F766E', accent: '#F59E0B' }
    }
  },
  plugins: []
};

export default config;
