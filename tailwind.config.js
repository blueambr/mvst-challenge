/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: { container: false },
  theme: {
    colors: {
      bg: "#FBFAF8",
      border: "#E7E3D9",
      primary: "#8E9882",
      secondary: "#C69F66",
      text: "#615F5B",
      title: "#32332E",
      transparent: "transparent",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
