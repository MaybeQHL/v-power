<template>
  <div>
    <demo-block :title="t('title')">
      <van-field
        v-model="phone"
        :label="t('phoneLabel')"
        :placeholder="t('plaPhoneMsg')"
      ></van-field>
      <van-field
        v-model="sms"
        center
        clearable
        :label="t('codeLabel')"
        :placeholder="t('plaCodeMsg')"
      >
        <template #button>
          <vp-verify-button
            :requireValue="phone"
            :duration="10"
            type="success"
            @requireError="requireError"
          >
          </vp-verify-button>
        </template>
      </van-field>
    </demo-block>
  </div>
</template>

<script>
// @ts-nocheck
import axios from 'axios';
import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
import VerifyButton from '..';
import { useTranslate } from '@demo/use-translate';
import { Field, Toast } from 'vant';

const t = useTranslate({
  'zh-CN': {
    title: '基础使用',
    phoneLabel: '手机号',
    codeLabel: '短信验证码',
    plaPhoneMsg: '请输入手机号',
    plaCodeMsg: '请输入验证码',
  },
  'en-US': {
    title: 'Base usage',
    phoneLabel: 'Phone',
    codeLabel: 'SMS Code',
    plaPhoneMsg: 'Please input phone',
    plaCodeMsg: 'Please input code',
  },
});

export default defineComponent({
  components: {
    [VerifyButton.name]: VerifyButton,
    [Field.name]: Field,
  },
  setup() {
    const state = reactive({
      phone: '',
      sms: '',
      t,
    });
    const mList = ref([]);
    const requireError = () => {
      Toast.fail(t('plaPhoneMsg'));
    };
    return {
      ...toRefs(state),
      requireError,
    };
  },
});
</script>

