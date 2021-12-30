# VerifyButton 

### introduce

VerifyButton 

### Import

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

## Code Demo

### Basic Usage

```html
<template>
   <van-field
        v-model="phone"
        :label="'phone'"
        :placeholder="'Please input phone'"
      ></van-field>
      <van-field
        v-model="sms"
        center
        clearable
        :label="'Code'"
        :placeholder="'Please input code'"
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
      Toast.fail('Please input phone');
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

| parameters   |                                                                             explain |     type | default |
| ------------ | ----------------------------------------------------------------------------------: | -------: | ------: |
| ...          | Extend [vant-button props](https://vant-contrib.gitee.io/vant/#/en-US/button#props) |    _any_ |       - |
|              |
| requireValue |                                      Requre value(It's usually a cell phone number) | _string_ |       - |
| duration     |                                                                         duration(s) | _number_ |      60 |

### Events

| name         | explain                          | callback parameter |
| ------------ | -------------------------------- | ------------------ |
| requireError | Mandatory value does not trigger | -                  |