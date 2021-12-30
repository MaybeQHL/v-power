# Internationalization

### Intro

v-power uses Chinese as the default language. If you want to use other languages, please follow the instructions below.

## Usage

### Switch languages

v-power supports multiple languages with the Locale component, and the `Locale.use` method allows you to switch to different languages.

```js
import { Locale } from '@maybecode/v-power';
import enUS from '@maybecode/v-power/v3/es/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### Override default configs

Use `Locale.add` method to modify the default configs.

```js
import { Locale } from '@maybecode/v-power';

const messages = {
  'en-US': {
    vpList: {
      text: 'xxxx',
    },
  },
};

Locale.add(messages);
```

### Config files

Current supported languages:

| Language | Filename |
| -------- | -------- |
| Chinese  | zh-CN    |
| English  | en-US    |
