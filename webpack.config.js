const { join } = require('path');

module.exports = function () {
  if (process.env.BUILD_TARGET === 'package') {
    return {};
  }

  return {
    devtool:
      process.env.BUILD_TARGET === 'package'
        ? 'cheap-module-eval-source-map'
        : 'cheap-module-source-map',
    entry: {
      'site-mobile': ['./docs/site/entry'],
      'site-desktop': ['./docs/site/entry'],
    },
    externals: ['vant'],
    resolve: {
      alias: {
        '@demo': join(__dirname, 'docs', 'site'),
      },
    },
  };
};
