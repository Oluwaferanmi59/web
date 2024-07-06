// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./*.html'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'public', // Specify the output directory
  },
});
