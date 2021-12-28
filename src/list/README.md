# List

### Introduce

List Mobile list component

### import

#### vue3

```js
import { createApp } from 'vue-demi';
import { List } from '@maybecode/v-power';

const app = createApp();

app.use(List);
```

#### vue2

```js
import Vue from 'vue-demi';
import { List } from 'v-power';

Vue.use(List);
```

## Code demo

### Basic usage

```html
<template>
  <van-search
    v-model="search.text"
    placeholder="Please enter your search terms"
    @search="searchSubmit"
  />
  <vp-list
    ref="mList"
    :requestFn="requestFn"
    v-model:list="list"
    :total="total"
  >
    <van-cell style="height: 150px" v-for="(item, index) in list" :key="index">
      <p>{{ item.title }}</p>
      <p>{{ item.content }}</p>
    </van-cell>
  </vp-list>
</template>

<script>
  import axios from 'axios';
  import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
  import { Search, Cell } from 'vant';

  export default defineComponent({
    components: {
      [Search.name]: Search,
      [Cell.name]: Cell,
    },
    setup() {
      const state = reactive({
        list: [],
        total: 0,
        search: {
          text: '',
        },
      });
      const mList = ref();

      const requestFn = async (page) => {
        // Asynchronously updating data
        const result = await axios.get(
          'https://www.fastmock.site/mock/4065436981794d02775c54b5d2e22e74/common-test/list',
          {
            params: {
              page,
              size: 5,
              search: state.search,
            },
          }
        );
        // Add data to the list
        state.list.push(...result.data.data.list);
        // Set the total number of
        state.total = result.data.data.total;
      };

      const searchSubmit = () => {
        // Search data (clear lists, reset page numbers)
        mList.value.searchData();
      };

      return {
        ...toRefs(state),
        mList,
        requestFn,
        searchSubmit,
      };
    },
  });
</script>
```

## API

### Props

| parameter                                   |                           explain |                    type |    default |
| ------------------------------------------- | --------------------------------: | ----------------------: | ---------: |
| v-model:list (vue3.x) or list.sync (vue2.x) |                         list data |                    _[]_ |         [] |
| total                                       |                             total |                _number_ |          0 |
| requestFn                                   |             Data request function | _(page:number) => void_ |          - |
| loadingText                                 | Text to show when pull on loading |                _stirng_ | Loading... |

### Refs

| name       | explain     | callback |
| ---------- | ----------- | -------- |
| searchData | Search data | -        |


### Slots

| name       | explain                |
| ---------- | ---------------------- |
| default    | content                |
| refLoading | refresh loading prompt |
| refLoosing | refresh loosing prompt |
| refPulling | refresh pulling prompt |
| loading    | pull up loading prompt |