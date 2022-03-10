# 快速上手

### 安装

```bash
# npm

# vue2
npm i vant@2 @vue/composition-api @maybecode/v-power 
 
# vue3 
npm i vant@3 @maybecode/v-power

```

```bash
# yarn

# vue2
yarn add vant@2 @vue/composition-api @maybecode/v-power
 
# vue3 
yarn add vant@3 @maybecode/v-power

```

### 提示

> v-power 将根据您安装的 vue 版本自动切换导出版本，如果不工作，您可以按以下方式切换:

```
node ./node_modules/@maybecode/v-power/scripts/postinstall.js
```

## 引入组件

### 方式一.自动按需引入(推荐)

#### babel-plugin-import

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

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
        libraryDirectory: `dist-lib/${getMode()}/es`,
        style: (name, file) => {
          return `${name}/index.css`;
        },
      },
    ],
  ],
};

```

#### vite

```
待完善...
```

```js
// 接着你可以在代码中直接引入 v-power 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Container } from '@maybecode/v-power';
```

### 方式二.手动按需导入

在不使用插件的情况下，可以手动引入需要的组件。

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

### 方式三. 导入所有组件

v-power 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。

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
