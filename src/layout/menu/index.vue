<template>
  <template v-for="item in props.menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <span>图标</span>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item v-if="!item.meta.hidden" :index="item.children[0].path">
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length > 1">
      <el-sub-menu v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <span>图标</span>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menu-list="item.children" />
      </el-sub-menu>
    </template>
  </template>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import type { RouteRecordRaw } from "vue-router";
const props = defineProps({
  menuList: {
    type: Array<RouteRecordRaw>,
  },
});
onMounted(() => {
  console.log(props.menuList);
});
</script>
<script lang="ts">
export default {
  name: "Menu",
};
</script>
<style scoped lang="scss"></style>
