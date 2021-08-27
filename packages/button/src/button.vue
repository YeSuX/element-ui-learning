<template>
  <button
    class="sx-button"
    :type="nativeType"
    :class="[type ? 'sx-button--' + type : '']"
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
  },
  created() {
    console.log("type",this.type);
  },
};
</script>

<style>
</style>