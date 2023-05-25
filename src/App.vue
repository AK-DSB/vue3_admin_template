<template>
  <div class="p-4">
    <h1>SVG测试</h1>
    <!-- 测试SVG图标使用 -->
    <svg-icon name="lock" color="yellow" width="100" height="100" />
  </div>
</template>
<script lang="ts" setup>
import request from "@/utils/request";
import { onMounted } from "vue";
onMounted(async () => {
  await request.post("/user/login", {
    username: "admin",
    password: "111111",
  });
});
</script>
<style scoped lang="scss">
div {
  h1 {
    color: red;
  }
}
</style>
