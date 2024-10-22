// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],  // Use 'content' instead of 'purge'
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: false,  // Optional, 'false' is the default
};
