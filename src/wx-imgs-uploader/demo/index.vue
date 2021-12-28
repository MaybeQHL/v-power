<template>
  <div>
    <demo-block :title="t('title')">
      <vp-wx-imgs-uploader
        v-model:fileList="emptyFileList"
        :wxSdk="wxSdk"
      ></vp-wx-imgs-uploader>
    </demo-block>
    <demo-block :title="t('previewTitle')">
      <vp-wx-imgs-uploader
        v-model:fileList="fileList"
        :wxSdk="wxSdk"
      ></vp-wx-imgs-uploader>
    </demo-block>
  </div>
</template>

<script>
// @ts-nocheck
import axios from 'axios';
import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
import WxImgsUploader from '..';
import { useTranslate } from '@demo/use-translate';

const t = useTranslate({
  'zh-CN': {
    title: '基础使用',
    previewTitle: '文件预览',
  },
  'en-US': {
    title: 'Base usage',
    previewTitle: 'preview files',
  },
});

export default defineComponent({
  components: {
    [WxImgsUploader.name]: WxImgsUploader,
  },
  setup() {
    const state = reactive({
      fileList: [
        {
          url: 'https://img01.yzcdn.cn/vant/leaf.jpg',
        },
      ],
      emptyFileList: [],
      t,
      wxSdk: {},
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="css" scoped>
.demo-card {
  margin: 0;
  padding: 0;
}
</style>
