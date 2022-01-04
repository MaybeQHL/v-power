import { initDemoLocale } from './demo-locale';
// import Lazyload from '../../src/lazyload';

initDemoLocale();

import VConsole from 'vconsole';

if (window.location.href.includes('mobile')) {
  // add vconsole
  const vConsole = new VConsole();
}
const { app } = window;
if (app) {
  // app.use(Lazyload, {
  //   lazyComponent: true,
  // });
}

