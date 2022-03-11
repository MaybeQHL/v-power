import { compileSfc as compileSfcV2 } from './compile-sfc-v2';
import { compileSfc as compileSfcV3 } from './compile-sfc-v3';

export function compileSfc(filePath: string) {
  // console.log('compileSfc BUILD_VERSION :', process.env.BUILD_VERSION);
  return process.env.BUILD_VERSION == 'v2'
    ? compileSfcV2(filePath)
    : compileSfcV3(filePath);
}
