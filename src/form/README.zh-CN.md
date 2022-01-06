# Form 表单

### 介绍

Form 移动端表单组件

### 引入

#### vue3

```js
import {
    createApp
} from 'vue-demi';
import {
    Form
} from '@maybecode/v-power';

const app = createApp();

app.use(Form);
```

#### vue2

```js
import Vue from 'vue-demi';
import {
    Form
} from 'v-power';

Vue.use(Form);
```

## 代码演示

### 基础用法

```html
<template>
  <vp-form
        :submitLoading="submitLoading"
        @submit="onSubmit"
        @cancel="onCancel"
      >
        <van-field
          v-model="form.name"
          :label="'姓名'"
          :placeholder="'请输入姓名'"
          :rules="[
            {
              required: true,
              message: '请输入姓名',
            },
          ]"
        >
        </van-field>
        <van-field
          v-model="form.age"
          :label="'年龄'"
          :placeholder="'请输入年龄'"
          :rules="[
            {
              required: true,
              message: '请输入年龄',
            },
          ]"
        >
        </van-field>
      </vp-form>
</template>
<script>
// @ts-nocheck
import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
import { Button, Field, Toast } from 'vant';

export default defineComponent({
  components: {
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
      state.submitLoading = true;
      setTimeout(() => {
        state.submitLoading = false;
        Toast.success('数据提交成功'));
      }, 2000);
    };
    const onCancel = () => {
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

```

### 底部扩展

```html
<template>
    <vp-form>
         <template #btmExt>
           <van-button type="warning">扩展</van-button>
         </template>
    </vp-card>
</template>
```

## API

### Props

| 参数              | 说明                                       | 类型      | 默认值  |
| ----------------- | ------------------------------------------ | --------- | ------- |
| showSubmitBtn     | 确认按钮显示                               | _boolean_ | true    |
| submitBtnText     | 确认按钮文本                               | _string_  | 确认    |
| submitBtnColor    | 确认按钮颜色                               | _string_  | #1989fa |
| submitBtnDisabled | 确认按钮禁用                               | _boolean_ | false   |
| showCancelBtn     | 取消按钮显示                               | _boolean_ | false   |
| cancelBtnText     | 取消按钮文本                               | _string_  | 取消    |
| cancelBtnColor    | 取消按钮颜色                               | _string_  | #fff    |
| showError         | 是否在校验不通过时标红输入框               | _boolean_ | false   |
| showErrorMsg      | 是否在校验不通过时在输入框下方展示错误提示 | _boolean_ | true    |
| customError       | 是否定制错误提示(关闭Toast)                | _boolean_ | false   |
| labelWidth        | 表单项 label 宽度                          | _string_  | 6.2em   |
| btnRound          | 是否为圆形按钮                             | _boolean_ | false   |


### Events

| 名称   | 说明                       | 回调参数                      |
| ------ | -------------------------- | ----------------------------- |
| submit | 提交表单且验证通过后触发   | -                             |
| failed | 提交表单且验证不通过后触发 | _errorInfo:{errors:object[]}_ |

### Slots

| 名称   | 说明     |
| ------ | -------- |
| btmExt | 底部扩展 |
