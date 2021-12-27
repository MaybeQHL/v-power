import { isVue2 } from 'vue-demi';

export const emitModel = (
  emit: any,
  event: string,
  modelValue: string,
  val: any
) => {
  if (isVue2) {
    emit(event, val);
  } else {
    emit(`update:${modelValue}`, val);
  }
};
