<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold }">
      <Logo />
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          text-color="white"
          background-color="#001529"
          router
          :collapse="fold"
        >
          <Menu :menu-list="menuList" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold }">
      <TabBar />
    </div>
    <!-- 内容展示区域 -->
    <div class="layout_main" :class="{ fold }">
      <Main />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

import Logo from "./logo/index.vue";
import Menu from "./menu/index.vue";
import Main from "./main/index.vue";
import TabBar from "./tabbar/index.vue";
import useUserStore from "@/store/modules/user";
import useLayOutSettingStore from "@/store/modules/setting";
const userStore = useUserStore();
const settingStore = useLayOutSettingStore();
const menuList = computed(() => userStore.menuRoutes);
const fold = computed(() => settingStore.fold);
</script>
<script lang="ts">
export default {
  name: "Layout",
};
</script>
<style scoped lang="scss">
.layout_container {
  position: relative;
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0;
    left: $base-menu-width;
    transition: all 0.3s;

    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
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
    transition: all 0.3s;

    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
