# Code Parse

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
> Composition API [Doc](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)
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