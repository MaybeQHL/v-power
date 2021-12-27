declare module '*.vue' {
  // eslint-disable-next-line
  import { DefineComponent } from 'vue-demi';
  const Component: DefineComponent;
  export default Component;
}
