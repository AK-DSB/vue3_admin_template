<template>
  <router-view #="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts" setup></script>
<script lang="ts">
export default {
  name: "Main",
};
</script>
<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
