# WxImgsUploader 

### introduce

WxImgsUploader Wechat multi-picture upload
 

### Import

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
} from 'v-power';

Vue.use(WxImgsUploader);
```

## Code demo

### Wx-jssdk needs to grant interfaces

```js
['chooseImage', 'uploadImage', 'getLocalImgData']
```

### Basic usage

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
                    url: '', // Image preview url,
                    serverId: '' // wx serverId
                }],
                wxSdk: {}, // It must be an initialized JSSDK
            });
            return {
                ...toRefs(state),
            };
        },
    });
</script>
```

### Files preview

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

| parameter                                   |                           explain |                    type |    default |
| ------- | -------: | -------: | -----: |
| v-model:fileList (vue3.x) or fileList.sync (vue2.x) |             Image List |                    _FileItem[]_ |        [] |
| wxSdk                                               | The wechat SDK has been initialized with permissions |     _object_ |      - |
| title                                               |            Upload area text |     _string_ |      - |
| icon                                                |          Upload area icon|     _string_ |      - |
| count                                               |        Maximum number of uploaded images |     _number_ |      9 |
| size                                                |            Upload area size |     _string_ |   22vw |
