import { ConfigAPI } from '@babel/core';

type PresetOption = {
  loose?: boolean;
  enableObjectSlots?: boolean;
};

module.exports = function (api?: ConfigAPI, options: PresetOption = {}) {
  if (api) {
    api.cache.never();
  }

  const { BABEL_MODULE, NODE_ENV } = process.env;
  const isTest = NODE_ENV === 'test';
  const useESModules = BABEL_MODULE !== 'commonjs' && !isTest;

  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          modules: useESModules ? false : 'commonjs',
          loose: options.loose,
        },
      ],
      [
        require.resolve('@vue/babel-preset-jsx'),
        {
          vModel: false,
          compositionAPI: true,
          functional: false,
        },
      ],
      require.resolve('@babel/preset-typescript'),
      require('../../compiler/babel-preset-vue-ts'),
    ],
    plugins: [
      [
        require.resolve('babel-plugin-import'),
        {
          libraryName: 'vant',
          libraryDirectory: useESModules ? 'es' : 'lib',
          style: true,
        },
        'vant',
      ],
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
