<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <vp-container title="标题">
      <vp-list :list.sync="list" :total="total" :requestFn="requestFn">
        <template #loading> 加载中... </template>
        <div v-for="item in list" style="height: 150px" :key="item.name">
          {{ item }}
        </div>
      </vp-list>
    </vp-container>
  </div>
</template>
<script>
import vPower from '@maybecode/v-power';
import '@maybecode/v-power/dist-lib/v2/lib/index.css';
import Vue from 'vue';
import axios from 'axios';
Vue.use(vPower);
export default {
  components: {
    // [Container.name]: Container,
  },
  data() {
    return {
      total: 0,
      list: [],
    };
  },
  methods: {
    async requestFn(page) {
      // 异步更新数据
      const result = await axios.get(
        'https://www.fastmock.site/mock/4065436981794d02775c54b5d2e22e74/common-test/list',
        {
          params: {
            page,
            size: 5,
            search: this.search,
          },
        }
      );
      // 添加数据到列表
      this.list.push(...result.data.data.list);
      // 设置总数
      this.total = result.data.data.total;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
