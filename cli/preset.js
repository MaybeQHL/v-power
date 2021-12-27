// @ts-nocheck
const babelConfig =
  process.env.BUILD_VERSION == 'v2'
    ? require('./lib/config/babel.config/babel.config.v2')
    : require('./lib/config/babel.config/babel.config.v3');

module.exports = (api, options) => babelConfig(api, options);
