# Container

### Introduce

Container is a Container component

> Automatically fill the entire screen, content beyond part of the scroll, the top navigation bar fixed position.

### import

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

## Code demo

### Basic usage

```html
<vp-container title="title"> content </vp-container>
```

## API

### Props

| parameters | explain    | type               | default   |
| ---------- | ---------- | ------------------ | --------- |
| title      | title      | _string_           | `title`   |
| background | background | _string \| object_ | `#f5f5f5` |

### Events

| event     | explain       | callback |
| --------- | ------------- | -------- |
| clickLeft | click trigger | -        |

### Slots

| name      | explain      |
| --------- | ------------ |
| default   | content      |
| headRight | navbar right |
