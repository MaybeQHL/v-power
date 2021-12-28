import { withInstall } from '../utils';
import _Card from './Card.vue';

const Card = withInstall<typeof _Card>(_Card);

export default Card;
export { Card };
