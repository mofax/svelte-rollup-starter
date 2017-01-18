import svelte from 'rollup-plugin-svelte';

export default {
  entry: 'main.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    svelte()
  ]
};