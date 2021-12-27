import { ref, reactive } from 'vue-demi';
import { deepAssign } from '../utils/deep-assign';
import enUS from './lang/en-US';
import zhCN from './lang/zh-CN';

type Message = Record<string, any>;
type Messages = Record<string, Message>;

const lang = ref('zh-CN');
const messages = reactive<Messages>({
  'zh-CN': zhCN,
  'en-US': enUS,
});

const Locale = {
  messages(): Message {
    return messages[lang.value];
  },

  use(newLang: string, newMessages?: Message) {
    lang.value = newLang;
    this.add({ [newLang]: newMessages });
  },

  add(newMessages: Message = {}) {
    deepAssign(messages, newMessages);
  },
};

export default Locale;
export { Locale };
