import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

/* @type {import('vite').UserConfig} */
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/gllacy' : '',
  plugins: [vue()],
  resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
}));
