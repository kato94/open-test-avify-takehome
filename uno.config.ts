import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['**/**.tsx', './src/index.html'],
  },

  presets: [presetUno()],
});
