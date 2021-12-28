import { withInstall } from '../utils';
import _WxImgsUploader from './WxImgsUploader.vue';

const WxImgsUploader = withInstall<typeof _WxImgsUploader>(_WxImgsUploader);

export default WxImgsUploader;
export { WxImgsUploader };
