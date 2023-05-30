<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="fold ? 'Fold' : 'Expand'" />
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon>
        <component :is="item.meta.icon" />
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
import useLayOutSettingStore from "@/store/modules/setting";
import { computed } from "vue";

const settingStore = useLayOutSettingStore();
const fold = computed(() => settingStore.fold);
const changeIcon = () => {
  settingStore.toggleFold();
};
</script>
<script lang="ts">
export default {
  name: "Breadcrumb",
};
</script>
<style scoped lang="scss"></style>
