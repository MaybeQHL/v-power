// @ts-nocheck

const vue = require('vue');
const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');
const fse = require('fs-extra');

async function switchVersion() {
  if (process.env.BUILD_VERSION) return;
  const { version } = vue;
  const isVue2 = +version.split('.')[0] == 2;
  console.log('vue version:', version.split('.')[0])

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

  if (isVue2) {

  } else {

  }
  const jsonPath = path.join(__dirname, '../package.json');

  fse.writeJsonSync(jsonPath, newPkg);


  console.log('[v-power] Switch main field for Vue ' + vue.version);
}

async function init() {
  switchVersion();
}

init();
