# Form 

### Introduce

Form 

### import

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

## Code demo

### Baisc usage

```html
<template>
  <vp-form
        :showCancelBtn="true"
        :submitLoading="submitLoading"
        @submit="onSubmit"
        @cancel="onCancel"
      >
        <van-field
          v-model="form.name"
          :label="'Name'"
          :placeholder="'Please input name'"
          :rules="[
            {
              required: true,
              message: 'Please input name',
            },
          ]"
        >
        </van-field>
        <van-field
          v-model="form.age"
          :label="'Age'"
          :placeholder="'Please input age'"
          :rules="[
            {
              required: true,
              message: 'Please input age',
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
        Toast.success('Submit Data successed!'));
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

### Bottom Extend

```html
<template>
    <vp-form>
         <template #btmExt>
           <van-button type="warning">Extend</van-button>
         </template>
    </vp-card>
</template>
```

## API

### Props

| Parameter         |                                                                             explain |      type | default |
| ----------------- | ----------------------------------------------------------------------------------: | --------: | ------: |
| showSubmitBtn     |                                                                 Show confirm button | _boolean_ |    true |
| submitBtnText     |                                                                 Confirm button text |  _string_ | Confirm |
| submitBtnColor    |                                                                Confirm button color |  _string_ | #1989fa |
| submitBtnDisabled |                                                              Disable confirm button | _boolean_ |   false |
| showCancelBtn     |                                                                  Show cancel button | _boolean_ |    true |
| cancelBtnText     |                                                                  Cancel button text |  _string_ |  Cancel |
| cancelBtnColor    |                                                                 Cancel button color |  _string_ |    #fff |
| showError         |                      Whether to mark the input box in red if the verification fails | _boolean_ |   false |
| showErrorMsg      | Whether to display an error message below the input box when the verification fails | _boolean_ |    true |
| customError       |                                 Whether to customize the error prompt (close Toast) | _boolean_ |   false |
| labelWidth        |                                                            Width of form item label |  _string_ |   6.2em |


### Events

| Name   | explain                                                           | callback   parameters         |
| ------ | ----------------------------------------------------------------- | ----------------------------- |
| submit | Triggered when the form is submitted and verified                 | -                             |
| failed | Triggered after the form is submitted and cannot be authenticated | _errorInfo:{errors:object[]}_ |

### Slots

| Name   | explain                        |
| ------ | ------------------------------ |
| btmExt | At the bottom of the extension |
