<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo />
      <!-- 滚动组件 -->
      <el-scrollbar height="400px" class="scrollbar">
        <el-menu text-color="white" background-color="#001529">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <span>权限管理</span>
            </template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">456</div>
    <!-- 内容展示区域 -->
    <div class="layout_main">789</div>
  </div>
</template>
<script lang="ts" setup>
import Logo from "./logo/index.vue";
</script>
<style scoped lang="scss">
.layout_container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: red;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: cyan;
    top: 0;
    left: $base-menu-width;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>
