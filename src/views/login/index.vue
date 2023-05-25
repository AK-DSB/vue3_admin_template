<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              type="text"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              show-password
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              :loading="loading"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { User, Lock } from "@element-plus/icons-vue";
import { LoginForm } from "@/api/user/type";
import { reactive, ref } from "vue";
import useUserStore from "@/store/modules/user";
import { ElMessage, ElNotification } from "element-plus";
import { useRouter } from "vue-router";
import { getTime } from "@/utils/time";

const router = useRouter();
const userStore = useUserStore();
const loading = ref<boolean>();
const loginForm = reactive<LoginForm>({
  username: "admin",
  password: "111111",
});

const login = async () => {
  try {
    loading.value = true;
    await userStore.userLogin(loginForm);
    router.push("/");
    ElNotification({
      type: "success",
      title: "欢迎回来",
      message: `HI, ${getTime()}好`,
    });
  } catch (message) {
    ElMessage({
      message: message as string,
    });
  } finally {
    loading.value = false;
  }
};
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
      margin: 20px 0;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
