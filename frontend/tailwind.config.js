/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#EFA53F",
      "primary-200": "#F3B967",
      "primary-100": "#F6CC91",
      "primary-50": "#FDF5E8",
      secondary: "#383238",
      gray: "#DBDBDB",
      background: "#141214",
      black: "#000",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "8rem",
      },
      center: true,
    },
  },
  plugins: [],
};
