<template>
  <el-button size="small" icon="Refresh" circle @click="refresh"></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-popover
    placement="top-start"
    title="主题设置"
    :width="300"
    trigger="click"
  >
    <template #default>
      <el-form>
        <el-form-item label="主题颜色">
          <el-color-picker @change="changeStyle" v-model="color" size="small" />
        </el-form-item>
        <el-form-item label="暗黑主题">
          <el-switch
            @change="changeDark"
            v-model="dark"
            inline-prompt
            active-icon="Moon"
            inactive-icon="Sunny"
          />
        </el-form-item>
      </el-form>
    </template>
    <template #reference>
      <el-button size="small" icon="Setting" circle></el-button>
    </template>
  </el-popover>
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
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import useLayOutSettingStore from "@/store/modules/setting";
import useUserStore from "@/store/modules/user";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

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

const color = ref<string>("");
const dark = ref<boolean>(false);

const logout = async () => {
  await userStore.logout();
  await router.push({ name: "Login", query: { redirect: route.path } });
};

const changeDark = () => {
  const html = document.documentElement;
  dark.value ? (html.className = "dark") : (html.className = "");
};

const changeStyle = () => {
  // document.documentElement 是全局变量时
  const el = document.documentElement;
  // const el = document.getElementById('xxx')

  // 获取 css 变量
  getComputedStyle(el).getPropertyValue(`--el-color-primary`);

  // 设置 css 变量
  el.style.setProperty("--el-color-primary", color.value);
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
