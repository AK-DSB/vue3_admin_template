import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/index.scss";
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "virtual:svg-icons-register";

import axios from "axios";
axios.post("/api/user/login", {
  username: "admin",
  password: "111111",
});

const app: App<Element> = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
// 引入自定义插件对象: 注册整个项目的全局组件
import globalComponent from "@/components";
app.use(globalComponent);
app.mount("#app");
