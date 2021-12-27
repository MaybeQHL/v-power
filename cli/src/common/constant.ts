import { get } from 'lodash';
import { existsSync } from 'fs-extra';
import { join, dirname, isAbsolute } from 'path';

function findRootDir(dir: string): string {
  if (existsSync(join(dir, 'vant.config.js'))) {
    return dir;
  }

  const parentDir = dirname(dir);
  if (dir === parentDir) {
    return dir;
  }

  return findRootDir(parentDir);
}

// Colors
export const GREEN = '#07c160';

// Root paths
export const CWD = process.cwd();
export const ROOT = findRootDir(CWD);
// export const ES_DIR = join(ROOT, 'es');
// export const LIB_DIR = join(ROOT, 'lib');
export const BASE_LIB = 'dist-lib';
export const BASE_LIB_CWD = join(ROOT, BASE_LIB);

export const ES_DIR_V2 = join(ROOT, BASE_LIB, 'v2', 'es');
export const ES_DIR_V3 = join(ROOT, BASE_LIB, 'v3', 'es');

export const LIB_DIR_V2 = join(ROOT, BASE_LIB, 'v2', 'lib');
export const LIB_DIR_V3 = join(ROOT, BASE_LIB, 'v3', 'lib');

// export const ES_DIR = process.env.BUILD_VERSION == 'v2' ? ES_DIR_V2 : ES_DIR_V3;

export const getEsDir = () =>
  process.env.BUILD_VERSION == 'v2' ? ES_DIR_V2 : ES_DIR_V3;
export const getLibDir = () =>
  process.env.BUILD_VERSION == 'v2' ? LIB_DIR_V2 : LIB_DIR_V3;

export const DOCS_DIR = join(ROOT, 'docs');
export const VETUR_DIR = join(ROOT, 'vetur');
export const SITE_DIST_DIR = join(ROOT, 'site');
export const VANT_CONFIG_FILE = join(ROOT, 'vant.config.js');
export const PACKAGE_JSON_FILE = join(ROOT, 'package.json');
export const ROOT_WEBPACK_CONFIG_FILE = join(ROOT, 'webpack.config.js');
export const ROOT_POSTCSS_CONFIG_FILE = join(ROOT, 'postcss.config.js');
export const CACHE_DIR = join(ROOT, 'node_modules/.cache');

// Relative paths
export const DIST_DIR = join(__dirname, '../../dist');
export const CONFIG_DIR = join(__dirname, '../config');

// Dist files
export const PACKAGE_ENTRY_FILE = join(DIST_DIR, 'package-entry.js');
export const PACKAGE_STYLE_FILE = join(DIST_DIR, 'package-style.css');
export const SITE_MOBILE_SHARED_FILE = join(DIST_DIR, 'site-mobile-shared.js');
export const SITE_DESKTOP_SHARED_FILE = join(
  DIST_DIR,
  'site-desktop-shared.js'
);
export const STYLE_DEPS_JSON_FILE = join(DIST_DIR, 'style-deps.json');

// Config files
export const BABEL_CONFIG_FILE = join(CONFIG_DIR, 'babel.config.js');
export const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js');
export const JEST_SETUP_FILE = join(CONFIG_DIR, 'jest.setup.js');
export const JEST_CONFIG_FILE = join(CONFIG_DIR, 'jest.config.js');
export const JEST_TRANSFORM_FILE = join(CONFIG_DIR, 'jest.transform.js');
export const JEST_FILE_MOCK_FILE = join(CONFIG_DIR, 'jest.file-mock.js');
export const JEST_STYLE_MOCK_FILE = join(CONFIG_DIR, 'jest.style-mock.js');

export const SCRIPT_EXTS = ['.js', '.jsx', '.vue', '.ts', '.tsx'];
export const STYLE_EXTS = ['.css', '.less', '.scss'];

export function getPackageJson() {
  delete require.cache[PACKAGE_JSON_FILE];

  return require(PACKAGE_JSON_FILE);
}

export function getVantConfig() {
  delete require.cache[VANT_CONFIG_FILE];

  try {
    return require(VANT_CONFIG_FILE);
  } catch (err) {
    return {};
  }
}

function getSrcDir() {
  const vantConfig = getVantConfig();
  const srcDir = get(vantConfig, 'build.srcDir');

  if (srcDir) {
    if (isAbsolute(srcDir)) {
      return srcDir;
    }

    return join(ROOT, srcDir);
  }

  return join(ROOT, 'src');
}

export const SRC_DIR = getSrcDir();
export const STYLE_DIR = join(SRC_DIR, 'style');
