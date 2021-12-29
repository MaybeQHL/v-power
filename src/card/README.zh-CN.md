# Card 卡片

### 介绍

Card 移动端卡片组件

### 引入

#### vue3

```js
import {
    createApp
} from 'vue-demi';
import {
    Card
} from '@maybecode/v-power';

const app = createApp();

app.use(Card);
```

#### vue2

```js
import Vue from 'vue-demi';
import {
    Card
} from '@maybecode/v-power';

Vue.use(Card);
```

## 代码演示

### 基础用法

```html
<template>
    <vp-card>
        内容
    </vp-card>
</template>
```

### 插槽使用

```html
<template>
    <vp-card radius="10px">
        <template #title> 😄 </template>
        内容
    </vp-card>
</template>
```

### 定制class

```html
<template>
    <vp-card :classes="['demo-card']">
        内容
    </vp-card>
</template>

<style scoped>
    .demo-card {
        margin: 0;
        padding: 0;
    }
</style>
```

## API

### Props

| 参数    |     说明 |     类型 | 默认值 |
| ------- | -------: | -------: | -----: |
| title   |     标题 | _string_ |   标题 |
| classes | 定制样式 |  _array_ |     [] |
| radius  | 边框半径 | _string_ |   10px |

### Slots

| 名称    | 说明 |
| ------- | ---- |
| default | 内容 |
| title   | 标题 |
