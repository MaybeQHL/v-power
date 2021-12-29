import { withInstall } from '../utils';
import _Form from './Form.vue';

const Form = withInstall<typeof _Form>(_Form);

export default Form;
export { Form };
