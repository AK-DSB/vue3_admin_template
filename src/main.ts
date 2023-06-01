import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/index.scss";
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/theme-chalk/dark/css-vars.css";
import "virtual:svg-icons-register";
import globalComponent from "@/components";
import router from "./router";
import pinia from "./store";

const app: App<Element> = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
import "./permission";
// 引入自定义插件对象: 注册整个项目的全局组件
app.use(globalComponent);
app.use(router);
app.use(pinia);
app.mount("#app");
