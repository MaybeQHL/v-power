import execa from 'execa';
import { join } from 'path';
import { consola } from './logger';
import { execSync } from 'child_process';
import { writeJSON } from 'fs-extra';
import pkg from '../../package.json';

let hasYarnCache: boolean;

export function hasYarn() {
  if (hasYarnCache === undefined) {
    try {
      execSync('yarn --version', { stdio: 'ignore' });
      hasYarnCache = true;
    } catch (e) {
      hasYarnCache = false;
    }
  }

  return hasYarnCache;
}

export async function installDependencies() {
  consola.info('Install Dependencies\n');

  try {
    const manager = hasYarn() ? 'yarn' : 'npm';

    // pkg.dependencies.vue = process.env.BUILD_VERSION == 'v2' ? '^2.0.0' : '^3.0.0';
    // await writeJSON(join(__dirname, '../../package.json'), pkg);

    await execa(manager, ['install', '--prod=false'], {
      stdio: 'inherit',
    });

    console.log('');
  } catch (err) {
    console.log(err);
    throw err;
  }
}
