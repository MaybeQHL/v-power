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
import { Container } from '@maybecode/v-power';

Vue.use(Container);
```

## Code demo

### Basic usage

```html
<vp-container title="title"> content </vp-container>
```

## API

### Props

| parameters          | explain                                                                          | type      | default   |
| ------------------- | -------------------------------------------------------------------------------- | --------- | --------- |
| ...                 | Extend [nav-bar props](https://vant-contrib.gitee.io/vant/#/en-US/nav-bar#props) | _any_     | -         |
| title               | title                                                                            | _string_  | `title`   |
| background          | background                                                                       | _string_  | `#f5f5f5` |
| noContentPadding    | content padding                                                                  | _boolean_ | false     |
| showNavLeft         | navbar left                                                                      | _boolean_ | true      |
| fixed               | Whether to fixed top                                                             | _boolean_ | false     |
| safe-area-inset-top | Whether to enable top safe area adaptation                                       | _boolean_ | false     |

### Events

| event     | explain       | callback |
| --------- | ------------- | -------- |
| clickLeft | click trigger | -        |

### Slots

| name      | explain      |
| --------- | ------------ |
| default   | content      |
| headRight | navbar right |
