<template>
  <div class="vp-video-uploader">
    <van-uploader
      v-model="fileList"
      accept="video/*"
      multiple
      :max-count="Infinity"
      @click-preview="clickPreview"
      :deletable="!disabled"
      :max-size="maxSize * 1024"
      @oversize="oversize"
      :disabled="disabled"
      v-bind="mergeProps"
    >
      <template #default>
        <slot name="uploadArea" v-if="$slots.uploadArea"></slot>
        <div class="upload-video-area" v-else-if="!disabled">
          <van-icon name="video" color="rgb(220, 222, 224)" size="8vw" />
        </div>
      </template>
      <!-- <slot :name="name" v-for="(val, name, index) of $slots"></slot> -->
      <template #preview-cover="item">
        <slot
          name="previewCover"
          v-if="isVue2 ? $scopedSlots.previewCover : $slots.previewCover"
          v-bind="item"
        >
        </slot>
        <div class="preview-cover" v-else>
          <van-icon name="video-o" size="8vw" />
          <p>
            {{ getName(item) }}
          </p>
        </div>
      </template>
    </van-uploader>
    <div class="preview-video-wrap" v-show="isVideoPreview">
      <van-nav-bar
        :title="t('previewNavTitle')"
        :left-text="t('previewNavBack')"
        left-arrow
        @click-left="onClickLeft"
      >
        <template #right>
          <van-icon
            v-if="!disabled"
            name="delete-o"
            color="#666666"
            @click="onClickDel"
            size="7vw"
          />
        </template>
      </van-nav-bar>
      <video
        controls
        ref="videoRef"
        :src="fileList.length > 0 && fileList[0].content"
        @error="onError"
      ></video>
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
  watch,
  ref,
} from 'vue-demi';

import { createNamespace, mconsole, emitModel } from '../utils';

import { Uploader, Toast, Icon, NavBar } from 'vant';

const [name, rem, t] = createNamespace('video-uploader');

export default defineComponent({
  name,
  components: {
    [Uploader.name]: Uploader,
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
  },
  props: {
    /**
     * cn: 文件列表（双向绑定）
     * en: File list(v3: v-model:files v2:files.sync)
     * @type { Array<{content:string,file:File,name:string}> }
     */
    files: {
      type: Array,
    },
    /**
     * cn: 是否禁用上传区域和预览区域
     * en: Whether to disable the upload area and preview area
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * cn: 支持单个最大文件大小
     * en: Supports a single maximum file size
     * @default Infinity
     * @example  8mb = 8*1024(kb)
     * @description
     * cn: 单位(kb)
     * en: unit(kb)
     */
    maxSize: {
      type: Number,
      default: Infinity * 1024,
    },
    /**
     * cn: 自动播放视频
     * en: Auto play video
     */
    autoPlay: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit, slots, attrs }: any) {
    const state = reactive({
      isVue2,
      fileList: [] as any[],
      isVideoPreview: false,
    });
    const videoRef = ref();
    const mergeProps = computed(() => {
      return Object.assign(
        {
          'upload-icon': 'video',
        },
        { ...attrs }
      );
    });
    watch(
      () => props.files,
      (val) => {
        if (val && val.length > 0) {
          state.fileList = val as any[];
        }
      },
      {
        immediate: true,
      }
    );
    watch(
      () => state.fileList,
      (val) => {
        emit('update:files', val);
      }
    );

    const oversize = () => {
      const size =
        props.maxSize >= 1024
          ? props.maxSize / 1024 + 'm'
          : props.maxSize + 'kb';
      Toast.fail(`${t('outSize')}${size}`);
    };
    const initVideo = () => {
      pauseVideo();
      // auto play
      if (props.autoPlay) {
        const videoDom = videoRef.value;
        videoDom.play();
        console.log('Video auto play start!');
      }
    };
    const pauseVideo = () => {
      const videoDom = videoRef.value;
      if (videoDom) {
        videoDom.currentTime = 0;
        videoDom.pause();
      }
    };
    const onClickLeft = () => {
      state.isVideoPreview = false;
      pauseVideo();
    };
    const clickPreview = () => {
      console.log(state.fileList);
      state.isVideoPreview = true;
      initVideo();
    };
    const onClickDel = () => {
      if (state.fileList.length > 0) {
        state.fileList.pop();
      }
      emit('update:files', []);
      state.isVideoPreview = false;
      pauseVideo();
    };
    const getName = (item) => {
      if (item.name) {
        return item.name;
      } else if (item.file && item.file.name) {
        return item.file.name;
      } else {
        return '';
      }
    };
    const onError = () => {};

    return {
      ...toRefs(state),
      t,
      oversize,
      initVideo,
      onClickLeft,
      clickPreview,
      onClickDel,
      getName,
      onError,
      mergeProps,
      videoRef,
    };
  },
});
</script>
