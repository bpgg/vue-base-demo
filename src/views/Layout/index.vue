<template>
  <div id="layout">
    <el-container>
      <!-- header start -->
      <el-header>
        <Header />
      </el-header>
      <!-- header end -->
      <el-container>
        <!-- aside start -->
        <el-scrollbar class="aside-scrollbar">
          <el-aside :width="asideWidth+'px'" style="border-right:2px solid #f1f1f1">
            <el-menu default-active="/" class="aside-menu" :collapse="isCollapse" :router="true">
              <NavMenu :navMenus="menuData" />
            </el-menu>
          </el-aside>
        </el-scrollbar>
        <!-- aside end -->
        <!-- main start -->

        <Main></Main>

        <!-- main end -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Main from "./components/Main";
import routes from "@/router/routes";
export default {
  name: "Layout",
  components: { Header, NavMenu, Main },
  data() {
    return {
      isCollapse: false,
      asideWidth: 240
    };
  },
  created() {
    this.menuData = routes;
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  padding: 0;
}
</style>