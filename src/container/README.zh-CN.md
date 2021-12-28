# Container 容器

### 介绍

Container 是一个容器组件

> 自动占满整个屏幕,内容超出部分滚动，顶部导航栏固定位置。

### 引入

#### vue3

```js
import { createApp } from 'vue-demi';
import { Container } from '@maybecode/v-power';

const app = createApp();

app.use(Container);
```

#### vue2

```js
import Vue from 'vue-demi';
import { Container } from 'v-power';

Vue.use(Container);
```

## 代码演示

### 基础用法

```html
<vp-container title="标题"> 内容 </vp-container>
```

## API

### Props

| 参数                | 说明                   | 类型      | 默认值    |
| ------------------- | ---------------------- | --------- | --------- |
| title               | 标题                   | _string_  | `标题`    |
| background          | 内容背景               | _string_  | `#f5f5f5` |
| noContentPadding    | 内容padding            | _boolean_ | false     |
| showNavLeft         | 导航栏左侧             | _boolean_ | true      |
| fixed               | 是否固定在顶部         | _boolean_ | false     |
| safe-area-inset-top | 是否开启顶部安全区适配 | _boolean_ | false     |

### Events

| 事件名    | 说明       | 回调参数 |
| --------- | ---------- | -------- |
| clickLeft | 点击时触发 | -        |

### Slots

| 名称      | 说明       |
| --------- | ---------- |
| default   | 内容       |
| headRight | 导航栏右侧 |
