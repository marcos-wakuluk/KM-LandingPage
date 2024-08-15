/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const theme = {
  extend: {
    backgroundImage: {
      "custom-black": "url('/public/assets/custom-black.jpg')",
      "custom-blue": "url('/public/assets/custom-blue.jpg')",
    },
    fontSize: {
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
    },
    width: {
      "10p": "10%",
    },
    maxWidth: {
      "30p": "30%",
    },
    keyframes: {
      blink: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 },
      },
      fade: {
        "0%": { opacity: 0 },
        "50%": { opacity: 0.5 },
        "100%": { opacity: 1 },
      },
      pulse: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.1)" },
      },
    },
    animation: {
      blink: "blink 1s infinite",
      fade: "fade 3s infinite",
      pulse: "pulse 1.5s infinite",
    },
  },
};
export const plugins = [];
