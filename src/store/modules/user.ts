import { reqLogin, reqUserInfo } from "@/api/user";
import { LoginForm } from "@/api/user/type";
import { defineStore } from "pinia";
import { UserState } from "./types/type";
import { constantRoute } from "@/router/route";

const useUserStore = defineStore("User", {
  persist: true,
  state: (): UserState => {
    return {
      token: "",
      menuRoutes: constantRoute,
      username: "",
      avatar: "",
    };
  },
  actions: {
    async userLogin(data: LoginForm) {
      const res = await reqLogin(data);
      if (!res?.token) {
        return Promise.reject("用户名或密码错误");
      }
      this.token = res.token;
    },
    async userInfo() {
      const res = await reqUserInfo();
      if (res) {
        this.username = res.checkUser!.username;
        this.avatar = res.checkUser!.avatar;
      }
    },
  },
  getters: {
    userDetail(): { username: string; avatar: string } {
      return {
        username: this.username,
        avatar: this.avatar,
      };
    },
  },
});

export default useUserStore;
