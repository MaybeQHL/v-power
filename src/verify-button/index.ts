import { withInstall } from '../utils';
import _VerifyButton from './VerifyButton.vue';

const VerifyButton = withInstall<typeof _VerifyButton>(_VerifyButton);

export default VerifyButton;
export { VerifyButton };
