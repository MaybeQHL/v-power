import { merge } from 'webpack-merge';
import { join } from 'path';
import { baseConfig } from './webpack.base';
import { WebpackConfig } from '../common/types';
import { getVantConfig, getWebpackConfig, setBuildTarget } from '../common';
import { getLibDir, getEsDir } from '../common/constant';

export function getPackageConfig(isMinify: boolean): WebpackConfig {
  const { name } = getVantConfig();

  setBuildTarget('package');

  return getWebpackConfig(
    merge(baseConfig as any, {
      mode: 'production',
      entry: {
        [name]: join(getEsDir(), 'index.js'),
      },
      stats: 'none',
      output: {
        path: getLibDir(),
        library: name,
        libraryTarget: 'umd',
        filename: isMinify ? '[name].min.js' : '[name].js',
        umdNamedDefine: true,
        // https://github.com/webpack/webpack/issues/6522
        globalObject: "typeof self !== 'undefined' ? self : this",
      },
      externals: {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue',
        },
      },
      performance: false,
      optimization: {
        minimize: isMinify,
      },
    })
  );
}
