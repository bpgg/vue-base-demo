<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import routes from "@/router/routes";
// import Layout from "@/views/Layout/index.vue";

export default {
  components: {
    // Layout
  },
  data() {
    return {
      isCollapse: false,
      asideWidth: 200
    };
  },
  methods: {
    toogleMenu() {
      this.isCollapse = this.isCollapse ? false : true;
    }
  },
  watch: {
    isCollapse: function(newVal) {
      newVal ? (this.asideWidth = 50) : (this.asideWidth = 200);
    }
  },
  created() {
    this.menuData = routes;
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.app-header {
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f1f1f1;
}
.aside-menu {
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
}
// .el-menu {
//   height: calc(100vh - 60px);
//   overflow-y: auto;
//   overflow-x: hidden;
// }
// .el-menu-vertical-demo::-webkit-scrollbar {
//   display: none; /* 隐藏滚动条 */
// }

.el-scrollbar__wrap {
  overflow-x: hidden;
}
.default-icon-style {
  font-size: 40px;
  padding: 10px 20px 10px 0;
}
</style>
