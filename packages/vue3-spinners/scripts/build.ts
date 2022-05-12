import { compileVueSFC } from 'compile-vue-sfc';
import { join } from 'desm';
import { execaCommandSync as exec } from 'execa';
import { globbySync } from 'globby';
import { chProjectDir, copyPackageFiles, rmDist } from 'lion-system';

chProjectDir(import.meta.url);
rmDist();

await Promise.all(
	globbySync(['./src/spinners/*.vue']).map(async (sfcFile) => {
		await compileVueSFC({
			declarations: true,
			write: true,
			files: sfcFile,
			projectRootPath: join(import.meta.url, '../..'),
		});
	})
);

exec('tsc');
exec('tsc-alias');

for (const artifactFile of globbySync(['./src/components/*.{d.ts,js}'])) {
	console.log(artifactFile);
	// fs.rmSync(artifactFile, { force: true });
}

await copyPackageFiles();
