# Card 

### Introduce

Card 

### import

#### vue3

```js
import { createApp } from 'vue-demi';
import { Card } from '@maybecode/v-power';

const app = createApp();

app.use(Card);
```

#### vue2

```js
import Vue from 'vue-demi';
import { Card } from 'v-power';

Vue.use(Card);
```

## Code demo

### Baisc usage

```html
<template>
    <vp-card>
        content
    </vp-card>
</template>
```

### Slots usage

```html
<template>
    <vp-card radius="10px">
        <template #title> 😄 </template>
        content
    </vp-card>
</template>
```

### Custom class

```html
<template>
    <vp-card :classes="['demo-card']">
        content
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

| parameters |       explain |     type | default |
| ---------- | ------------: | -------: | ------: |
| title      |         title | _string_ |   title |
| classes    |   custom syle |  _array_ |      [] |
| radius     | border radius | _string_ |    10px |

### Slots

| name    | explain |
| ------- | ------- |
| default | content |
| title   | title   |