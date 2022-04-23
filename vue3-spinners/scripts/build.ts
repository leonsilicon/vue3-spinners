import { execaCommandSync as exec } from 'execa';
import {
	chProjectDir,
	copyPackageFiles,
	getProjectDir,
	rmDist,
} from 'lion-system';
import * as fs from 'node:fs';
import * as path from 'node:path';

chProjectDir(import.meta.url);
rmDist();
exec('tsc');
exec('tsc-alias');
await copyPackageFiles({
	additionalFiles: ['src/spinners.css'],
	commonjs: { external: /\/vue\// },
});
const projectDir = getProjectDir(import.meta.url, { monorepoRoot: true });
fs.cpSync(path.join(projectDir, 'assets'), 'dist/assets', { recursive: true });
