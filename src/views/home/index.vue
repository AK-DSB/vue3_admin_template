<template>
  <div class="p-4">
    <h1>我是一级路由首页</h1>
  </div>
</template>
<script lang="ts" setup>
import useUserStore from "@/store/modules/user";
import { onMounted } from "vue";

const userStore = useUserStore();
onMounted(async () => {
  await userStore.userInfo();
});
</script>
<style scoped lang="less"></style>
