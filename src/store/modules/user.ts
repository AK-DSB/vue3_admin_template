import { reqLogin } from "@/api/user";
import { LoginForm } from "@/api/user/type";
import { defineStore } from "pinia";
import { UserState } from "./types/type";

const useUserStore = defineStore("User", {
  persist: true,
  state: (): UserState => {
    return {
      token: "",
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
  },
  getters: {},
});

export default useUserStore;
