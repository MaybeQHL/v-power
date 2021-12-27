import { compileJs as compileJsV2 } from './compile-js-v2';
import { compileJs as compileJsV3 } from './compile-js-v3';

export function compileJs(filePath: string) {
  // return process.env.BUILD_VERSION == 'v2' ?
  //     compileJsV2(filePath) :
  //     compileJsV3(filePath);
  return compileJsV3(filePath);
}
