<template>
  <div class="vp-verify-button" :class="classes">
    <van-button
      v-bind="mergeProps"
      :disabled="disabled"
      @click="getCode"
      :class="classes"
      :style="styles"
      >{{ verCodeText }}</van-button
    >
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
  watch,
} from 'vue-demi';

import { createNamespace, mconsole, emitModel } from '../utils';

import { Button } from 'vant';

const [name, rem, t] = createNamespace('verify-button');

export default defineComponent({
  name,
  components: {
    [Button.name]: Button,
  },
  props: {
    /**
     * cn: 依附必填值（通常是手机号）
     * en: Attached required value (usually mobile phone number)
     */
    requireValue: {
      type: String,
      required: true,
    },
    /**
     * cn: 倒计时长(s)
     * en: The countdown to long(s)
     */
    duration: {
      type: Number,
      default: 60,
    },
    classes: Array,
    styles: {
      type: Object,
      default: function () {
        return {
          width: '90px',
        };
      },
    } as any,
    text: {
      type: String,
      default: function () {
        return t('text');
      },
    } as any,
    suffix: {
      type: String,
      default: function () {
        return t('suffix');
      },
    } as any,
  },
  setup(props, { emit, slots, attrs }) {
    const state = reactive({
      isVue2,
      currentTime: 0,
      disabled: false,
      interval: null,
    });

    const mergeProps = computed(() => {
      return Object.assign({ size: 'small' }, { ...attrs });
    });

    const verCodeText = computed(() => {
      return state.currentTime < props.duration
        ? `${state.currentTime}${props.suffix}`
        : props.text;
    });
    const reset = () => {
      clearInterval(state.interval as any);
      state.currentTime = props.duration;
      state.disabled = false;
    };
    const startCountdown = () => {
      state.disabled = true;
      state.currentTime--;
      state.interval = setInterval(() => {
        state.currentTime--;
        if (state.currentTime == 0) {
          clearInterval(state.interval as any);
          state.disabled = false;
          state.currentTime = props.duration;
          emit('finished');
        }
      }, 1000) as any;
    };
    const start = () => {
      startCountdown();
    };
    const getCode = () => {
      if (!props.requireValue) {
        console.error('Please prop: requireValue');
        emit('requireError');
        return;
      }
      emit('start');
      startCountdown();
    };

    watch(
      () => props.duration,
      () => {
        reset();
      },
      {
        immediate: true,
      }
    );
    return {
      ...toRefs(state),
      t,
      getCode,
      start,
      startCountdown,
      reset,
      verCodeText,
      mergeProps,
    };
  },
});
</script>
