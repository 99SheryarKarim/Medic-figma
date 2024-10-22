import tailwind from 'tailwindcss';
import tailwindConfig from './tailwind.config.js'; // Ensure the file extension is included
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
