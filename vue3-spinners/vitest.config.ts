import { join } from 'desm';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: {
			'~': join(import.meta.url, 'src'),
			'~test': join(import.meta.url, 'test'),
		},
	},
});
