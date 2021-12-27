# Quick start

### install

```bash
# npm
npm i @maybecode/v-power
```

```bash
# yarn
yarn add @maybecode/v-power
```

### hint

> v-power will automatically switch the exported version based on the vUE version you have installed. If this does not work, you can switch the exported version as follows:

```
node ./node_modules/@maybecode/v-power/scripts/postinstall.js
```

## Imported components

### Mode 1. Automatic Import on Demand (recommended)

#### babel-plugin-import

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) is a Babel plug-in that automatically converts the way import is written to import on demand during compilation.

```js
// babel.config.js

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
  plugins: [
    [
      'import',
      {
        libraryName: '@maybecode/v-power',
        libraryDirectory: `dist-lib/${getMode()}`,
        style: (name, file) => {
          return `/${name}/style`;
        },
      },
    ],
  ],
};
```

#### vite

```
To be perfect...
```

```js
// Then you can introduce the v-power component directly into your code
// The plug-in automatically converts the code to the on-demand import form of method 2
import { Container } from '@maybecode/v-power';
```

### Method 2: Manually import on demand

You can manually import the required components without using plug-ins.

```js
// v3
import Container from '@maybecode/v-power/dist-lib/v3/lib/container';
import '@maybecode/v-power/dist-lib/v3/lib/container/style';
```

```js
// v2
import Container from '@maybecode/v-power/dist-lib/v2/lib/container';
import '@maybecode/v-power/dist-lib/v2/lib/container/style';
```

### Method 3: Import all components

v-power supports importing all components at once, which increases the size of the code package and is therefore not recommended.

```js
// v3
import { createApp } from 'vue-demi';
import v-power from '@maybecode/v-power';
import '@maybecode/v-power/dist-lib/v3/lib/index.css';

const app = createApp();
app.use(v-power);
```

```js
// v2
import Vue from 'vue-demi';
import v-power from '@maybecode/v-power';
import '@maybecode/v-power/dist-lib/v2/lib/index.css';

Vue.use(v-power);
```
