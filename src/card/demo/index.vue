<template>
  <div>
    <demo-block :title="t('title')">
      <vp-card>
        {{ t('content') }}
      </vp-card>
    </demo-block>
    <demo-block :title="t('slotTitle')">
      <vp-card radius="10px">
        <template #title> 😄 </template>
        {{ t('content') }}
      </vp-card>
    </demo-block>
    <demo-block :title="t('classesTitle')">
      <vp-card :title="t('cTitle')" :classes="['demo-card']" radius="20px">
        {{ t('content') }}
      </vp-card>
    </demo-block>
  </div>
</template>

<script>
// @ts-nocheck
import axios from 'axios';
import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
import Card from '..';
import { useTranslate } from '@demo/use-translate';

const t = useTranslate({
  'zh-CN': {
    title: '基础使用',
    cTitle: '标题',
    slotTitle: '插槽使用',
    classesTitle: '定制class',
    content: '内容',
  },
  'en-US': {
    title: 'Base usage',
    cTitle: 'Title',
    slotTitle: 'Slot usage',
    classesTitle: 'Custom class',
    content: 'content',
  },
});

export default defineComponent({
  components: {
    [Card.name]: Card,
  },
  setup() {
    const state = reactive({
      list: [],
      total: 0,
      search: {
        text: '',
      },
      t,
    });
    const mList = ref([]);

    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="css" scoped>
.demo-card {
  background-color: pink;
}
</style>
