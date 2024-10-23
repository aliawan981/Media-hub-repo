/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: ' #FFFFFF',
        external: '#F4F4F4',
        500: '#000000',
        300: '#1E2832',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        amstelvar: ['AmstelvarAlpha', 'serif'],
      },
      backgroundImage: {
        'bg-gallery': "url('/img/gallery-banner.png')",
      },
    },
  },
  plugins: [],
};
