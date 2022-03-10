

/**
 * get vue mode
 * @returns
 */
const getMode = () => {
  const vue = require('vue');
  const version = vue.version;
  const isv2 = +version.split('.')[0] === 2;
  const mode = isv2 ? 'v2' : 'v3';
  return mode;
};

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: '@maybecode/v-power',
        libraryDirectory: `dist-lib/${getMode()}/es`,
        style: (name, file) => {
          return `${name}/index.css`;
        },
      },
    ],
  ],
};
