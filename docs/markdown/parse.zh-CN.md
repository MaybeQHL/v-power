# 代码转换

### Options API
```
// Options API
export default {
  data() {
    return {
      name: 'maybe',
      age:24
    };
  },
  methods: {
    doIt() {
      console.log(`Hello ${this.name}`);
    },
  },
  mounted() {
    this.doIt();
  },
};
```

### Composition  API
> 更多 Composition API 相关请参考 [文档](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)
```
// Composition  API
export default {
  setup() {
    const state = reactive({
      age:24
    })
    const name = ref('John');
    
    const doIt = () => console.log(`Hello ${name.value}`);
    
    onMounted(() => {
      doIt();
    });
    
    return { 
      ...toRefs(state),
      name
    };
  },
};
```