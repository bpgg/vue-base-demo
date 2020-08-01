<template>
  <li>
    <slot name="pre-icon" :user="user"></slot>
    <slot>
      <span>{{title}}</span>
    </slot>
    <slot name="suf-icon" :value="value">🏃</slot>
  </li>
</template>

<script>
export default {
  props: {
    title: String
  },
  data: function() {
    return {
      value: 1,
      user: {
        firstName: "firstName",
        lastName: "lastName",
        name: "name"
      }
    };
  }
};
</script>