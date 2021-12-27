<template>
  <div class="vp-container">
    <van-nav-bar :title="title" left-arrow @click-left="clickLeft">
      <template #right>
        <slot name="headRight"></slot>
      </template>
    </van-nav-bar>
    <div class="vp-container__content" :style="{ background }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { createNamespace } from '../utils';
import { NavBar } from 'vant';

const [name, bem] = createNamespace('container');

export default defineComponent({
  name,
  components: {
    [NavBar.name]: NavBar,
  },
  props: {
    title: {
      type: String,
      default: 'title',
    },
    background: {
      type: [String],
    },
  },
  setup(props: any, { emit, slots }: any) {
    const clickLeft = () => {
      emit('clickLeft');
    };

    return {
      clickLeft,
    };
  },
});
</script>
