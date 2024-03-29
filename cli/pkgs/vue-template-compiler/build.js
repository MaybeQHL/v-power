Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex.default : ex;
}

const deindent = _interopDefault(require('de-indent'));
const he = _interopDefault(require('he'));

/*  */

const emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef(v) {
  return v === undefined || v === null;
}

/**
 * Check if value is primitive.
 */
function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  );
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
const _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex(val) {
  const n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(',');
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) {
        return map[val.toLowerCase()];
      }
    : function (val) {
        return map[val];
      };
}

/**
 * Check if a tag is a built-in tag.
 */
const isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
const isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether an object has the property.
 */
const { hasOwnProperty } = Object.prototype;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g;
const camelize = cached((str) =>
  str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
);

/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cached((str) =>
  str.replace(hyphenateRE, '-$1').toLowerCase()
);

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind(fn, ctx) {
  function boundFn(a) {
    const l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

const bind = Function.prototype.bind ? nativeBind : polyfillBind;

/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop(a, b, c) {}

/**
 * Always return false.
 */
const no = function (a, b, c) {
  return false;
};

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
const identity = function (_) {
  return _;
};

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys(modules) {
  return modules
    .reduce((keys, m) => keys.concat(m.staticKeys || []), [])
    .join(',');
}

/*  */

const isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
const canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
const isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
);

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
const unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true,
  });
}

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const ncname = '[a-zA-Z_][\\-\\.0-9_a-zA-Z' + unicodeRegExp.source + ']*';
const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
const startTagOpen = new RegExp('^<' + qnameCapture);
const startTagClose = /^\s*(\/?)>/;
const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
const doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
const comment = /^<!\--/;
const conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
const isPlainTextElement = makeMap('script,style,textarea', true);
const reCache = {};

const decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'",
};
const encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
const encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
const isIgnoreNewlineTag = makeMap('pre,textarea', true);
const shouldIgnoreFirstNewline = function (tag, html) {
  return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
};

function decodeAttr(value, shouldDecodeNewlines) {
  const re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, (match) => decodingMap[match]);
}

function parseHTML(html, options) {
  const stack = [];
  const { expectHTML } = options;
  const isUnaryTag$$1 = options.isUnaryTag || no;
  const canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  let index = 0;
  let last;
  let lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      let textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          const commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(
                html.substring(4, commentEnd),
                index,
                index + commentEnd + 3
              );
            }
            advance(commentEnd + 3);
            continue;
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          const conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue;
          }
        }

        // Doctype:
        const doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue;
        }

        // End tag:
        const endTagMatch = html.match(endTag);
        if (endTagMatch) {
          const curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue;
        }

        // Start tag:
        const startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue;
        }
      }

      let text = void 0;
      let rest = void 0;
      let next = void 0;
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) {
            break;
          }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      const reStackedTag =
        reCache[stackedTag] ||
        (reCache[stackedTag] = new RegExp(
          '([\\s\\S]*?)(</' + stackedTag + '[^>]*>)',
          'i'
        ));
      const rest$1 = html.replace(reStackedTag, (all, text, endTag) => {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return '';
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (
        process.env.NODE_ENV !== 'production' &&
        !stack.length &&
        options.warn
      ) {
        options.warn('Mal-formatted tag at end of template: "' + html + '"', {
          start: index + html.length,
        });
      }
      break;
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance(n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag() {
    const start = html.match(startTagOpen);
    if (start) {
      const match = {
        tagName: start[1],
        attrs: [],
        start: index,
      };
      advance(start[0].length);
      let end;
      let attr;
      while (
        !(end = html.match(startTagClose)) &&
        (attr = html.match(dynamicArgAttribute) || html.match(attribute))
      ) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match;
      }
    }
  }

  function handleStartTag(match) {
    const { tagName } = match;
    const { unarySlash } = match;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    const unary = isUnaryTag$$1(tagName) || !!unarySlash;

    const l = match.attrs.length;
    const attrs = new Array(l);
    for (let i = 0; i < l; i++) {
      const args = match.attrs[i];
      const value = args[3] || args[4] || args[5] || '';
      const shouldDecodeNewlines =
        tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines),
      };
      if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({
        tag: tagName,
        lowerCasedTag: tagName.toLowerCase(),
        attrs,
        start: match.start,
        end: match.end,
      });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag(tagName, start, end) {
    let pos;
    let lowerCasedTagName;
    if (start == null) {
      start = index;
    }
    if (end == null) {
      end = index;
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break;
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (let i = stack.length - 1; i >= pos; i--) {
        if (
          process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn('tag <' + stack[i].tag + '> has no matching end tag.', {
            start: stack[i].start,
            end: stack[i].end,
          });
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

const splitRE = /\r?\n/g;
const replaceRE = /./g;
const isSpecialTag = makeMap('script,style,template', true);

/**
 * Parse a single-file component (*.vue) file into an SFC Descriptor Object.
 */
function parseComponent(content, options) {
  if (options === void 0) options = {};

  const sfc = {
    template: null,
    script: null,
    styles: [],
    customBlocks: [],
    errors: [],
  };
  let depth = 0;
  let currentBlock = null;

  let warn = function (msg) {
    sfc.errors.push(msg);
  };

  if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
    warn = function (msg, range) {
      const data = { msg };
      if (range.start != null) {
        data.start = range.start;
      }
      if (range.end != null) {
        data.end = range.end;
      }
      sfc.errors.push(data);
    };
  }

  function start(tag, attrs, unary, start, end) {
    if (depth === 0) {
      currentBlock = {
        type: tag,
        content: '',
        start: end,
        attrs: attrs.reduce((cumulated, ref) => {
          const { name } = ref;
          const { value } = ref;

          cumulated[name] = value || true;
          return cumulated;
        }, {}),
      };
      if (isSpecialTag(tag)) {
        checkAttrs(currentBlock, attrs);
        if (tag === 'style') {
          sfc.styles.push(currentBlock);
        } else {
          sfc[tag] = currentBlock;
        }
      } else {
        // custom blocks
        sfc.customBlocks.push(currentBlock);
      }
    }
    if (!unary) {
      depth++;
    }
  }

  function checkAttrs(block, attrs) {
    for (let i = 0; i < attrs.length; i++) {
      const attr = attrs[i];
      if (attr.name === 'lang') {
        block.lang = attr.value;
      }
      if (attr.name === 'scoped') {
        block.scoped = true;
      }
      if (attr.name === 'module') {
        block.module = attr.value || true;
      }
      if (attr.name === 'src') {
        block.src = attr.value;
      }
    }
  }

  function end(tag, start) {
    if (depth === 1 && currentBlock) {
      currentBlock.end = start;
      let text = content.slice(currentBlock.start, currentBlock.end);
      if (options.deindent !== false) {
        text = deindent(text);
      }
      // pad content so that linters and pre-processors can output correct
      // line numbers in errors and warnings
      if (currentBlock.type !== 'template' && options.pad) {
        text = padContent(currentBlock, options.pad) + text;
      }
      currentBlock.content = text;
      currentBlock = null;
    }
    depth--;
  }

  function padContent(block, pad) {
    if (pad === 'space') {
      return content.slice(0, block.start).replace(replaceRE, ' ');
    }
    const offset = content.slice(0, block.start).split(splitRE).length;
    const padChar = block.type === 'script' && !block.lang ? '//\n' : '\n';
    return Array(offset).join(padChar);
  }

  parseHTML(content, {
    warn,
    start,
    end,
    outputSourceRange: options.outputSourceRange,
  });

  return sfc;
}

/*  */

// can we use __proto__?
const hasProto = '__proto__' in {};

// Browser environment sniffing
const inBrowser = typeof window !== 'undefined';
const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = UA && /msie|trident/.test(UA);
const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
const isEdge = UA && UA.indexOf('edge/') > 0;
const isAndroid =
  (UA && UA.indexOf('android') > 0) || weexPlatform === 'android';
const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios';
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
const isPhantomJS = UA && /phantomjs/.test(UA);
const isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
const nativeWatch = {}.watch;
if (inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {},
    }); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
let _isServer;
const isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global.process && global.process.env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

// detect devtools
const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

const hasSymbol =
  typeof Symbol !== 'undefined' &&
  isNative(Symbol) &&
  typeof Reflect !== 'undefined' &&
  isNative(Reflect.ownKeys);

let _Set; // $flow-disable-line
/* istanbul ignore if */ if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /* @__PURE__ */ (function () {
    function Set() {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };
    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  })();
}

const ASSET_TYPES = ['component', 'directive', 'filter'];

const LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch',
];

/*  */

const config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS,
};

/*  */

let warn = noop;
let tip = noop;
let generateComponentTrace = noop; // work around flow check
let formatComponentName = noop;

if (process.env.NODE_ENV !== 'production') {
  const hasConsole = typeof console !== 'undefined';
  const classifyRE = /(?:^|[-_])(\w)/g;
  const classify = function (str) {
    return str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    const trace = vm ? generateComponentTrace(vm) : '';

    if (hasConsole && !config.silent) {
      console.error('[Vue warn]: ' + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn(
        '[Vue tip]: ' + msg + (vm ? generateComponentTrace(vm) : '')
      );
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }
    const options =
      typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    let name = options.name || options._componentTag;
    const file = options.__file;
    if (!name && file) {
      const match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? '<' + classify(name) + '>' : '<Anonymous>') +
      (file && includeFile !== false ? ' at ' + file : '')
    );
  };

  const repeat = function (str, n) {
    let res = '';
    while (n) {
      if (n % 2 === 1) {
        res += str;
      }
      if (n > 1) {
        str += str;
      }
      n >>= 1;
    }
    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      const tree = [];
      let currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          const last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return (
        '\n\nfound in\n\n' +
        tree
          .map(
            (vm, i) =>
              '' +
              (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) +
              (Array.isArray(vm)
                ? formatComponentName(vm[0]) +
                  '... (' +
                  vm[1] +
                  ' recursive calls)'
                : formatComponentName(vm))
          )
          .join('\n')
      );
    }
    return '\n\n(found in ' + formatComponentName(vm) + ')';
  };
}

