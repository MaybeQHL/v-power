import { withInstall } from '../utils';
import _List from './List.vue';

const List = withInstall<typeof _List>(_List);

export default List;
export { List };
