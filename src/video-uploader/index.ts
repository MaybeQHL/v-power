import { withInstall } from '../utils';
import _VideoUploader from './VideoUploader.vue';

const VideoUploader = withInstall<typeof _VideoUploader>(_VideoUploader);

export default VideoUploader;
export { VideoUploader };
