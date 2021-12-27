import { removeSync, remove } from 'fs-extra';
import { join } from 'path';
import {
  // ES_DIR,
  // LIB_DIR,
  BASE_LIB_CWD,
  DIST_DIR,
  VETUR_DIR,
  SITE_DIST_DIR,
  getEsDir,
  getLibDir,
} from '../common/constant';

export async function clean() {
  await Promise.all([
    // remove(getEsDir()),
    // remove(getLibDir()),
    remove(BASE_LIB_CWD),

    remove(DIST_DIR),
    remove(VETUR_DIR),
    remove(SITE_DIST_DIR),
  ]);
}
