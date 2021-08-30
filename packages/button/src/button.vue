<template>
  <button
    class="sx-button"
    :type="nativeType"
    :disabled="buttonDisabled"
    :class="[
      type ? 'sx-button--' + type : '',
      size ? 'sx-button--' + size : '',
      {
        'is-outline': outline,
        'is-round': round,
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-circle': circle,
        'is-glass':glass,
      },
    ]"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "SxButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    outline: Boolean,
    round: Boolean,
    disabled: Boolean,
    size: String,
    loading: Boolean,
    circle:Boolean,
    glass:Boolean,
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    },
  },
  created() {
    // console.log("loading", this.loading);
  },
};
</script>

<style>
</style>