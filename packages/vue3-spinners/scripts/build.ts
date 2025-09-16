import { compileVueSFC } from 'compile-vue-sfc';
import { join } from 'desm';
import { execaCommandSync as exec } from 'execa';
import { globbySync } from 'globby';

await compileVueSFC({
	declarations: true,
	outDir: 'dist',
	files: globbySync(['./src/spinners/*.vue']),
	projectRootPath: join(import.meta.url, '../src'),
});

exec('tsc');
