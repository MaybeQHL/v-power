# VerifyButton 获取验证码按钮

### 介绍

VerifyButton 获取验证码按钮

### 引入

#### vue3

```js
import {
    createApp
} from 'vue-demi';
import {
    VerifyButton
} from '@maybecode/v-power';

const app = createApp();

app.use(VerifyButton);
```

#### vue2

```js
import Vue from 'vue-demi';
import {
    VerifyButton
} from '@maybecode/v-power';

Vue.use(VerifyButton);
```

## 代码演示

### 基础用法

```html
<template>
   <van-field
        v-model="phone"
        :label="'手机号'"
        :placeholder="'请输入手机号'"
      ></van-field>
      <van-field
        v-model="sms"
        center
        clearable
        :label="'短信验证码'"
        :placeholder="'请输入验证码'"
      >
        <template #button>
          <vp-verify-button
            :requireValue="phone"
            type="success"
            @requireError="requireError"
          >
          </vp-verify-button>
        </template>
      </van-field>
</template>
<script>
// @ts-nocheck
import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
import { Field, Toast } from 'vant';

export default defineComponent({
  components: {
    [Field.name]: Field
  },
  setup() {
    const state = reactive({
      phone: '',
      sms: '',
    });
    const mList = ref([]);
    const requireError = () => {
      Toast.fail('请输入手机号');
    };
    return {
      ...toRefs(state),
      requireError,
    };
  },
});
</script>
```

## API

### Props

| 参数         | 说明                                                                              | 类型     | 默认值 |
| ------------ | --------------------------------------------------------------------------------- | -------- | ------ |
| props        | 继承 [vant-button props](https://vant-contrib.gitee.io/vant/#/zh-CN/button#props) | _any_    | -      |
| requireValue | 依附必填值(通常是手机号)                                                          | _string_ | -      |
| duration     | 倒计时长(s)                                                                       | _number_ | 60     |

### Events

| 名称         | 说明             | 回调参数 |
| ------------ | ---------------- | -------- |
| requireError | 必填值不生效触发 | -        |