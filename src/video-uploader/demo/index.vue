<template>
  <div>
    <demo-block :title="t('title')">
      <vp-video-uploader v-model:files="files1"> </vp-video-uploader>
    </demo-block>
    <demo-block :title="t('customPreAeraTitle')">
      <vp-video-uploader v-model:files="files4" :max-count="2">
        <template #previewCover="item">
          <div style="background: orange; height: 100%">
            {{ item.index }}
          </div>
        </template>
      </vp-video-uploader>
    </demo-block>
    <demo-block :title="t('customAeraTitle')">
      <vp-video-uploader
        v-model:files="files2"
        :maxSize="2 * 1024"
        :max-count="2"
      >
        <template #uploadArea>
          <van-button type="success">{{ t('customAeraTitle') }}</van-button>
        </template>
      </vp-video-uploader>
    </demo-block>
    <demo-block :title="t('previewTitle')">
      <vp-video-uploader
        v-model:files="files3"
        :disabled="true"
      ></vp-video-uploader>
    </demo-block>
  </div>
</template>

<script>
// @ts-nocheck
import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
import VideoUploader from '..';
import { useTranslate } from '@demo/use-translate';
import { Button } from 'vant';

const t = useTranslate({
  'zh-CN': {
    title: '基础用法',
    previewTitle: '文件预览',
    customAeraTitle: '自定义上传区域',
    customPreAeraTitle: '自定义预览区域',
  },
  'en-US': {
    title: 'Base usage',
    previewTitle: 'preview files',
    customAeraTitle: 'Custom upload area',
    customPreAeraTitle: 'Custom preview area',
  },
});

export default defineComponent({
  components: {
    [VideoUploader.name]: VideoUploader,
    [Button.name]: Button,
  },
  setup() {
    const state = reactive({
      files1: [],
      files2: [],
      files3: [
        {
          content:
            'https://cdntest-1251804846.cos.ap-guangzhou.myqcloud.com/v-power%20demo%20%E2%80%91%20Made%20with%20FlexClip.mp4',
          name: 'This is a demo video.',
        },
        {
          content:
            'https://cdntest-1251804846.cos.ap-guangzhou.myqcloud.com/v-power%20demo%20%E2%80%91%20Made%20with%20FlexClip.mp4',
        },
        {
          content:
            'https://cdntest-1251804846.cos.ap-guangzhou.myqcloud.com/v-power%20demo%20%E2%80%91%20Made%20with%20FlexClip.mp4',
        },
        {
          content:
            'https://cdntest-1251804846.cos.ap-guangzhou.myqcloud.com/v-power%20demo%20%E2%80%91%20Made%20with%20FlexClip.mp4',
        },
      ],
      files4: [
        {
          content:
            'https://cdntest-1251804846.cos.ap-guangzhou.myqcloud.com/v-power%20demo%20%E2%80%91%20Made%20with%20FlexClip.mp4',
          name: 'This is a demo video.',
        },
      ],
      t,
      wxSdk: {},
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
