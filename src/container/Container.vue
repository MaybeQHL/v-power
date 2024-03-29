<template>
  <div class="vp-container">
    <van-nav-bar
      :title="title"
      :left-arrow="showNavLeft"
      @click-left.prevent="clickLeft"
      :left-text="leftText"
      :fixed="fixed"
      :safe-area-inset-top="safeAreaInsetTop"
      v-bind="mergeProps"
    >
      <template #left v-if="$slots.headLeft && showNavLeft">
        <slot name="headLeft"></slot>
      </template>
      <template #right>
        <slot name="headRight"></slot>
      </template>
    </van-nav-bar>
    <div
      class="vp-container__content"
      :style="{ background }"
      :class="[noContentPadding && 'clearPadding']"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue-demi';
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
    leftText: {
      type: String,
      default: '',
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    showNavLeft: {
      type: Boolean,
      default: true,
    },
    noContentPadding: {
      type: Boolean,
      default: false,
    },
    safeAreaInsetTop: Boolean,
  },
  setup(props: any, { emit, slots, attrs }) {
    const clickLeft = () => {
      emit('clickLeft');
    };
    const mergeProps = computed(() => {
      return Object.assign({ ...attrs });
    });
    return {
      clickLeft,
      mergeProps,
    };
  },
});
</script>
