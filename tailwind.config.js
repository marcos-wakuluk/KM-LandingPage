/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const theme = {
  extend: {
    backgroundImage: {
      'custom-black': "url('/public/assets/custom-black.jpg')",
      'custom-blue': "url('/public/assets/custom-blue.jpg')",
    },
    fontSize: {
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
    }
  },
};
export const plugins = [];
