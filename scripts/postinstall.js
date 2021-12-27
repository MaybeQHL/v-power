// @ts-nocheck

const vue = require('vue');
const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');
const fse = require('fs-extra');

function switchVersion() {
  const { version } = vue;
  const isVue2 = +version.split('.')[0] === 2;

  const baseDir = `dist-lib/${isVue2 ? 'v2' : 'v3'}`;

  const json = {
    main: `${baseDir}/lib/index.js`,
    module: `${baseDir}/es/index.js`,
    style: `${baseDir}/lib/index.css`,
    types: `${baseDir}/lib/index.d.ts`,
    exports: {
      '.': {
        import: `./${baseDir}/es/index.js`,
        require: `./${baseDir}/lib/v-power.js`,
        types: `./${baseDir}/lib/index.d.ts`,
      },
    },
    unpkg: `${baseDir}/lib/v-power.min.js`,
    jsdelivr: `${baseDir}/lib/v-power.min.js`,
  };

  const newPkg = Object.assign(pkg, json);
  newPkg.dependencies.vant = isVue2 ? '^2.0.0' : '^3.0.0';

  const jsonPath = path.join(__dirname, '../package.json');

  fse.writeJsonSync(jsonPath, newPkg);

  console.log('[v-power] Switch main field for Vue ' + vue.version);
}

async function init() {
  switchVersion();
}

init();