/*  */

let uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
const Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  const subs = this.subs.slice();
  if (process.env.NODE_ENV !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort((a, b) => a.id - b.id);
  }
  for (let i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;

/*  */

const VNode = function VNode(
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

const prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse',
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach((method) => {
  // cache original method
  const original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    const args = [];
    let len = arguments.length;
    while (len--) args[len] = arguments[len];

    const result = original.apply(this, args);
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      ob.observeArray(inserted);
    }
    // notify change
    ob.dep.notify();
    return result;
  });
});

/*  */

const arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
const shouldObserve = true;

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
const Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
  for (let i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }
  let ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1(obj, key, val, customSetter, shallow) {
  const dep = new Dep();

  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get;
  const setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  let childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return;
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    },
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(target, key, val) {
  if (
    process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(
      'Cannot set reactive property on undefined, null, or primitive value: ' +
        target
    );
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  const ob = target.__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' &&
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
          'at runtime - declare it upfront in the data option.'
      );
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
  for (let e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
const strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        'option "' +
          key +
          '" can only be used during instance ' +
          'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child);
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
  if (!from) {
    return to;
  }
  let key;
  let toVal;
  let fromVal;

  const keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') {
      continue;
    }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */
function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      );
    };
  }
  return function mergedInstanceDataFn() {
    // instance merge
    const instanceData =
      typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
    const defaultData =
      typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
    if (instanceData) {
      return mergeData(instanceData, defaultData);
    }
    return defaultData;
  };
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' &&
        warn(
          'The "data" option should be a function ' +
            'that returns a per-instance value in component ' +
            'definitions.',
          vm
        );

      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook(parentVal, childVal) {
  const res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
      ? childVal
      : [childVal]
    : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  const res = [];
  for (let i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

LIFECYCLE_HOOKS.forEach((hook) => {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal, vm, key) {
  const res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' &&
      assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  }
  return res;
}

ASSET_TYPES.forEach((type) => {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }
  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) {
    return childVal;
  }
  const ret = {};
  extend(ret, parentVal);
  for (const key$1 in childVal) {
    let parent = ret[key$1];
    const child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child)
      ? child
      : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */
strats.props = strats.methods = strats.inject = strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) {
    return childVal;
  }
  const ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) {
    extend(ret, childVal);
  }
  return ret;
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      'Invalid value for option "' +
        name +
        '": expected an Object, ' +
        'but got ' +
        toRawType(value) +
        '.',
      vm
    );
  }
}

/*  */

/*  */

/*  */

const callbacks = [];

function flushCallbacks() {
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise));
else if (
  !isIE &&
  typeof MutationObserver !== 'undefined' &&
  (isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]')
) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  const counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate));

/*  */

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
const isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
const acceptValue = makeMap('input,textarea,option,select,progress');
const mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag) && type !== 'button') ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  );
};

const isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

const isValidContentEditableValue = makeMap(
  'events,caret,typing,plaintext-only'
);

const isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,' +
    'truespeed,typemustmatch,visible'
);

/*  */

/*  */

const isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
const isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

const isPreTag = function (tag) {
  return tag === 'pre';
};

const isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math';
  }
}

const isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/*  */

const validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters(exp) {
  let inSingle = false;
  let inDouble = false;
  let inTemplateString = false;
  let inRegex = false;
  let curly = 0;
  let square = 0;
  let paren = 0;
  let lastFilterIndex = 0;
  let c;
  let prev;
  let i;
  let expression;
  let filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5c) {
        inSingle = false;
      }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5c) {
        inDouble = false;
      }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5c) {
        inTemplateString = false;
      }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5c) {
        inRegex = false;
      }
    } else if (
      c === 0x7c && // pipe
      exp.charCodeAt(i + 1) !== 0x7c &&
      exp.charCodeAt(i - 1) !== 0x7c &&
      !curly &&
      !square &&
      !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;
          break; // "
        case 0x27:
          inSingle = true;
          break; // '
        case 0x60:
          inTemplateString = true;
          break; // `
        case 0x28:
          paren++;
          break; // (
        case 0x29:
          paren--;
          break; // )
        case 0x5b:
          square++;
          break; // [
        case 0x5d:
          square--;
          break; // ]
        case 0x7b:
          curly++;
          break; // {
        case 0x7d:
          curly--;
          break; // }
      }
      if (c === 0x2f) {
        // /
        let j = i - 1;
        let p = void 0;
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') {
            break;
          }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression;
}

function wrapFilter(exp, filter) {
  const i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return '_f("' + filter + '")(' + exp + ')';
  }
  const name = filter.slice(0, i);
  const args = filter.slice(i + 1);
  return '_f("' + name + '")(' + exp + (args !== ')' ? ',' + args : args);
}

/*  */

const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

const buildRegex = cached((delimiters) => {
  const open = delimiters[0].replace(regexEscapeRE, '\\$&');
  const close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
});

function parseText(text, delimiters) {
  const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return;
  }
  const tokens = [];
  const rawTokens = [];
  let lastIndex = (tagRE.lastIndex = 0);
  let match;
  let index;
  let tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push((tokenValue = text.slice(lastIndex, index)));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    const exp = parseFilters(match[1].trim());
    tokens.push('_s(' + exp + ')');
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push((tokenValue = text.slice(lastIndex)));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens,
  };
}

/*  */

/* eslint-disable no-unused-vars */
function baseWarn(msg, range) {
  console.error('[Vue compiler]: ' + msg);
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction(modules, key) {
  return modules ? modules.map((m) => m[key]).filter((_) => _) : [];
}

function addProp(el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(
    rangeSetItem({ name, value, dynamic }, range)
  );
  el.plain = false;
}

function addAttr(el, name, value, range, dynamic) {
  const attrs = dynamic
    ? el.dynamicAttrs || (el.dynamicAttrs = [])
    : el.attrs || (el.attrs = []);
  attrs.push(rangeSetItem({ name, value, dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr(el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name, value }, range));
}

function addDirective(
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(
    rangeSetItem(
      {
        name,
        rawName,
        value,
        arg,
        isDynamicArg,
        modifiers,
      },
      range
    )
  );
  el.plain = false;
}

function prependModifierMarker(symbol, name, dynamic) {
  return dynamic ? '_p(' + name + ',"' + symbol + '")' : symbol + name; // mark the event as captured
}

function addHandler(
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' &&
    warn &&
    modifiers.prevent &&
    modifiers.passive
  ) {
    warn(
      "passive and prevent can't be used together. " +
        "Passive handler can't prevent default event.",
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = '(' + name + ")==='click'?'contextmenu':(" + name + ')';
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = '(' + name + ")==='click'?'mouseup':(" + name + ')';
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  let events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  const newHandler = rangeSetItem({ value: value.trim(), dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  const handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr(el, name) {
  return (
    el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
  );
}

function getBindingAttr(el, name, getStatic) {
  const dynamicValue =
    getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue);
  }
  if (getStatic !== false) {
    const staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue);
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr(el, name, removeFromMap) {
  let val;
  if ((val = el.attrsMap[name]) != null) {
    const list = el.attrsList;
    for (let i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break;
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val;
}

function getAndRemoveAttrByRegex(el, name) {
  const list = el.attrsList;
  for (let i = 0, l = list.length; i < l; i++) {
    const attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr;
    }
  }
}

function rangeSetItem(item, range) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item;
}

/*  */

function transformNode(el, options) {
  const warn = options.warn || baseWarn;
  const staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    const res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        'class="' +
          staticClass +
          '": ' +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap.class
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  const classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData(el) {
  let data = '';
  if (el.staticClass) {
    data += 'staticClass:' + el.staticClass + ',';
  }
  if (el.classBinding) {
    data += 'class:' + el.classBinding + ',';
  }
  return data;
}

const klass = {
  staticKeys: ['staticClass'],
  transformNode,
  genData,
};

/*  */

const parseStyleText = cached((cssText) => {
  const res = {};
  const listDelimiter = /;(?![^(]*\))/g;
  const propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});

/*  */

function transformNode$1(el, options) {
  const warn = options.warn || baseWarn;
  const staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      const res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          'style="' +
            staticStyle +
            '": ' +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap.style
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  const styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1(el) {
  let data = '';
  if (el.staticStyle) {
    data += 'staticStyle:' + el.staticStyle + ',';
  }
  if (el.styleBinding) {
    data += 'style:(' + el.styleBinding + '),';
  }
  return data;
}

const style = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1,
};

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel(el, value, modifiers) {
  const ref = modifiers || {};
  const { number } = ref;
  const { trim } = ref;

  const baseValueExpression = '$$v';
  let valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      '(typeof ' +
      baseValueExpression +
      " === 'string'" +
      '? ' +
      baseValueExpression +
      '.trim()' +
      ': ' +
      baseValueExpression +
      ')';
  }
  if (number) {
    valueExpression = '_n(' + valueExpression + ')';
  }
  const assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: '(' + value + ')',
    expression: JSON.stringify(value),
    callback: 'function (' + baseValueExpression + ') {' + assignment + '}',
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode(value, assignment) {
  const res = parseModel(value);
  if (res.key === null) {
    return value + '=' + assignment;
  }
  return '$set(' + res.exp + ', ' + res.key + ', ' + assignment + ')';
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

let len;
let str;
let chr;
let index;
let expressionPos;
let expressionEndPos;

function parseModel(val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index = val.lastIndexOf('.');
    if (index > -1) {
      return {
        exp: val.slice(0, index),
        key: '"' + val.slice(index + 1) + '"',
      };
    }
    return {
      exp: val,
      key: null,
    };
  }

  str = val;
  index = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5b) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos),
  };
}

function next() {
  return str.charCodeAt(++index);
}

function eof() {
  return index >= len;
}

function isStringStart(chr) {
  return chr === 0x22 || chr === 0x27;
}

function parseBracket(chr) {
  let inBracket = 1;
  expressionPos = index;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue;
    }
    if (chr === 0x5b) {
      inBracket++;
    }
    if (chr === 0x5d) {
      inBracket--;
    }
    if (inBracket === 0) {
      expressionEndPos = index;
      break;
    }
  }
}

function parseString(chr) {
  const stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break;
    }
  }
}

