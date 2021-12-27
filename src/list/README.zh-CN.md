# List 列表

### 介绍

List 移动端列表组件

### 引入

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

## 代码演示

### 基础用法

```html
<template>
  <van-search
    v-model="search.text"
    placeholder="请输入搜索关键词"
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
        // 异步更新数据
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
        // 添加数据到列表
        state.list.push(...result.data.data.list);
        // 设置总数
        state.total = result.data.data.total;
      };

      const searchSubmit = () => {
        // 搜索数据（清空列表,重置页码）
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --: | --: | --: |
| v-model:list (vue3.x) 或 list.sync (vue2.x) | 列表数据 | _[]_ | [] |
| total | 总数量 | _number_ | 0 |
| loadingText | 上拉加载过程提示文案 | _stirng_ | 加载中... |
| requestFn | 数据请求函数 | _(page:number) => void_ | - |

### Refs

| 名称       | 说明     | 回调参数 |
| ---------- | -------- | -------- |
| searchData | 搜索数据 | -        |
