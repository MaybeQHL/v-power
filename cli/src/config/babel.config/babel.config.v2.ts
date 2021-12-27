import { ConfigAPI } from '@babel/core';

module.exports = function (api?: ConfigAPI, options?: any) {
  if (api) {
    api.cache.never();
  }

  const { BABEL_MODULE, NODE_ENV } = process.env;
  const isTest = NODE_ENV === 'test';
  const useESModules = BABEL_MODULE !== 'commonjs' && !isTest;

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: useESModules ? false : 'commonjs',
        },
      ],
      [
        '@vue/babel-preset-jsx',
        {
          vModel: false,
          compositionAPI: true,
          functional: false,
        },
      ],
      '@babel/preset-typescript',
      require('../../compiler/babel-preset-vue-ts'),
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          useESModules,
        },
      ],
      [
        'import',
        {
          libraryName: 'vant',
          libraryDirectory: useESModules ? 'es' : 'lib',
          style: true,
        },
        'vant',
      ],
      '@babel/plugin-transform-object-assign',
      [
        require.resolve('@vue/babel-plugin-jsx'),
        {
          enableObjectSlots: options.enableObjectSlots,
        },
      ],
    ],
  };
};

export default module.exports;