/*  */

const onRE = /^@|^v-on:/;
const dirRE = /^v-|^@|^:|^#/;
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;
const dynamicArgRE = /^\[.*\]$/;

const argRE = /:(.*)$/;
const bindRE = /^:|^\.|^v-bind:/;
const modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

const slotRE = /^v-slot(:|$)|^#/;

const lineBreakRE = /[\r\n]/;
const whitespaceRE = /[ \f\t\r\n]+/g;

const invalidAttributeRE = /[\s"'<>\/=]/;

const decodeHTMLCached = cached(he.decode);

const emptySlotScopeToken = '_empty_';

// configurable state
let warn$1;
let delimiters;
let transforms;
let preTransforms;
let postTransforms;
let platformIsPreTag;
let platformMustUseProp;
let platformGetTagNamespace;
let maybeComponent;

function createASTElement(tag, attrs, parent) {
  return {
    type: 1,
    tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent,
    children: [],
  };
}

/**
 * Convert HTML string to AST.
 */
function parse(template, options) {
  warn$1 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  const isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) {
    return !!(
      el.component ||
      el.attrsMap[':is'] ||
      el.attrsMap['v-bind:is'] ||
      !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag))
    );
  };
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  const stack = [];
  const preserveWhitespace = options.preserveWhitespace !== false;
  const whitespaceOption = options.whitespace;
  let root;
  let currentParent;
  let inVPre = false;
  let inPre = false;
  let warned = false;

  function warnOnce(msg, range) {
    if (!warned) {
      warned = true;
      warn$1(msg, range);
    }
  }

  function closeElement(element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        if (process.env.NODE_ENV !== 'production') {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element,
        });
      } else if (process.env.NODE_ENV !== 'production') {
        warnOnce(
          'Component template should contain exactly one root element. ' +
            'If you are using v-if on multiple elements, ' +
            'use v-else-if to chain them instead.',
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          const name = element.slotTarget || '"default"';
          (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[
            name
          ] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter((c) => !c.slotScope);
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (let i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace(el) {
    // remove trailing whitespace node
    if (!inPre) {
      let lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints(el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        'Cannot use <' +
          el.tag +
          '> as component root element because it may ' +
          'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$1,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start(tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      const ns =
        (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      let element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (process.env.NODE_ENV !== 'production') {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce((cumulated, attr) => {
            cumulated[attr.name] = attr;
            return cumulated;
          }, {});
        }
        attrs.forEach((attr) => {
          if (invalidAttributeRE.test(attr.name)) {
            warn$1(
              'Invalid dynamic argument expression: attribute names cannot contain ' +
                'spaces, quotes, <, >, / or =.',
              {
                start: attr.start + attr.name.indexOf('['),
                end: attr.start + attr.name.length,
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' &&
          warn$1(
            'Templates should only be responsible for mapping the state to the ' +
              'UI. Avoid placing tags with side-effects in your templates, such as ' +
              '<' +
              tag +
              '>' +
              ', as they will not be parsed.',
            { start: element.start }
          );
      }

      // apply pre-transforms
      for (let i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        if (process.env.NODE_ENV !== 'production') {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end(tag, start, end$1) {
      const element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars(text, start, end) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              'text "' + text + '" outside root element will be ignored.',
              { start }
            );
          }
        }
        return;
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (
        isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return;
      }
      const { children } = currentParent;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE, ' ');
        }
        let res;
        let child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text,
          };
        } else if (
          text !== ' ' ||
          !children.length ||
          children[children.length - 1].text !== ' '
        ) {
          child = {
            type: 3,
            text,
          };
        }
        if (child) {
          if (
            process.env.NODE_ENV !== 'production' &&
            options.outputSourceRange
          ) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment(text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        const child = {
          type: 3,
          text,
          isComment: true,
        };
        if (
          process.env.NODE_ENV !== 'production' &&
          options.outputSourceRange
        ) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    },
  });
  return root;
}

function processPre(el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs(el) {
  const list = el.attrsList;
  const len = list.length;
  if (len) {
    const attrs = (el.attrs = new Array(len));
    for (let i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value),
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement(element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain =
    !element.key && !element.scopedSlots && !element.attrsList.length;

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (let i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element;
}

function processKey(el) {
  const exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production') {
      if (el.tag === 'template') {
        warn$1(
          '<template> cannot be keyed. Place the key on real elements instead.',
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        const iterator = el.iterator2 || el.iterator1;
        const { parent } = el;
        if (
          iterator &&
          iterator === exp &&
          parent &&
          parent.tag === 'transition-group'
        ) {
          warn$1(
            'Do not use v-for index as key on <transition-group> children, ' +
              'this is the same as not using keys.',
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef(el) {
  const ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor(el) {
  let exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    const res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (process.env.NODE_ENV !== 'production') {
      warn$1('Invalid v-for expression: ' + exp, el.rawAttrsMap['v-for']);
    }
  }
}

function parseFor(exp) {
  const inMatch = exp.match(forAliasRE);
  if (!inMatch) {
    return;
  }
  const res = {};
  res.for = inMatch[2].trim();
  const alias = inMatch[1].trim().replace(stripParensRE, '');
  const iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res;
}

function processIf(el) {
  const exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp,
      block: el,
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    const elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions(el, parent) {
  const prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el,
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      'v-' +
        (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') +
        ' ' +
        'used on element <' +
        el.tag +
        '> without corresponding v-if.',
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement(children) {
  let i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i];
    }
    if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
      warn$1(
        'text "' +
          children[i].text.trim() +
          '" between v-if and v-else(-if) ' +
          'will be ignored.',
        children[i]
      );
    }
    children.pop();
  }
}

function addIfCondition(el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce(el) {
  const once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent(el) {
  let slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && slotScope) {
      warn$1(
        'the "scope" attribute for scoped slots have been deprecated and ' +
          'replaced by "slot-scope" since 2.5. The new "slot-scope" attribute ' +
          'can also be used on plain elements in addition to <template> to ' +
          'denote scoped slots.',
        el.rawAttrsMap.scope,
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && el.attrsMap['v-for']) {
      warn$1(
        'Ambiguous combined usage of slot-scope and v-for on <' +
          el.tag +
          '> ' +
          '(v-for takes higher priority). Use a wrapper <template> for the ' +
          'scoped slot to make it clearer.',
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  const slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(
      el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']
    );
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      const slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.slotTarget || el.slotScope) {
            warn$1('Unexpected mixed usage of different slot syntaxes.', el);
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$1(
              '<template v-slot> can only appear at the root level inside ' +
                'the receiving component',
              el
            );
          }
        }
        const ref = getSlotName(slotBinding);
        const { name } = ref;
        const { dynamic } = ref;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      const slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        if (process.env.NODE_ENV !== 'production') {
          if (!maybeComponent(el)) {
            warn$1(
              'v-slot can only be used on components or <template>.',
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$1('Unexpected mixed usage of different slot syntaxes.', el);
          }
          if (el.scopedSlots) {
            warn$1(
              'To avoid scope ambiguity, the default slot should also use ' +
                '<template> syntax when there are other named slots.',
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        const slots = el.scopedSlots || (el.scopedSlots = {});
        const ref$1 = getSlotName(slotBinding$1);
        const name$1 = ref$1.name;
        const dynamic$1 = ref$1.dynamic;
        const slotContainer = (slots[name$1] = createASTElement(
          'template',
          [],
          el
        ));
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter((c) => {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true;
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName(binding) {
  let name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else if (process.env.NODE_ENV !== 'production') {
      warn$1('v-slot shorthand syntax requires a slot name.', binding);
    }
  }
  return dynamicArgRE.test(name)
    ? // dynamic [name]
      { name: name.slice(1, -1), dynamic: true }
    : // static name
      { name: '"' + name + '"', dynamic: false };
}

// handle <slot/> outlets
function processSlotOutlet(el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$1(
        '`key` does not work on <slot> because slots are abstract outlets ' +
          'and can possibly expand into multiple elements. ' +
          'Use the key on a wrapping element instead.',
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent(el) {
  let binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs(el) {
  const list = el.attrsList;
  let i;
  let l;
  let name;
  let rawName;
  let value;
  let modifiers;
  let syncGen;
  let isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) {
        // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          process.env.NODE_ENV !== 'production' &&
          value.trim().length === 0
        ) {
          warn$1(
            'The value for a v-bind expression cannot be empty. Found in "v-bind:' +
              name +
              '"'
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') {
              name = 'innerHTML';
            }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, '$event');
            if (!isDynamic) {
              addHandler(
                el,
                'update:' + camelize(name),
                syncGen,
                null,
                false,
                warn$1,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  'update:' + hyphenate(name),
                  syncGen,
                  null,
                  false,
                  warn$1,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                '"update:"+(' + name + ')',
                syncGen,
                null,
                false,
                warn$1,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if (
          (modifiers && modifiers.prop) ||
          (!el.component && platformMustUseProp(el.tag, el.attrsMap.type, name))
        ) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) {
        // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(
          el,
          name,
          value,
          modifiers,
          false,
          warn$1,
          list[i],
          isDynamic
        );
      } else {
        // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        const argMatch = name.match(argRE);
        let arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(
          el,
          name,
          rawName,
          value,
          arg,
          isDynamic,
          modifiers,
          list[i]
        );
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        const res = parseText(value, delimiters);
        if (res) {
          warn$1(
            name +
              '="' +
              value +
              '": ' +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (
        !el.component &&
        name === 'muted' &&
        platformMustUseProp(el.tag, el.attrsMap.type, name)
      ) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor(el) {
  let parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}

function parseModifiers(name) {
  const match = name.match(modifierRE);
  if (match) {
    const ret = {};
    match.forEach((m) => {
      ret[m.slice(1)] = true;
    });
    return ret;
  }
}

function makeAttrsMap(attrs) {
  const map = {};
  for (let i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] &&
      !isIE &&
      !isEdge
    ) {
      warn$1('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map;
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag(el) {
  return el.tag === 'script' || el.tag === 'style';
}

function isForbiddenTag(el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' &&
      (!el.attrsMap.type || el.attrsMap.type === 'text/javascript'))
  );
}

const ieNSBug = /^xmlns:NS\d+/;
const ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug(attrs) {
  const res = [];
  for (let i = 0; i < attrs.length; i++) {
    const attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res;
}

function checkForAliasModel(el, value) {
  let _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$1(
        '<' +
          el.tag +
          ' v-model="' +
          value +
          '">: ' +
          'You are binding v-model directly to a v-for iteration alias. ' +
          'This will not be able to modify the v-for source array because ' +
          'writing to the alias is like modifying a function local variable. ' +
          'Consider using an array of objects and use v-model on an object property instead.',
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode(el, options) {
  if (el.tag === 'input') {
    const map = el.attrsMap;
    if (!map['v-model']) {
      return;
    }

    let typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = '(' + map['v-bind'] + ').type';
    }

    if (typeBinding) {
      const ifCondition = getAndRemoveAttr(el, 'v-if', true);
      const ifConditionExtra = ifCondition ? '&&(' + ifCondition + ')' : '';
      const hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      const elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      const branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = '(' + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0,
      });
      // 2. add radio else-if condition
      const branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: '(' + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1,
      });
      // 3. other
      const branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2,
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0;
    }
  }
}

function cloneASTElement(el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent);
}

const model = {
  preTransformNode,
};

const modules = [klass, style, model];

/*  */

let warn$2;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
const RANGE_TOKEN = '__r';

function model$1(el, dir, _warn) {
  warn$2 = _warn;
  const { value } = dir;
  const { modifiers } = dir;
  const { tag } = el;
  const { type } = el.attrsMap;

  if (process.env.NODE_ENV !== 'production') {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$2(
        '<' +
          el.tag +
          ' v-model="' +
          value +
          '" type="file">:\n' +
          'File inputs are read only. Use a v-on:change listener instead.',
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false;
  }
  if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false;
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      '<' +
        el.tag +
        ' v-model="' +
        value +
        '">: ' +
        'v-model is not supported on this element type. ' +
        "If you are working with contenteditable, it's recommended to " +
        'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true;
}

function genCheckboxModel(el, value, modifiers) {
  const number = modifiers && modifiers.number;
  const valueBinding = getBindingAttr(el, 'value') || 'null';
  const trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  const falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(
    el,
    'checked',
    'Array.isArray(' +
      value +
      ')' +
      '?_i(' +
      value +
      ',' +
      valueBinding +
      ')>-1' +
      (trueValueBinding === 'true'
        ? ':(' + value + ')'
        : ':_q(' + value + ',' + trueValueBinding + ')')
  );
  addHandler(
    el,
    'change',
    'var $$a=' +
      value +
      ',' +
      '$$el=$event.target,' +
      '$$c=$$el.checked?(' +
      trueValueBinding +
      '):(' +
      falseValueBinding +
      ');' +
      'if(Array.isArray($$a)){' +
      'var $$v=' +
      (number ? '_n(' + valueBinding + ')' : valueBinding) +
      ',' +
      '$$i=_i($$a,$$v);' +
      'if($$el.checked){$$i<0&&(' +
      genAssignmentCode(value, '$$a.concat([$$v])') +
      ')}' +
      'else{$$i>-1&&(' +
      genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') +
      ')}' +
      '}else{' +
      genAssignmentCode(value, '$$c') +
      '}',
    null,
    true
  );
}

function genRadioModel(el, value, modifiers) {
  const number = modifiers && modifiers.number;
  let valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? '_n(' + valueBinding + ')' : valueBinding;
  addProp(el, 'checked', '_q(' + value + ',' + valueBinding + ')');
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect(el, value, modifiers) {
  const number = modifiers && modifiers.number;
  const selectedVal =
    'Array.prototype.filter' +
    '.call($event.target.options,function(o){return o.selected})' +
    '.map(function(o){var val = "_value" in o ? o._value : o.value;' +
    'return ' +
    (number ? '_n(val)' : 'val') +
    '})';

  const assignment =
    '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  let code = 'var $$selectedVal = ' + selectedVal + ';';
  code = code + ' ' + genAssignmentCode(value, assignment);
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel(el, value, modifiers) {
  const { type } = el.attrsMap;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (process.env.NODE_ENV !== 'production') {
    const value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    const typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      const binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$2(
        binding +
          '="' +
          value$1 +
          '" conflicts with v-model on the same element ' +
          'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  const ref = modifiers || {};
  const { lazy } = ref;
  const { number } = ref;
  const { trim } = ref;
  const needCompositionGuard = !lazy && type !== 'range';
  const event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

  let valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = '$event.target.value.trim()';
  }
  if (number) {
    valueExpression = '_n(' + valueExpression + ')';
  }

  let code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = 'if($event.target.composing)return;' + code;
  }

  addProp(el, 'value', '(' + value + ')');
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

function text(el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', '_s(' + dir.value + ')', dir);
  }
}

/*  */

function html(el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', '_s(' + dir.value + ')', dir);
  }
}

const directives = {
  model: model$1,
  text,
  html,
};

/*  */

const baseOptions = {
  expectHTML: true,
  modules,
  directives,
  isPreTag,
  isUnaryTag,
  mustUseProp,
  canBeLeftOpenTag,
  isReservedTag,
  getTagNamespace,
  staticKeys: genStaticKeys(modules),
};

/*  */

let isStaticKey;
let isPlatformReservedTag;

const genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize(root, options) {
  if (!root) {
    return;
  }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1(keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
  );
}

function markStatic(node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return;
    }
    for (let i = 0, l = node.children.length; i < l; i++) {
      const child = node.children[i];
      markStatic(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (let i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        const { block } = node.ifConditions[i$1];
        markStatic(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots(node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (
      node.static &&
      node.children.length &&
      !(node.children.length === 1 && node.children[0].type === 3)
    ) {
      node.staticRoot = true;
      return;
    }
    node.staticRoot = false;

    if (node.children) {
      for (let i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (let i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic(node) {
  if (node.type === 2) {
    // expression
    return false;
  }
  if (node.type === 3) {
    // text
    return true;
  }
  return !!(
    node.pre ||
    (!node.hasBindings && // no dynamic bindings
      !node.if &&
      !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey))
  );
}

function isDirectChildOfTemplateFor(node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false;
    }
    if (node.for) {
      return true;
    }
  }
  return false;
}

/*  */

const fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
const fnInvokeRE = /\([^)]*?\);*$/;
const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
const keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  delete: [8, 46],
};

// KeyboardEvent.key aliases
const keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  delete: ['Backspace', 'Delete', 'Del'],
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
const genGuard = function (condition) {
  return 'if(' + condition + ')return null;';
};

const modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard('$event.target !== $event.currentTarget'),
  ctrl: genGuard('!$event.ctrlKey'),
  shift: genGuard('!$event.shiftKey'),
  alt: genGuard('!$event.altKey'),
  meta: genGuard('!$event.metaKey'),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2"),
};

function genHandlers(events, isNative) {
  const prefix = isNative ? 'nativeOn:' : 'on:';
  let staticHandlers = '';
  let dynamicHandlers = '';
  for (const name in events) {
    const handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + ',' + handlerCode + ',';
    } else {
      staticHandlers += '"' + name + '":' + handlerCode + ',';
    }
  }
  staticHandlers = '{' + staticHandlers.slice(0, -1) + '}';
  if (dynamicHandlers) {
    return (
      prefix +
      '_d(' +
      staticHandlers +
      ',[' +
      dynamicHandlers.slice(0, -1) +
      '])'
    );
  }
  return prefix + staticHandlers;
}

function genHandler(handler) {
  if (!handler) {
    return 'function(){}';
  }

  if (Array.isArray(handler)) {
    return '[' + handler.map((handler) => genHandler(handler)).join(',') + ']';
  }

  const isMethodPath = simplePathRE.test(handler.value);
  const isFunctionExpression = fnExpRE.test(handler.value);
  const isFunctionInvocation = simplePathRE.test(
    handler.value.replace(fnInvokeRE, '')
  );

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value;
    }
    return (
      'function($event){' +
      (isFunctionInvocation ? 'return ' + handler.value : handler.value) +
      '}'
    ); // inline statement
  }
  let code = '';
  let genModifierCode = '';
  const keys = [];
  for (const key in handler.modifiers) {
    if (modifierCode[key]) {
      genModifierCode += modifierCode[key];
      // left/right
      if (keyCodes[key]) {
        keys.push(key);
      }
    } else if (key === 'exact') {
      var { modifiers } = handler;
      genModifierCode += genGuard(
        ['ctrl', 'shift', 'alt', 'meta']
          .filter((keyModifier) => !modifiers[keyModifier])
          .map((keyModifier) => '$event.' + keyModifier + 'Key')
          .join('||')
      );
    } else {
      keys.push(key);
    }
  }
  if (keys.length) {
    code += genKeyFilter(keys);
  }
  // Make sure modifiers like prevent and stop get executed after key filtering
  if (genModifierCode) {
    code += genModifierCode;
  }
  const handlerCode = isMethodPath
    ? 'return ' + handler.value + '.apply(null, arguments)'
    : isFunctionExpression
    ? 'return (' + handler.value + ').apply(null, arguments)'
    : isFunctionInvocation
    ? 'return ' + handler.value
    : handler.value;
  return 'function($event){' + code + handlerCode + '}';
}

function genKeyFilter(keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    keys.map(genFilterCode).join('&&') +
    ')return null;'
  );
}

function genFilterCode(key) {
  const keyVal = parseInt(key, 10);
  if (keyVal) {
    return '$event.keyCode!==' + keyVal;
  }
  const keyCode = keyCodes[key];
  const keyName = keyNames[key];
  return (
    '_k($event.keyCode,' +
    JSON.stringify(key) +
    ',' +
    JSON.stringify(keyCode) +
    ',' +
    '$event.key,' +
    '' +
    JSON.stringify(keyName) +
    ')'
  );
}

/*  */

function on(el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn('v-on without argument does not support modifiers.');
  }
  el.wrapListeners = function (code) {
    return '_g(' + code + ',' + dir.value + ')';
  };
}

/*  */

function bind$1(el, dir) {
  el.wrapData = function (code) {
    return (
      '_b(' +
      code +
      ",'" +
      el.tag +
      "'," +
      dir.value +
      ',' +
      (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') +
      (dir.modifiers && dir.modifiers.sync ? ',true' : '') +
      ')'
    );
  };
}

/*  */

const baseDirectives = {
  on,
  bind: bind$1,
  cloak: noop,
};

/*  */

const CodegenState = function CodegenState(options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  const isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) {
    return !!el.component || !isReservedTag(el.tag);
  };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};

function generate(ast, options) {
  const state = new CodegenState(options);
  // fix #11483, Root level <script> tags should not be rendered.
  const code = ast
    ? ast.tag === 'script'
      ? 'null'
      : genElement(ast, state)
    : '_c("div")';
  return {
    render: 'with(this){return ' + code + '}',
    staticRenderFns: state.staticRenderFns,
  };
}

function genElement(el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state);
  }
  if (el.once && !el.onceProcessed) {
    return genOnce(el, state);
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state);
  }
  if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  }
  if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0';
  }
  if (el.tag === 'slot') {
    return genSlot(el, state);
  }
  // component or element
  let code;
  if (el.component) {
    code = genComponent(el.component, el, state);
  } else {
    let data;
    if (!el.plain || (el.pre && state.maybeComponent(el))) {
      data = genData$2(el, state);
    }

    const children = el.inlineTemplate ? null : genChildren(el, state, true);
    code =
      "_c('" +
      el.tag +
      "'" +
      (data ? ',' + data : '') +
      (children ? ',' + children : '') +
      ')';
  }
  // module transforms
  for (let i = 0; i < state.transforms.length; i++) {
    code = state.transforms[i](el, code);
  }
  return code;
}

// hoist static sub-trees out
function genStatic(el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  const originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(
    'with(this){return ' + genElement(el, state) + '}'
  );
  state.pre = originalPreState;
  return (
    '_m(' +
    (state.staticRenderFns.length - 1) +
    (el.staticInFor ? ',true' : '') +
    ')'
  );
}

// v-once
function genOnce(el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  }
  if (el.staticInFor) {
    let key = '';
    let { parent } = el;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break;
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' &&
        state.warn(
          'v-once can only be used inside v-for that is keyed. ',
          el.rawAttrsMap['v-once']
        );
      return genElement(el, state);
    }
    return (
      '_o(' + genElement(el, state) + ',' + state.onceId++ + ',' + key + ')'
    );
  }
  return genStatic(el, state);
}

function genIf(el, state, altGen, altEmpty) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}

function genIfConditions(conditions, state, altGen, altEmpty) {
  if (!conditions.length) {
    return altEmpty || '_e()';
  }

  const condition = conditions.shift();
  if (condition.exp) {
    return (
      '(' +
      condition.exp +
      ')?' +
      genTernaryExp(condition.block) +
      ':' +
      genIfConditions(conditions, state, altGen, altEmpty)
    );
  }
  return '' + genTernaryExp(condition.block);

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp(el) {
    return altGen
      ? altGen(el, state)
      : el.once
      ? genOnce(el, state)
      : genElement(el, state);
  }
}

function genFor(el, state, altGen, altHelper) {
  const exp = el.for;
  const { alias } = el;
  const iterator1 = el.iterator1 ? ',' + el.iterator1 : '';
  const iterator2 = el.iterator2 ? ',' + el.iterator2 : '';

  if (
    process.env.NODE_ENV !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      '<' +
        el.tag +
        ' v-for="' +
        alias +
        ' in ' +
        exp +
        '">: component lists rendered with ' +
        'v-for should have explicit keys. ' +
        'See https://vuejs.org/guide/list.html#key for more info.',
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (
    (altHelper || '_l') +
    '((' +
    exp +
    '),' +
    'function(' +
    alias +
    iterator1 +
    iterator2 +
    '){' +
    'return ' +
    (altGen || genElement)(el, state) +
    '})'
  );
}

function genData$2(el, state) {
  let data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  const dirs = genDirectives(el, state);
  if (dirs) {
    data += dirs + ',';
  }

  // key
  if (el.key) {
    data += 'key:' + el.key + ',';
  }
  // ref
  if (el.ref) {
    data += 'ref:' + el.ref + ',';
  }
  if (el.refInFor) {
    data += 'refInFor:true,';
  }
  // pre
  if (el.pre) {
    data += 'pre:true,';
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += 'tag:"' + el.tag + '",';
  }
  // module data generation functions
  for (let i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += 'attrs:' + genProps(el.attrs) + ',';
  }
  // DOM props
  if (el.props) {
    data += 'domProps:' + genProps(el.props) + ',';
  }
  // event handlers
  if (el.events) {
    data += genHandlers(el.events, false) + ',';
  }
  if (el.nativeEvents) {
    data += genHandlers(el.nativeEvents, true) + ',';
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += 'slot:' + el.slotTarget + ',';
  }
  // scoped slots
  if (el.scopedSlots) {
    data += genScopedSlots(el, el.scopedSlots, state) + ',';
  }
  // component v-model
  if (el.model) {
    data +=
      'model:{value:' +
      el.model.value +
      ',callback:' +
      el.model.callback +
      ',expression:' +
      el.model.expression +
      '},';
  }
  // inline-template
  if (el.inlineTemplate) {
    const inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ',';
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data =
      '_b(' + data + ',"' + el.tag + '",' + genProps(el.dynamicAttrs) + ')';
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data;
}

function genDirectives(el, state) {
  const dirs = el.directives;
  if (!dirs) {
    return;
  }
  let res = 'directives:[';
  let hasRuntime = false;
  let i;
  let l;
  let dir;
  let needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    const gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res +=
        '{name:"' +
        dir.name +
        '",rawName:"' +
        dir.rawName +
        '"' +
        (dir.value
          ? ',value:(' + dir.value + '),expression:' + JSON.stringify(dir.value)
          : '') +
        (dir.arg
          ? ',arg:' + (dir.isDynamicArg ? dir.arg : '"' + dir.arg + '"')
          : '') +
        (dir.modifiers ? ',modifiers:' + JSON.stringify(dir.modifiers) : '') +
        '},';
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']';
  }
}

function genInlineTemplate(el, state) {
  const ast = el.children[0];
  if (
    process.env.NODE_ENV !== 'production' &&
    (el.children.length !== 1 || ast.type !== 1)
  ) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    const inlineRenderFns = generate(ast, state.options);
    return (
      'inlineTemplate:{render:function(){' +
      inlineRenderFns.render +
      '},staticRenderFns:[' +
      inlineRenderFns.staticRenderFns
        .map((code) => 'function(){' + code + '}')
        .join(',') +
      ']}'
    );
  }
}

function genScopedSlots(el, slots, state) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  let needsForceUpdate =
    el.for ||
    Object.keys(slots).some((key) => {
      const slot = slots[key];
      return (
        slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      );
    });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  let needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    let { parent } = el;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break;
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  const generatedSlots = Object.keys(slots)
    .map((key) => genScopedSlot(slots[key], state))
    .join(',');

  return (
    'scopedSlots:_u([' +
    generatedSlots +
    ']' +
    (needsForceUpdate ? ',null,true' : '') +
    (!needsForceUpdate && needsKey
      ? ',null,false,' + hash(generatedSlots)
      : '') +
    ')'
  );
}

function hash(str) {
  let hash = 5381;
  let i = str.length;
  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0;
}

function containsSlotChild(el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true;
    }
    return el.children.some(containsSlotChild);
  }
  return false;
}

function genScopedSlot(el, state) {
  const isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, 'null');
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot);
  }
  const slotScope =
    el.slotScope === emptySlotScopeToken ? '' : String(el.slotScope);
  const fn =
    'function(' +
    slotScope +
    '){' +
    'return ' +
    (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? '(' +
          el.if +
          ')?' +
          (genChildren(el, state) || 'undefined') +
          ':undefined'
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) +
    '}';
  // reverse proxy v-slot without scope on this.$slots
  const reverseProxy = slotScope ? '' : ',proxy:true';
  return (
    '{key:' + (el.slotTarget || '"default"') + ',fn:' + fn + reverseProxy + '}'
  );
}

function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
  const { children } = el;
  if (children.length) {
    const el$1 = children[0];
    // optimize single v-for
    if (
      children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      const normalizationType = checkSkip
        ? state.maybeComponent(el$1)
          ? ',1'
          : ',0'
        : '';
      return (
        '' + (altGenElement || genElement)(el$1, state) + normalizationType
      );
    }
    const normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    const gen = altGenNode || genNode;
    return (
      '[' +
      children.map((c) => gen(c, state)).join(',') +
      ']' +
      (normalizationType$1 ? ',' + normalizationType$1 : '')
    );
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType(children, maybeComponent) {
  let res = 0;
  for (let i = 0; i < children.length; i++) {
    const el = children[i];
    if (el.type !== 1) {
      continue;
    }
    if (
      needsNormalization(el) ||
      (el.ifConditions &&
        el.ifConditions.some((c) => needsNormalization(c.block)))
    ) {
      res = 2;
      break;
    }
    if (
      maybeComponent(el) ||
      (el.ifConditions && el.ifConditions.some((c) => maybeComponent(c.block)))
    ) {
      res = 1;
    }
  }
  return res;
}

function needsNormalization(el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
}

function genNode(node, state) {
  if (node.type === 1) {
    return genElement(node, state);
  }
  if (node.type === 3 && node.isComment) {
    return genComment(node);
  }
  return genText(node);
}

function genText(text) {
  return (
    '_v(' +
    (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) +
    ')'
  );
}

function genComment(comment) {
  return '_e(' + JSON.stringify(comment.text) + ')';
}

function genSlot(el, state) {
  const slotName = el.slotName || '"default"';
  const children = genChildren(el, state);
  let res =
    '_t(' + slotName + (children ? ',function(){return ' + children + '}' : '');
  const attrs =
    el.attrs || el.dynamicAttrs
      ? genProps(
          (el.attrs || []).concat(el.dynamicAttrs || []).map((attr) => ({
            // slot props are camelized
            name: camelize(attr.name),
            value: attr.value,
            dynamic: attr.dynamic,
          }))
        )
      : null;
  const bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ',null';
  }
  if (attrs) {
    res += ',' + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + ',' + bind$$1;
  }
  return res + ')';
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent(componentName, el, state) {
  const children = el.inlineTemplate ? null : genChildren(el, state, true);
  return (
    '_c(' +
    componentName +
    ',' +
    genData$2(el, state) +
    (children ? ',' + children : '') +
    ')'
  );
}

function genProps(props) {
  let staticProps = '';
  let dynamicProps = '';
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    const value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += prop.name + ',' + value + ',';
    } else {
      staticProps += '"' + prop.name + '":' + value + ',';
    }
  }
  staticProps = '{' + staticProps.slice(0, -1) + '}';
  if (dynamicProps) {
    return '_d(' + staticProps + ',[' + dynamicProps.slice(0, -1) + '])';
  }
  return staticProps;
}

// #3895, #4268
function transformSpecialNewlines(text) {
  return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
const prohibitedKeywordRE = new RegExp(
  '\\b' +
    (
      'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
      'super,throw,while,yield,delete,export,import,return,switch,default,' +
      'extends,finally,continue,debugger,function,arguments'
    )
      .split(',')
      .join('\\b|\\b') +
    '\\b'
);

// these unary operators should not be used as property/method names
const unaryOperatorsRE = new RegExp(
  '\\b' +
    'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') +
    '\\s*\\([^\\)]*\\)'
);

// strip strings in expressions
const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors(ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode(node, warn) {
  if (node.type === 1) {
    for (const name in node.attrsMap) {
      if (dirRE.test(name)) {
        const value = node.attrsMap[name];
        if (value) {
          const range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, 'v-for="' + value + '"', warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(
              value,
              name + '="' + value + '"',
              warn,
              range
            );
          } else if (onRE.test(name)) {
            checkEvent(value, name + '="' + value + '"', warn, range);
          } else {
            checkExpression(value, name + '="' + value + '"', warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent(exp, text, warn, range) {
  const stripped = exp.replace(stripStringRE, '');
  const keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      'avoid using JavaScript unary operator as property name: ' +
        '"' +
        keywordMatch[0] +
        '" in expression ' +
        text.trim(),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor(node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier(ident, type, text, warn, range) {
  if (typeof ident === 'string') {
    try {
      new Function('var ' + ident + '=_');
    } catch (e) {
      warn(
        'invalid ' + type + ' "' + ident + '" in expression: ' + text.trim(),
        range
      );
    }
  }
}

function checkExpression(exp, text, warn, range) {
  try {
    new Function('return ' + exp);
  } catch (e) {
    const keywordMatch = exp
      .replace(stripStringRE, '')
      .match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        'avoid using JavaScript keyword as property name: ' +
          '"' +
          keywordMatch[0] +
          '"\n  Raw expression: ' +
          text.trim(),
        range
      );
    } else {
      warn(
        'invalid expression: ' +
          e.message +
          ' in\n\n' +
          '    ' +
          exp +
          '\n\n' +
          '  Raw expression: ' +
          text.trim() +
          '\n',
        range
      );
    }
  }
}

function checkFunctionParameterExpression(exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      'invalid function parameter expression: ' +
        e.message +
        ' in\n\n' +
        '    ' +
        exp +
        '\n\n' +
        '  Raw expression: ' +
        text.trim() +
        '\n',
      range
    );
  }
}

/*  */

const range = 2;

function generateCodeFrame(source, start, end) {
  if (start === void 0) start = 0;
  if (end === void 0) end = source.length;

  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) {
          continue;
        }
        res.push(
          '' +
            (j + 1) +
            repeat$1(' ', 3 - String(j + 1).length) +
            '|  ' +
            lines[j]
        );
        const lineLength = lines[j].length;
        if (j === i) {
          // push underline
          const pad = start - (count - lineLength) + 1;
          const length = end > count ? lineLength - pad : end - start;
          res.push('   |  ' + repeat$1(' ', pad) + repeat$1('^', length));
        } else if (j > i) {
          if (end > count) {
            const length$1 = Math.min(end - count, lineLength);
            res.push('   |  ' + repeat$1('^', length$1));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join('\n');
}

function repeat$1(str, n) {
  let result = '';
  if (n > 0) {
    while (true) {
      // eslint-disable-line
      if (n & 1) {
        result += str;
      }
      n >>>= 1;
      if (n <= 0) {
        break;
      }
      str += str;
    }
  }
  return result;
}

/*  */

function createFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({ err, code });
    return noop;
  }
}

function createCompileToFunctionFn(compile) {
  const cache = Object.create(null);

  return function compileToFunctions(template, options, vm) {
    options = extend({}, options);
    const warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
          );
        }
      }
    }

    // check cache
    const key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key];
    }

    // compile
    const compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach((e) => {
            warn$$1(
              'Error compiling template:\n\n' +
                e.msg +
                '\n\n' +
                generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            'Error compiling template:\n\n' +
              template +
              '\n\n' +
              compiled.errors.map((e) => '- ' + e).join('\n') +
              '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach((e) => tip(e.msg, vm));
        } else {
          compiled.tips.forEach((msg) => tip(msg, vm));
        }
      }
    }

    // turn code into functions
    const res = {};
    const fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map((code) =>
      createFunction(code, fnGenErrors)
    );

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          'Failed to generate render function:\n\n' +
            fnGenErrors
              .map((ref) => {
                const { err } = ref;
                const { code } = ref;

                return err.toString() + ' in\n\n' + code + '\n';
              })
              .join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res);
  };
}

/*  */

function createCompilerCreator(baseCompile) {
  return function createCompiler(baseOptions) {
    function compile(template, options) {
      const finalOptions = Object.create(baseOptions);
      const errors = [];
      const tips = [];

      let warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (
          process.env.NODE_ENV !== 'production' &&
          options.outputSourceRange
        ) {
          // $flow-disable-line
          const leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            const data = { msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(
            options.modules
          );
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (const key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      const compiled = baseCompile(template.trim(), finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled;
    }

    return {
      compile,
      compileToFunctions: createCompileToFunctionFn(compile),
    };
  };
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
const createCompiler = createCompilerCreator((template, options) => {
  const ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  const code = generate(ast, options);
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns,
  };
});

/*  */

const ref = createCompiler(baseOptions);
const { compile } = ref;
const { compileToFunctions } = ref;

/*  */

const isAttr = makeMap(
  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
    'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
    'checked,cite,class,code,codebase,color,cols,colspan,content,' +
    'contenteditable,contextmenu,controls,coords,data,datetime,default,' +
    'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,for,' +
    'form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,' +
    'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
    'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
    'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
    'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
    'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
    'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
    'target,title,usemap,value,width,wrap'
);

/* istanbul ignore next */
const isRenderableAttr = function (name) {
  return (
    isAttr(name) || name.indexOf('data-') === 0 || name.indexOf('aria-') === 0
  );
};

const propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
};

const ESC = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;',
};

function escape(s) {
  return s.replace(/[<>"&]/g, escapeChar);
}

function escapeChar(a) {
  return ESC[a] || a;
}

/*  */

const plainStringRE = /^"(?:[^"\\]|\\.)*"$|^'(?:[^'\\]|\\.)*'$/;

// let the model AST transform translate v-model into appropriate
// props bindings
function applyModelTransform(el, state) {
  if (el.directives) {
    for (let i = 0; i < el.directives.length; i++) {
      const dir = el.directives[i];
      if (dir.name === 'model') {
        state.directives.model(el, dir, state.warn);
        // remove value for textarea as its converted to text
        if (el.tag === 'textarea' && el.props) {
          el.props = el.props.filter((p) => p.name !== 'value');
        }
        break;
      }
    }
  }
}

function genAttrSegments(attrs) {
  return attrs.map((ref) => {
    const { name } = ref;
    const { value } = ref;

    return genAttrSegment(name, value);
  });
}

function genDOMPropSegments(props, attrs) {
  const segments = [];
  props.forEach((ref) => {
    let { name } = ref;
    const { value } = ref;

    name = propsToAttrMap[name] || name.toLowerCase();
    if (
      isRenderableAttr(name) &&
      !(attrs && attrs.some((a) => a.name === name))
    ) {
      segments.push(genAttrSegment(name, value));
    }
  });
  return segments;
}

function genAttrSegment(name, value) {
  if (plainStringRE.test(value)) {
    // force double quote
    value = value.replace(/^'|'$/g, '"');
    // force enumerated attr to "true"
    if (isEnumeratedAttr(name) && value !== '"false"') {
      value = '"true"';
    }
    return {
      type: RAW,
      value: isBooleanAttr(name)
        ? ' ' + name + '="' + name + '"'
        : value === '""'
        ? ' ' + name
        : ' ' + name + '="' + JSON.parse(value) + '"',
    };
  }
  return {
    type: EXPRESSION,
    value: '_ssrAttr(' + JSON.stringify(name) + ',' + value + ')',
  };
}

function genClassSegments(staticClass, classBinding) {
  if (staticClass && !classBinding) {
    return [{ type: RAW, value: ' class="' + JSON.parse(staticClass) + '"' }];
  }
  return [
    {
      type: EXPRESSION,
      value:
        '_ssrClass(' +
        (staticClass || 'null') +
        ',' +
        (classBinding || 'null') +
        ')',
    },
  ];
}

function genStyleSegments(
  staticStyle,
  parsedStaticStyle,
  styleBinding,
  vShowExpression
) {
  if (staticStyle && !styleBinding && !vShowExpression) {
    return [{ type: RAW, value: ' style=' + JSON.stringify(staticStyle) }];
  }
  return [
    {
      type: EXPRESSION,
      value:
        '_ssrStyle(' +
        (parsedStaticStyle || 'null') +
        ',' +
        (styleBinding || 'null') +
        ', ' +
        (vShowExpression
          ? '{ display: (' + vShowExpression + ") ? '' : 'none' }"
          : 'null') +
        ')',
    },
  ];
}

/*  */

// optimizability constants
const optimizability = {
  FALSE: 0, // whole sub tree un-optimizable
  FULL: 1, // whole sub tree optimizable
  SELF: 2, // self optimizable but has some un-optimizable children
  CHILDREN: 3, // self un-optimizable but have fully optimizable children
  PARTIAL: 4, // self un-optimizable with some un-optimizable children
};

let isPlatformReservedTag$1;

function optimize$1(root, options) {
  if (!root) {
    return;
  }
  isPlatformReservedTag$1 = options.isReservedTag || no;
  walk(root, true);
}

function walk(node, isRoot) {
  if (isUnOptimizableTree(node)) {
    node.ssrOptimizability = optimizability.FALSE;
    return;
  }
  // root node or nodes with custom directives should always be a VNode
  const selfUnoptimizable = isRoot || hasCustomDirective(node);
  const check = function (child) {
    if (child.ssrOptimizability !== optimizability.FULL) {
      node.ssrOptimizability = selfUnoptimizable
        ? optimizability.PARTIAL
        : optimizability.SELF;
    }
  };
  if (selfUnoptimizable) {
    node.ssrOptimizability = optimizability.CHILDREN;
  }
  if (node.type === 1) {
    for (let i = 0, l = node.children.length; i < l; i++) {
      const child = node.children[i];
      walk(child);
      check(child);
    }
    if (node.ifConditions) {
      for (let i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        const { block } = node.ifConditions[i$1];
        walk(block, isRoot);
        check(block);
      }
    }
    if (
      node.ssrOptimizability == null ||
      (!isRoot && (node.attrsMap['v-html'] || node.attrsMap['v-text']))
    ) {
      node.ssrOptimizability = optimizability.FULL;
    } else {
      node.children = optimizeSiblings(node);
    }
  } else {
    node.ssrOptimizability = optimizability.FULL;
  }
}

function optimizeSiblings(el) {
  const { children } = el;
  const optimizedChildren = [];

  let currentOptimizableGroup = [];
  const pushGroup = function () {
    if (currentOptimizableGroup.length) {
      optimizedChildren.push({
        type: 1,
        parent: el,
        tag: 'template',
        attrsList: [],
        attrsMap: {},
        rawAttrsMap: {},
        children: currentOptimizableGroup,
        ssrOptimizability: optimizability.FULL,
      });
    }
    currentOptimizableGroup = [];
  };

  for (let i = 0; i < children.length; i++) {
    const c = children[i];
    if (c.ssrOptimizability === optimizability.FULL) {
      currentOptimizableGroup.push(c);
    } else {
      // wrap fully-optimizable adjacent siblings inside a template tag
      // so that they can be optimized into a single ssrNode by codegen
      pushGroup();
      optimizedChildren.push(c);
    }
  }
  pushGroup();
  return optimizedChildren;
}

function isUnOptimizableTree(node) {
  if (node.type === 2 || node.type === 3) {
    // text or expression
    return false;
  }
  return (
    isBuiltInTag(node.tag) || // built-in (slot, component)
    !isPlatformReservedTag$1(node.tag) || // custom component
    !!node.component || // "is" component
    isSelectWithModel(node) // <select v-model> requires runtime inspection
  );
}

const isBuiltInDir = makeMap('text,html,show,on,bind,model,pre,cloak,once');

function hasCustomDirective(node) {
  return (
    node.type === 1 &&
    node.directives &&
    node.directives.some((d) => !isBuiltInDir(d.name))
  );
}

// <select v-model> cannot be optimized because it requires a runtime check
// to determine proper selected option
function isSelectWithModel(node) {
  return (
    node.type === 1 &&
    node.tag === 'select' &&
    node.directives != null &&
    node.directives.some((d) => d.name === 'model')
  );
}

/*  */

// segment types
var RAW = 0;
const INTERPOLATION = 1;
var EXPRESSION = 2;

function generate$1(ast, options) {
  const state = new CodegenState(options);
  const code = ast ? genSSRElement(ast, state) : '_c("div")';
  return {
    render: 'with(this){return ' + code + '}',
    staticRenderFns: state.staticRenderFns,
  };
}

function genSSRElement(el, state) {
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genSSRElement);
  }
  if (el.if && !el.ifProcessed) {
    return genIf(el, state, genSSRElement);
  }
  if (el.tag === 'template' && !el.slotTarget) {
    return el.ssrOptimizability === optimizability.FULL
      ? genChildrenAsStringNode(el, state)
      : genSSRChildren(el, state) || 'void 0';
  }

  switch (el.ssrOptimizability) {
    case optimizability.FULL:
      // stringify whole tree
      return genStringElement(el, state);
    case optimizability.SELF:
      // stringify self and check children
      return genStringElementWithChildren(el, state);
    case optimizability.CHILDREN:
      // generate self as VNode and stringify children
      return genNormalElement(el, state, true);
    case optimizability.PARTIAL:
      // generate self as VNode and check children
      return genNormalElement(el, state, false);
    default:
      // bail whole tree
      return genElement(el, state);
  }
}

function genNormalElement(el, state, stringifyChildren) {
  const data = el.plain ? undefined : genData$2(el, state);
  const children = stringifyChildren
    ? '[' + genChildrenAsStringNode(el, state) + ']'
    : genSSRChildren(el, state, true);
  return (
    "_c('" +
    el.tag +
    "'" +
    (data ? ',' + data : '') +
    (children ? ',' + children : '') +
    ')'
  );
}

function genSSRChildren(el, state, checkSkip) {
  return genChildren(el, state, checkSkip, genSSRElement, genSSRNode);
}

function genSSRNode(el, state) {
  return el.type === 1 ? genSSRElement(el, state) : genText(el);
}

function genChildrenAsStringNode(el, state) {
  return el.children.length
    ? '_ssrNode(' + flattenSegments(childrenToSegments(el, state)) + ')'
    : '';
}

function genStringElement(el, state) {
  return '_ssrNode(' + elementToString(el, state) + ')';
}

function genStringElementWithChildren(el, state) {
  const children = genSSRChildren(el, state, true);
  return (
    '_ssrNode(' +
    flattenSegments(elementToOpenTagSegments(el, state)) +
    ',"</' +
    el.tag +
    '>"' +
    (children ? ',' + children : '') +
    ')'
  );
}

function elementToString(el, state) {
  return '(' + flattenSegments(elementToSegments(el, state)) + ')';
}

function elementToSegments(el, state) {
  // v-for / v-if
  if (el.for && !el.forProcessed) {
    el.forProcessed = true;
    return [
      {
        type: EXPRESSION,
        value: genFor(el, state, elementToString, '_ssrList'),
      },
    ];
  }
  if (el.if && !el.ifProcessed) {
    el.ifProcessed = true;
    return [
      {
        type: EXPRESSION,
        value: genIf(el, state, elementToString, '"<!---->"'),
      },
    ];
  }
  if (el.tag === 'template') {
    return childrenToSegments(el, state);
  }

  const openSegments = elementToOpenTagSegments(el, state);
  const childrenSegments = childrenToSegments(el, state);
  const ref = state.options;
  const { isUnaryTag } = ref;
  const close =
    isUnaryTag && isUnaryTag(el.tag)
      ? []
      : [{ type: RAW, value: '</' + el.tag + '>' }];
  return openSegments.concat(childrenSegments, close);
}

function elementToOpenTagSegments(el, state) {
  applyModelTransform(el, state);
  let binding;
  const segments = [{ type: RAW, value: '<' + el.tag }];
  // attrs
  if (el.attrs) {
    segments.push.apply(segments, genAttrSegments(el.attrs));
  }
  // domProps
  if (el.props) {
    segments.push.apply(segments, genDOMPropSegments(el.props, el.attrs));
  }
  // v-bind="object"
  if ((binding = el.attrsMap['v-bind'])) {
    segments.push({ type: EXPRESSION, value: '_ssrAttrs(' + binding + ')' });
  }
  // v-bind.prop="object"
  if ((binding = el.attrsMap['v-bind.prop'])) {
    segments.push({ type: EXPRESSION, value: '_ssrDOMProps(' + binding + ')' });
  }
  // class
  if (el.staticClass || el.classBinding) {
    segments.push.apply(
      segments,
      genClassSegments(el.staticClass, el.classBinding)
    );
  }
  // style & v-show
  if (el.staticStyle || el.styleBinding || el.attrsMap['v-show']) {
    segments.push.apply(
      segments,
      genStyleSegments(
        el.attrsMap.style,
        el.staticStyle,
        el.styleBinding,
        el.attrsMap['v-show']
      )
    );
  }
  // _scopedId
  if (state.options.scopeId) {
    segments.push({ type: RAW, value: ' ' + state.options.scopeId });
  }
  segments.push({ type: RAW, value: '>' });
  return segments;
}

function childrenToSegments(el, state) {
  let binding;
  if ((binding = el.attrsMap['v-html'])) {
    return [{ type: EXPRESSION, value: '_s(' + binding + ')' }];
  }
  if ((binding = el.attrsMap['v-text'])) {
    return [{ type: INTERPOLATION, value: '_s(' + binding + ')' }];
  }
  if (el.tag === 'textarea' && (binding = el.attrsMap['v-model'])) {
    return [{ type: INTERPOLATION, value: '_s(' + binding + ')' }];
  }
  return el.children ? nodesToSegments(el.children, state) : [];
}

function nodesToSegments(children, state) {
  const segments = [];
  for (let i = 0; i < children.length; i++) {
    const c = children[i];
    if (c.type === 1) {
      segments.push.apply(segments, elementToSegments(c, state));
    } else if (c.type === 2) {
      segments.push({ type: INTERPOLATION, value: c.expression });
    } else if (c.type === 3) {
      let text = escape(c.text);
      if (c.isComment) {
        text = '<!--' + text + '-->';
      }
      segments.push({ type: RAW, value: text });
    }
  }
  return segments;
}

function flattenSegments(segments) {
  const mergedSegments = [];
  let textBuffer = '';

  const pushBuffer = function () {
    if (textBuffer) {
      mergedSegments.push(JSON.stringify(textBuffer));
      textBuffer = '';
    }
  };

  for (let i = 0; i < segments.length; i++) {
    const s = segments[i];
    if (s.type === RAW) {
      textBuffer += s.value;
    } else if (s.type === INTERPOLATION) {
      pushBuffer();
      mergedSegments.push('_ssrEscape(' + s.value + ')');
    } else if (s.type === EXPRESSION) {
      pushBuffer();
      mergedSegments.push('(' + s.value + ')');
    }
  }
  pushBuffer();

  return mergedSegments.join('+');
}

/*  */

const createCompiler$1 = createCompilerCreator((template, options) => {
  const ast = parse(template.trim(), options);
  optimize$1(ast, options);
  const code = generate$1(ast, options);
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns,
  };
});

/*  */

const ref$1 = createCompiler$1(baseOptions);
const compile$1 = ref$1.compile;
const compileToFunctions$1 = ref$1.compileToFunctions;

/*  */

exports.parseComponent = parseComponent;
exports.compile = compile;
exports.compileToFunctions = compileToFunctions;
exports.ssrCompile = compile$1;
exports.ssrCompileToFunctions = compileToFunctions$1;
exports.generateCodeFrame = generateCodeFrame;
