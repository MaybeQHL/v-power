<template>
  <demo-block :title="t('title')">
    <vp-container :title="t('conTitle')" @clickLeft="clickLeft">
      <template #headRight> {{ t('hearRight') }} </template>
      <div style="height: 1800px">
        {{ t('content') }}
      </div>
    </vp-container>
  </demo-block>
</template>
<script lang="ts">
import { useTranslate } from '@demo/use-translate';
import { defineComponent, toRefs } from 'vue-demi';
import Container from '..';
import { useRouter } from 'vue-router';

const t = useTranslate({
  'zh-CN': {
    title: '基础用法',
    conTitle: '容器',
    hearRight: '右侧',
    content: '内容',
  },
  'en-US': {
    title: 'Basic use',
    conTitle: 'container',
    hearRight: 'right',
    content: 'content',
  },
});

export default defineComponent({
  components: {
    [Container.name]: Container,
  },
  setup() {
    const router = useRouter();
    const clickLeft = () => {
      console.log('vp-container导航左边点击了');
      router.go(-1);
    };
    return {
      clickLeft,
      t,
    };
  },
  methods: {},
});
</script>
