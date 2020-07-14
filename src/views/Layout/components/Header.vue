<template>
  <el-header id="header">
    <i
      :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold','default-icon-style']"
      @click="toogleMenu"
    ></i>
    <h1>阿恒的学习demo</h1>
  </el-header>
</template>

<style scoped>
.el-header {
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f1f1f1;
}
</style>
<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    toogleMenu() {
      this.isCollapse = this.isCollapse ? false : true;
    }
  }
};
</script>

