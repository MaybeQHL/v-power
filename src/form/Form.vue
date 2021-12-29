<template>
  <div class="vp-form">
    <van-form
      @submit="onSubmit"
      @failed="onFailed"
      ref="formRef"
      :show-error-message="showErrorMsg"
      :show-error="showError"
      :label-width="labelWidth"
    >
      <slot></slot>
      <div class="vp-form-optionBtns" :class="showCancelBtn && 'hasCancelBtn'">
        <van-button
          class="option-btn"
          :loading="submitLoading"
          type="primary"
          native-type="button"
          v-if="showSubmitBtn"
          :round="btnRound"
          :color="submitBtnColor"
          :disabled="submitBtnDisabled"
          @click="onSubmit"
          >{{ submitBtnText }}</van-button
        >
        <van-button
          class="option-btn"
          v-if="showCancelBtn"
          native-type="button"
          :round="btnRound"
          @click="resetForm"
          :color="cancelBtnColor"
          round
          >{{ cancelBtnText }}</van-button
        >
        <slot name="btmExt"></slot>
      </div>
    </van-form>
  </div>
</template>
<script lang="ts">
/**
 * BaseForm
 * @description Base on van-from
 * @author maybe
 */

import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  PropType,
  isVue2,
  ref,
} from 'vue-demi';

import { createNamespace, mconsole, emitModel } from '../utils';

import { Form, Button, Toast } from 'vant';

const [name, rem, t] = createNamespace('form');

export default defineComponent({
  name,
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
  },
  props: {
    submitBtnText: {
      type: String,
      default() {
        return t('submitBtnText');
      },
    } as any,
    btnRound: {
      type: Boolean,
      default: false,
    },
    submitBtnColor: {
      type: String,
      defualt: '#1989fa',
    },
    submitBtnDisabled: Boolean,
    cancelBtnText: {
      type: String,
      default() {
        return t('cancelBtnText');
      },
    } as any,
    cancelBtnColor: {
      type: String,
      defualt: '#fff',
    },
    submitLoading: Boolean,
    showSubmitBtn: {
      type: Boolean,
      default: true,
    },
    showCancelBtn: {
      type: Boolean,
      default: false,
    },
    showError: {
      type: Boolean,
      default: true,
    },
    showErrorMsg: Boolean,
    // custom error msg way
    customError: {
      type: Boolean,
    },
    // Is open custom validate
    customValidate: Boolean,
    labelWidth: {
      type: [String],
    },
  },
  setup(props, { emit, slots }: any) {
    const state = reactive({
      isVue2,
    });
    const formRef = ref();

    const onFailed = ({ errors }) => {
      console.log('failed', errors);
      if ((props as any).customError) {
        emit('failed', { errors });
      } else {
        Toast.fail({
          // duration: 0,
          message: errors.length > 0 && errors[0].message,
        });
      }
    };
    const onSubmit = async () => {
      try {
        await formRef.value.validate();
        emit('submit');
      } catch (error: any) {
        onFailed({ errors: error });
      }
    };
    const resetValidation = () => {
      formRef.value.resetValidation();
    };
    const validate = (name?: string | string[]) => {
      formRef.value.validate(name);
    };
    const resetForm = () => {
      resetValidation();
      emit('cancel');
    };
    return {
      ...toRefs(state),
      t,
      formRef,
      onFailed,
      onSubmit,
      resetValidation,
      validate,
      resetForm,
    };
  },
});
</script>
