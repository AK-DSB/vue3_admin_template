<template>
  <el-card>
    <div class="box">
      <img :src="avatar" alt="" class="avatar" />
      <div class="bottom">
        <h3 class="title">{{ getTime() }}好呀{{ username }}</h3>
        <p class="subtitle">硅谷甄选运营平台</p>
      </div>
    </div>
  </el-card>
  <svg-icon class="svg" name="welcome" :width="500" :height="500"></svg-icon>
</template>
<script lang="ts" setup>
import useUserStore from "@/store/modules/user";
import { computed } from "vue";
import { getTime } from "@/utils/time";

const userStore = useUserStore();
const avatar = computed(() => userStore.avatar);
const username = computed(() => userStore.username);
</script>
<style scoped lang="scss">
.box {
  display: flex;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .bottom {
    margin-left: 20px;

    .title {
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 30px;
    }

    .subtitle {
      font-style: italic;
      color: skyblue;
    }
  }
}

.svg {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
