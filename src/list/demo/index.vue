<template>
  <div>
    <van-search
      v-model="search.text"
      :placeholder="t('searchPlaceholder')"
      @search="searchSubmit"
    />

    <vp-list
      ref="mList"
      :request-fn="requestFn"
      v-model:list="list"
      :total="total"
    >
      <!-- <template #loading> {{ t('loading') }} </template> -->
      <van-cell style="height: 150px" v-for="item in list" :key="item.id">
        <p>{{ item.title }}</p>
        <p>{{ item.content }}</p>
      </van-cell>
    </vp-list>
  </div>
</template>

<script>
// @ts-nocheck
import axios from 'axios';
import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
import { Cell, Search } from 'vant';
import List from '..';
import { useTranslate } from '@demo/use-translate';

const t = useTranslate({
  'zh-CN': {
    searchPlaceholder: '请输入搜索关键词',
    loading: '加载中...',
  },
  'en-US': {
    searchPlaceholder: 'Please enter your search terms',
    loading: 'Loading...',
  },
});

export default defineComponent({
  components: {
    [Search.name]: Search,
    [Cell.name]: Cell,
    [List.name]: List,
  },
  setup() {
    const state = reactive({
      list: [],
      total: 0,
      search: {
        text: '',
      },
      t,
    });
    const mList = ref([]);

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
