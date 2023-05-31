import { reqLogin, reqUserInfo } from "@/api/user";
import { LoginForm } from "@/api/user/type";
import { defineStore } from "pinia";
import { UserState } from "./types/type";
import { constantRoute } from "@/router/route";
import { RouteRecordRaw } from "vue-router";
import store from "@/store";

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
      await this.userInfo();
    },
    async userInfo() {
      const res = await reqUserInfo();
      if (res) {
        this.username = res.checkUser!.username;
        this.avatar = res.checkUser!.avatar;
        this.setMenuRoutes(constantRoute);
      }
    },
    async logout() {
      // this.$reset();
      this.reset();
    },
    reset() {
      this.$state = {
        token: "",
        menuRoutes: [],
        username: "",
        avatar: "",
      };
    },
    setMenuRoutes(routes: RouteRecordRaw[]) {
      this.menuRoutes = routes;
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

export function useUserStoreWithOut() {
  return useUserStore(store);
}
