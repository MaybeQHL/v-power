// @ts-nocheck

/**
 * get vue mode
 * @returns
 */
const getMode = () => {
  const vue = require('vue');
  const { version } = vue;
  const isv2 = +version.split('.')[0] === 2;
  const mode = isv2 ? 'v2' : 'v3';
  return mode;
};

module.exports = {
  presets: [
    // [
    //   getMode() == 'v2' ? '@vant/cli2/preset' : '@vant/cli3/preset',
    //   {
    //     loose: process.env.BUILD_TARGET === 'package',
    //     enableObjectSlots: true,
    //   },
    // ]
    process.env.MODE == 'site'
      ? [
          '@vant/cli/preset.js',
          {
            loose: process.env.BUILD_TARGET === 'package',
            enableObjectSlots: true,
          },
        ]
      : [
          './cli/preset.js',
          {
            loose: process.env.BUILD_TARGET === 'package',
            enableObjectSlots: true,
          },
        ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
  ],
};
