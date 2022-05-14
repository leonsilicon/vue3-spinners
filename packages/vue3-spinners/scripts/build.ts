import { compileVueSFC } from 'compile-vue-sfc';
import { join } from 'desm';
import { execaCommandSync as exec } from 'execa';
import { globbySync } from 'globby';
import { chProjectDir, copyPackageFiles, rmDist } from 'lion-system';

chProjectDir(import.meta.url);
rmDist();

await compileVueSFC({
	declarations: true,
	files: globbySync(['./src/spinners/*.vue']),
	projectRootPath: join(import.meta.url, '../..'),
});

exec('tsc');
exec('tsc-alias');

for (const artifactFile of globbySync(['./src/components/*.{d.ts,js}'])) {
	console.log(artifactFile);
	// fs.rmSync(artifactFile, { force: true });
}

await copyPackageFiles();
