import router from "@/router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useUserStoreWithOut } from "@/store/modules/user";

const userStore = useUserStoreWithOut();

nprogress.configure({
  easing: "ease", // 动画方式
  speed: 1000, // 递增进度条的速度
  // showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 更改启动时使用的最小百分比
  parent: "body", //指定进度条的父容器
});

router.beforeEach(async (to, from, next) => {
  nprogress.start();
  const token = userStore.token;
  if (token) {
    if (to.name === "Login") {
      next({ path: from.path });
    }
    if (!userStore.username) {
      try {
        await userStore.userInfo();
      } catch (e) {
        next({ name: "Login", query: { redirect: from.path } });
      }
    }
    next();
  } else {
    next();
    // if (to.name === "Login") {
    //   next();
    // } else {
    //   next({ name: "Login", query: { redirect: to.path } });
    // }
  }
});

router.afterEach(async (to, from) => {
  nprogress.done();
});
