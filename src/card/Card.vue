<template>
  <div class="vp-card" :class="classes" :style="{ 'border-radius': radius }">
    <div class="vp-card-tilte" v-if="title || $slots.title">
      <template v-if="$slots.title">
        <slot name="title"></slot>
      </template>
      <span v-else> {{ title }}</span>
    </div>
    <div class="vp-card-content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  PropType,
  isVue2,
} from 'vue-demi';

import { createNamespace, mconsole, emitModel } from '../utils';

import { List, Toast, PullRefresh } from 'vant';

const [name, rem, t] = createNamespace('card');

export default defineComponent({
  name,
  components: {},
  props: {
    title: {
      type: String,
    },
    classes: Array,
    radius: {
      type: [String],
      default: '10px',
    },
  },
  setup(props, { emit, slots }: any) {
    const state = reactive({
      isVue2,
    });

    return {
      ...toRefs(state),
      t,
    };
  },
});
</script>
