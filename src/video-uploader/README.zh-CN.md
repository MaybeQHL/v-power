# VideoUploader 视频上传和预览

### 介绍

VideoUploader 视频上传和预览

### 引入

#### vue3

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

#### vue2

```js
import Vue from 'vue-demi';
import {
    VideoUploader
} from '@maybecode/v-power';

Vue.use(VideoUploader);
```

## 代码演示

### 基础用法

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
### 自定义预览区域

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

### 自定义上传区域

```html
<template>
     <vp-video-uploader
        v-model:files="files2"
        :maxSize="2 * 1024"
        :max-count="2"
      >
        <template #uploadArea>
          <van-button type="success">自定义上传区域</van-button>
        </template>
      </vp-video-uploader>
</template>

```

### 文件预览

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

| 参数                                        | 说明                                                                                  | 类型      | 默认值   |
| ------------------------------------------- | ------------------------------------------------------------------------------------- | --------- | -------- |
| props                                       | 继承 [vant-uploader props](https://vant-contrib.gitee.io/vant/#/zh-CN/uploader#props) | _any_     | -        |
| v3: ```v-model:files``` v2:```files.sync``` | 文件列表（双向绑定）                                                                  | _string_  | []       |
| disabled                                    | 是否禁用上传区域和预览区域                                                            | _boolean_ | false    |
| maxSize                                     | 支持单个最大文件大小, 单位```kb```                                                    | _number_  | Infinity |
| autoPlay                                    | 自动播放视频                                                                          | _boolean_ | true     |

### Slots

| 名称         | 说明           | 参数                 |
| ------------ | -------------- | -------------------- |
| uploadArea   | 自定义上传区域 | -                    |
| previewCover | 自定义预览封面 | _item: FileListItem_ |
