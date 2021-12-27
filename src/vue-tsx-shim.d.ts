import Vue, { VNode } from 'vue-demi';

type EventHandler = (...args: any[]) => void;

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = Vue;
    interface IntrinsicElements {
      [elem: string]: any;
    }

    // ** Add the following lines to solve the issue **
    interface ElementAttributesProperty {
      $props: {};
    }
  }
}
