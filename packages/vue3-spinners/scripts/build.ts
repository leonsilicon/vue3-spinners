import { compileVueSFC } from 'compile-vue-sfc';
import { join } from 'desm';
import { execaCommandSync as exec } from 'execa';
import { globbySync } from 'globby';
import { chProjectDir, copyPackageFiles, rmDist } from 'lion-system';

chProjectDir(import.meta.url);
rmDist();

await compileVueSFC({
	declarations: true,
	outDir: 'dist',
	files: globbySync(['./src/spinners/*.vue']),
	projectRootPath: join(import.meta.url, '../src'),
});

exec('tsc');
exec('tsc-alias');
await copyPackageFiles();
