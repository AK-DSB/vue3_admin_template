<template>
  <el-button size="small" icon="Refresh" circle @click="refresh"></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img :src="userDetail.avatar" alt="" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userDetail.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import useLayOutSettingStore from "@/store/modules/setting";
import useUserStore from "@/store/modules/user";
import { computed } from "vue";

const settingStore = useLayOutSettingStore();
const userStore = useUserStore();
const userDetail = computed(() => userStore.userDetail);
const refresh = () => {
  settingStore.toggleRefresh();
};

const fullScreen = () => {
  const full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
</script>
<script lang="ts">
export default {
  name: "Setting",
};
</script>
<style scoped lang="scss">
img {
  margin: 0 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>
