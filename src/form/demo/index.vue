<template>
  <div>
    <demo-block :title="t('title')">
      <vp-form
        :submitLoading="submitLoading"
        @submit="onSubmit"
        @cancel="onCancel"
      >
        <van-field
          v-model="form.name"
          :label="t('fName')"
          :placeholder="t('plaName')"
          :rules="[
            {
              required: true,
              message: t('plaName'),
            },
          ]"
        >
        </van-field>
        <van-field
          v-model="form.age"
          :label="t('fAge')"
          :placeholder="t('plaAge')"
          :rules="[
            {
              required: true,
              message: t('plaAge'),
            },
          ]"
        >
        </van-field>
      </vp-form>
    </demo-block>
    <demo-block :title="t('extTitle')">
      <vp-form
        :showCancelBtn="true"
        :submitLoading="submitLoading"
        @submit="onSubmit"
        @cancel="onCancel"
        :btnRound="true"
      >
        <van-field
          v-model="form.name"
          :label="t('fName')"
          :placeholder="t('plaName')"
          :rules="[
            {
              required: true,
              message: t('plaName'),
            },
          ]"
        >
        </van-field>
        <van-field
          v-model="form.age"
          :label="t('fAge')"
          :placeholder="t('plaAge')"
          :rules="[
            {
              required: true,
              message: t('plaAge'),
            },
          ]"
        >
        </van-field>
        <template #btmExt>
          <van-button type="warning">{{ t('extName') }}</van-button>
        </template>
      </vp-form>
    </demo-block>
  </div>
</template>

<script>
// @ts-nocheck
import axios from 'axios';
import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
import Form from '..';
import { useTranslate } from '@demo/use-translate';
import { Button, Field, Toast } from 'vant';

const t = useTranslate({
  'zh-CN': {
    title: '基础使用',
    validateTitle: '表单验证',
    extTitle: '底部扩展',
    submitSuccess: '数据提交成功！',
    plaName: '请输入姓名',
    plaAge: '请输入年龄',
    fName: '姓名',
    fAge: '年龄',
    extName: '扩展',
    content: '内容',
    submitBtnText: '提交',
  },
  'en-US': {
    title: 'Base usage',
    validateTitle: 'Form Validate',
    extTitle: 'Bottom Extend',
    submitSuccess: 'Submit data successed!',
    plaName: 'Please input name',
    plaAge: 'Please input age',
    fName: 'Name',
    fAge: 'Age',
    extName: 'Extend',
    content: 'content',
    submitBtnText: 'Submit',
  },
});

export default defineComponent({
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  setup() {
    const state = reactive({
      submitLoading: false,
      form: {
        name: '',
        age: '',
      },
      t,
    });

    const onSubmit = () => {
      console.log('Submit validate passed!');
      state.submitLoading = true;
      setTimeout(() => {
        state.submitLoading = false;
        Toast.success(t('submitSuccess'));
      }, 2000);
    };
    const onCancel = () => {
      console.log('cancel btn emitted!');
      state.form = {
        name: '',
        age: '',
      };
    };

    return {
      ...toRefs(state),
      onSubmit,
      onCancel,
    };
  },
});
</script>
