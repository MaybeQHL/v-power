# WxImgsUploader 微信多图上传

### 介绍

WxImgsUploader 微信多图上传
 

### 引入

#### vue3

```js
import {
    createApp
} from 'vue-demi';
import {
    WxImgsUploader
} from '@maybecode/v-power';

const app = createApp();

app.use(WxImgsUploader);
```

#### vue2

```js
import Vue from 'vue-demi';
import {
    WxImgsUploader
} from '@maybecode/v-power';

Vue.use(WxImgsUploader);
```

## 代码演示

### wx-jssdk需要授予的接口 

```js
['chooseImage', 'uploadImage', 'getLocalImgData']
```

### 基础用法

```html
<template>
    <div>
        <vp-wx-imgs-uploader v-model:fileList="fileList" :wxSdk="wxSdk">
        </vp-wx-imgs-uploader>
    </div>
</template>

<script>
    import {
        defineComponent,
        reactive,
        toRefs,
        ref
    } from 'vue-demi';

    export default defineComponent({
        setup() {
            const state = reactive({
                fileList: [{
                    url: '', // 图片预览地址,
                    serverId: '' // 微信服务器图片ID
                }],
                wxSdk: {}, // 必须是已经初始化的jssdk
            });
            return {
                ...toRefs(state),
            };
        },
    });
</script>
```

### 文件预览

```html
<template>
    <div>
        <vp-wx-imgs-uploader v-model:fileList="fileList" :wxSdk="wxSdk">
        </vp-wx-imgs-uploader>
    </div>
</template>

<script>
    import {
        defineComponent,
        reactive,
        toRefs,
        ref
    } from 'vue-demi';

    export default defineComponent({
        setup() {
            const state = reactive({
                fileList: [{
                    url: 'https://img01.yzcdn.cn/vant/leaf.jpg',
                }],
                wxSdk: {},
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

| 参数                                                |                    说明 |         类型 | 默认值 |
| --------------------------------------------------- | ----------------------: | -----------: | -----: |
| v-model:fileList (vue3.x) 或 fileList.sync (vue2.x) |                图片列表 | _FileItem[]_ |     [] |
| wxSdk                                               | 已经初始化权限的微信sdk |     _object_ |      - |
| title                                               |            上传区域文字 |     _string_ |      - |
| icon                                                |           上传区域 icon |     _string_ |      - |
| count                                               |        最大上传图片数量 |     _number_ |      9 |
| size                                                |            上传区域大小 |     _string_ |   22vw |
