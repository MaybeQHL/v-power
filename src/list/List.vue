<template>
  <div class="vp-list">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      :pulling-text="pullingText || t('pullingText')"
      :loosing-text="loosingText || t('loosingText')"
      :success-text="successText || t('successText')"
      :loading-text="refLoadingText || t('refLoadingText')"
    >
      <template #loading v-if="$slots.refLoading">
        <slot name="refLoading"></slot>
      </template>
      <template #loosing v-if="$slots.refLoosing">
        <slot name="refLoosing"></slot>
      </template>
      <template #pulling="props" v-if="$slots.refPulling">
        <slot name="refPulling" :props="props"></slot>
      </template>
      <van-list
        v-if="isVue2"
        v-model="loading"
        :finished="finished"
        :error-text="errorText || t('errorText')"
        :finished-text="finishedText || t('finishedText')"
        :loading-text="loadingText || t('loadingText')"
        :error="error"
        @load="onLoadData"
        offset="300"
      >
        <template #loading v-if="$slots.loading">
          <slot name="loading"></slot>
        </template>
        <slot></slot>
      </van-list>
      <van-list
        v-else
        v-model:loading="loading"
        :finished="finished"
        :error-text="errorText || t('errorText')"
        :finished-text="finishedText || t('finishedText')"
        :loading-text="loadingText || t('loadingText')"
        :error="error"
        @load="onLoadData"
        offset="300"
      >
        <template #loading v-if="$slots.loading">
          <slot name="loading"></slot>
        </template>
        <slot></slot>
      </van-list>
    </van-pull-refresh>
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

const [name, rem, t] = createNamespace('list');

export type RequestParams = [
  /**
   * page
   */
  page: number
];

export default defineComponent({
  name,
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
  },
  props: {
    /**
     * list
     */
    list: {
      type: Array,
      default: [],
    },
    /**
     * total
     */
    total: {
      type: Number,
      default: 0,
    },
    /**
     * request async function
     */
    requestFn: {
      type: Function as PropType<(...reqData: RequestParams) => Promise<void>>,
      require: true,
    },
    /**
     * show toast
     */
    showToast: {
      type: Boolean,
      default: true,
    },
    /**
     * config
     */
    config: {
      type: Object,
    },
    loadingText: String,
    errorText: {
      type: String,
    },
    finishedText: {
      type: String,
    },
    pullingText: {
      type: String,
    },
    loosingText: {
      type: String,
    },
    successText: {
      type: String,
    },
    refLoadingText: {
      type: String,
    },
  },
  setup(props, { emit, slots }: any) {
    const { total, showToast } = toRefs(props);
    const list = computed<any[]>({
      get() {
        return props.list;
      },
      set() {
        // vm.$emit(`update:${propName}`, value);
        // emitModel(emit, "input", "list", []);
        emit(`update:list`, []);
      },
    });
    const state = reactive({
      isVue2,
      // loading status
      loading: false,
      // finished
      finished: false,
      // is error
      error: false,
      // page number
      page: 0,
      // search object
      search: {
        key: null,
      },
      // refreshing
      refreshing: false,
    });

    // Pull on loading
    const onLoad = async () => {
      if (!props.requestFn) {
        mconsole.error(t('need :RequestFn="RequestFn"'));
        state.finished = true;
        return;
      }
      try {
        state.loading = true;
        // page + 1
        state.page += 1;
        // Pull up load request function
        await props.requestFn(state.page);

        // refreshing
        if (state.refreshing) {
          state.refreshing = false;
        }
        // Load finished
        state.loading = false;
        // All data is loaded
        if (list.value.length >= total.value) {
          state.finished = true;
        }
      } catch (error: any) {
        mconsole.error(error);
        showToast.value && Toast.fail(error.message);
        state.error = true;
        state.loading = false;
        // Restore last page number
        state.page -= 1;
      }
    };

    // Must be wrapped
    const onLoadData = () => {
      onLoad();
    };

    // onRefresh
    const onRefresh = () => {
      // clear list
      // emit("input", []);

      // emitModel(emit, 'input', 'list', []);
      emit(`update:list`, []);
      state.finished = false;
      state.error = false;
      // reset page
      state.page = 0;
      // set refreshing true
      state.refreshing = true;
      onLoadData();
    };

    const searchData = () => {
      // clear list
      // emitModel(emit, 'input', 'list', []);
      emit(`update:list`, []);
      state.finished = false;
      state.error = false;
      // reset page
      state.page = 0;
      // set loading true
      state.loading = true;
      onLoadData();
    };

    return {
      ...toRefs(state),
      searchData,
      onRefresh,
      onLoadData,
      t,
    };
  },
});
</script>
