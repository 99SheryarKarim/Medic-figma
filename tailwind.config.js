// tailwind.config.js
export default {
  content: [
    "./index.html", 
    "./src/**/*.{svelte,js,ts}" // Adjusted to cover Svelte and JS/TS files
  ],
  theme: {
    extend: {}, // Extend theme here if needed
  },
  plugins: [],
  darkMode: 'media', // Optional: Can set to 'media' or 'class' if you want dark mode handling
};
