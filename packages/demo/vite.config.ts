import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
	base: '/vue3-spinners/',
	plugins: [
		vue({
			reactivityTransform: true,
		}),
		WindiCSS(),
	],

});
