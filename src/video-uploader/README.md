# VideoUploader Video Upload and Preview

### introduce

VideoUploader Video Upload and Preview

### Introduce

#### Vue3

```js
import {
    createApp
} from 'vue-demi';
import {
    VideoUploader
} from '@maybecode/v-power';

const app = createApp();

app.use(VideoUploader);
```

#### Vue2

```js
import Vue from 'vue-demi';
import {
    VideoUploader
} from '@maybecode/v-power';

Vue.use(VideoUploader);
```

## Code demonstration

### Basic usage

```html
<template>
    <vp-video-uploader v-model:files="files1">
      </vp-video-uploader>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
import { Button } from 'vant';

export default defineComponent({
  components: {
    [Button.name]: Button,
  },
  setup() {
    const state = reactive({
      files1: [],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
```
### Customize Preview Area

```html
<template>
     <vp-video-uploader
        v-model:files="files4"
      >
       <template #previewCover="item">
          <div style="background: orange; height: 100%">
            {{ item.index }}
          </div>
        </template>
      </vp-video-uploader>
</template>
```

### Customize Upload Area

```html
<template>
     <vp-video-uploader
        v-model:files="files2"
        :maxSize="2 * 1024"
        :max-count="2"
      >
        <template #uploadArea>
          <van-button type="success">Custom upload area</van-button>
        </template>
      </vp-video-uploader>
</template>

```

### File Preview

```html
<template>
       <vp-video-uploader
        v-model:files="files3"
        :disabled="true"
      ></vp-video-uploader>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from 'vue-demi';
import { Button } from 'vant';

export default defineComponent({
  components: {
    [Button.name]: Button,
  },
  setup() {
    const state = reactive({
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
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
```

## API

### Props

| Parameter                                   | Description                                                                             | Type      | Default  |
| ------------------------------------------- | --------------------------------------------------------------------------------------- | --------- | -------- |
| ...                                         | Extend [vant-uploader props](https://vant-contrib.gitee.io/vant/#/zh-CN/uploader#props) | _any_     | -        |
| v3: ```v-model:files``` v2:```files.sync``` | File list (v-model)                                                                     | _string_  | []       |
| disabled                                    | Whether to disable the upload area and preview area                                     | _boolean_ | false    |
| maxSize                                     | Supports a single maximum file size, in units```kb```                                   | _number_  | Infinity |
| autoPlay                                    | Autoplay video                                                                          | _boolean_ | true     |

### Slots

| Name         | Description          | Parameters           |
| ------------ | -------------------- | -------------------- |
| uploadArea   | Custom Upload Area   | -                    |
| previewCover | Custom Preview Cover | _item: FileListItem_ |

