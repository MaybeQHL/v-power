# 国际化

### 介绍

Vant 采用中文作为默认语言，同时支持多语言切换，请按照下方教程进行国际化设置。

## 使用方法

### 多语言切换

Vant 通过 Locale 组件实现多语言支持，使用 `Locale.use` 方法可以切换当前使用的语言。

```js
import { Locale } from '@maybecode/v-power';
// 引入英文语言包
import enUS from '@maybecode/v-power/v3/es/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### 覆盖语言包

通过 `Locale.add` 方法可以实现文案的修改和扩展，示例如下：

```js
import { Locale } from '@maybecode/v-power';
const messages = {
  'zh-CN': {
     vpList: {
      text: '你好',
    },
  },
};

Locale.add(messages);
```

### 语言包

目前支持的语言:

| 语言     | 文件名 |
| -------- | ------ |
| 简体中文 | zh-CN  |
| 英语     | en-US  |

## 常见问题

### 业务代码如何实现国际化？

可以使用 [vue-i18n](https://github.com/kazupon/vue-i18n) 来实现。

### 以 CDN 形式引入时，如何使用语言包？

目前没有提供 CDN 形式的语言包，可以手动拷贝语言包的内容来使用。

### 语言包中不包含 Sku 组件？

语言包中默认不包含 Sku 业务组件的语言配置，因此如果有 Sku 组件的国际化需求，请自行配置国际化文案。
