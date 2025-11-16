/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app/**/*.{vue,js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Root colors
        primary: "#ffc700",
        secondary: "#454852",
        tertiary: "#2f3547",

        background: "var(--main-bg-color)",

        // Primary (Yellow/Gold scale)
        "primary-100": "#fff3d5",
        "primary-200": "#ffe8ab",
        "primary-300": "#ffdd80",
        "primary-400": "#ffd252",
        "primary-500": "#ffc700",
        "primary-600": "#c79b12",
        "primary-700": "#917217",
        "primary-800": "#604b16",
        "primary-900": "#322811",

        // Secondary (Gray/Dark scale)
        "secondary-100": "#d7d7da",
        "secondary-200": "#b0b1b6",
        "secondary-300": "#8b8c93",
        "secondary-400": "#676972",
        "secondary-500": "#454852",
        "secondary-600": "#383a42",
        "secondary-700": "#2b2d32",
        "secondary-800": "#1f2023",
        "secondary-900": "#131415",

        // Neutral (Grayscale)
        "neutral-0": "#ffffff",
        "neutral-100": "#f0f0f0",
        "neutral-200": "#d2d2d2",
        "neutral-300": "#b1b1b1",
        "neutral-400": "#929292",
        "neutral-500": "#5d5d5d",
        "neutral-600": "#353535",
        "neutral-700": "#2c2c2c",
        "neutral-800": "#252525",
        "neutral-900": "#1f1f1f",
      },
      spacing: {
        // Global Dimensions
        "dm-2": "2px",
        "dm-4": "4px",
        "dm-8": "8px",
        "dm-10": "10px",
        "dm-12": "12px",
        "dm-14": "14px",
        "dm-16": "16px",
        "dm-18": "18px",
        "dm-20": "20px",
        "dm-24": "24px",
        "dm-28": "28px",
        "dm-32": "32px",
        "dm-36": "36px",
        "dm-40": "40px",
        "dm-44": "44px",
        "dm-48": "48px",
        "dm-52": "52px",
        "dm-56": "56px",
        "dm-64": "64px",
        "dm-72": "72px",
        "dm-80": "80px",
        "dm-88": "88px",
        "dm-96": "96px",
        "dm-112": "112px",
        "dm-128": "128px",
        "dm-144": "144px",
        "dm-160": "160px",
        "dm-184": "184px",
        "dm-200": "200px",
        "dm-240": "240px",
        "dm-1000": "1000px",
      },

      fontFamily: {
        primary: ["var(--font-family-primary)"],
      },
      fontSize: {
        "dm-16": ["16px", { lineHeight: "24px" }],
      },
      lineHeight: {
        "dm-24": "24px",
      },
    },
  },
  plugins: [],
};
