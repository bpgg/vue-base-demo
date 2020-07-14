<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>