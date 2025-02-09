import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

/** @type {import('vite').UserConfig} */
export default defineConfig(({ command }) => ({
  base: command === 'build' ? 'gllacy' : '',
  plugins: [vue()],
}));
