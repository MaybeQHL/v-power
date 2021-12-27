import { withInstall } from '../utils';
import _Container from './Container.vue';

const Container = withInstall<typeof _Container>(_Container);

export default Container;
export { Container };
