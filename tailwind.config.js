/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const theme = {
  extend: {
    backgroundImage: {
      'custom-black': "url('/public/assets/custom-black.jpg')",
      'custom-blue': "url('/public/assets/custom-blue.jpg')",
    }
  },
};
export const plugins = [];
