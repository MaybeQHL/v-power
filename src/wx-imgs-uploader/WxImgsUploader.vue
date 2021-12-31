<template>
  <div class="vp-wx-imgs-uploader">
    <div
      class="uploader-preview"
      v-for="(item, index) in fileList"
      :key="index"
      :style="{ width: size, height: size }"
    >
      <van-image
        width="100%"
        height="100%"
        :src="item.url"
        @click="clickPreview(index)"
      ></van-image>
      <div class="uploader-delete" @click="clickDelete(index)">
        <van-icon class="uploader-delete-icon" name="cross" />
      </div>
    </div>

    <div
      class="uploader-area"
      :style="{ width: size, height: size }"
      @click="clickUpload"
    >
      <van-image
        :width="rSize"
        :height="rSize"
        :src="icon"
        v-if="icon"
      ></van-image>
      <van-icon v-else name="photograph" color="#dcdee0" :size="rSize" />
      <span class="uploader-text" v-if="title">{{ title }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  PropType,
  isVue2,
  onMounted,
} from 'vue-demi';

import { createNamespace, mconsole, emitModel } from '../utils';

import { Image, Icon, ImagePreview, Toast } from 'vant';

const [name, rem, t] = createNamespace('wx-imgs-uploader');

export interface ListItem {
  url: string;
  serverId: string;
  cprReuslt?: { base64: string; file: File };
}
export default defineComponent({
  name,
  components: {
    [Image.name]: Image,
    [Icon.name]: Icon,
  },
  props: {
    /**
     * 已经初始化的微信sdk
     */
    wxSdk: {
      type: Object as PropType<any>,
      required: true,
    },
    /**
     * file list(v-model:fileList(3.x) or fileList.sync(2.x))
     * @type {[{url:string,serverId:string,cprReuslt:{base64:string,file:File}}]}
     * @description
     * url => 图片预览地址,serverId => 微信服务器图片ID cprReuslt => 压缩后的图片base64和file文件
     * 初始化默认展示图片只需要传入url即可
     */
    fileList: {
      type: Array as PropType<ListItem[]>,
      required: true,
    },
    /**
     * 上传区域文字
     */
    title: {
      type: String,
    },
    /**
     * 上传区域 icon
     */
    icon: {
      type: String,
    },
    /**
     * 最大上传图片数量
     */
    count: {
      type: Number,
      default: 9,
    },
    /**
     * 上传区域大小
     * @default 22vw
     */
    size: {
      type: String,
      default: '22vw',
    },
  },
  setup(props, { emit, slots }: any) {
    const { wxSdk } = toRefs(props);
    const state = reactive({
      isVue2,
    });
    const rSize = computed(() => {
      return getNum(props.size) / 3 + getSuffix(props.size);
    });
    const getNum = (str) => {
      return str.replace(/[^0-9]/gi, '');
    };
    const getSuffix = (str) => {
      return str.replace(/[^a-zA-Z]/g, '');
    };
    const clickPreview = (index) => {
      ImagePreview([props.fileList[index].url]);
    };

    const uploadImage = (localId): Promise<string> => {
      return new Promise((resolve, reject) => {
        (props as any).wxSdk.uploadImage({
          localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
          isShowProgressTips: 0, // 默认为1，显示进度提示
          success: function (res) {
            const serverId: string = res.serverId; // 返回图片的服务器端ID
            resolve(serverId);
          },
          fail: function (err) {
            window.console.error(err);
            Toast.fail(`localId:${localId} ${t('uploadError')}`);
            reject(err);
          },
        });
      });
    };
    const readImages = async (localIds) => {
      for (let i = 0; i < localIds.length; i++) {
        // cn: 获取图片url en: get img url
        const imageUrl = await getImageUrl(localIds[i]);
        // cn: 将base64转成blob en: base64 to blob
        // const blob = await dataURLToBlob(imageUrl);
        // cn:压缩 en: compress
        // const cprResult = await fileCompressor(blob, { quality: 0.6 });
        // cn:上传到微信服务器 en:upload to wx server
        const serverId = await uploadImage(localIds[i]);
        // cn: 复制一份数组 en :copy one.
        const fileList = props.fileList.slice(0);
        // add
        fileList.push({
          url: imageUrl,
          serverId,
          // cprResult,
        });
        emit('update:fileList', fileList);
        // all upload completed.
        if (i == localIds.length - 1) {
          Toast.clear();
        }
      }
    };
    const getImageUrl = (localId): Promise<string> => {
      return new Promise((resolve, reject) => {
        console.log(
          'window.__wxjs_is_wkwebview',
          (window as any).__wxjs_is_wkwebview
        );
        if ((window as any).__wxjs_is_wkwebview) {
          (props as any).wxSdk.getLocalImgData({
            localId: localId,
            success: function (res) {
              let localData = res.localData;
              //iOS 系统里面得到的数据，类型为 image/jgp,因此需要替换一下
              localData = localData.replace('jgp', 'jpeg');
              // console.log(localData);
              resolve(localData);
            },
            fail: function (err) {
              window.console.error(err);
              Toast.clear();
              reject(err);
            },
          });
        } else {
          resolve(localId);
        }
      });
    };
    const clickUpload = () => {
      // 检查sdk
      if (!checkSdk()) return;
      // 判断是否达到最大数量
      const count = props.count - props.fileList.length;
      if (count <= 0) {
        Toast(t('maxCount'));
        return;
      }
      (props as any).wxSdk.chooseImage({
        count: count, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          Toast.loading({
            forbidClick: true,
            message: t('uploading'),
            duration: 0,
          });
          readImages(localIds);
        },
        fail: function (err) {
          window.console.error(err);
          Toast.clear();
        },
      });
    };

    const clickDelete = (index) => {
      const fileList = props.fileList.slice(0);
      fileList.splice(index, 1);
      emit('update:fileList', fileList);
    };
    const checkSdk = () => {
      if (!props.wxSdk) {
        console.error('[vp-wx-imgs-uploader]', t('noSdkText'));
        Toast.fail({
          message: t('noSdkText'),
          duration: 2000,
        });
        return false;
      }
      return true;
    };
    onMounted(async () => {
      // checkSdk();
    });

    return {
      ...toRefs(state),
      t,
      clickUpload,
      clickDelete,
      clickPreview,
      rSize,
    };
  },
});
</script>
