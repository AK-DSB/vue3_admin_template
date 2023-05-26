import SvgIcon from "./SygIcon/index.vue";
import Pagination from "./Pagination/index.vue";
import { Component, DefineComponent } from "vue";
import App from "@/App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

interface GlobalComponents {
  [key: string]: Component & DefineComponent<any, any, any>;
}

const allGlobalComponent: GlobalComponents = { SvgIcon, Pagination };

// 对外暴露插件对象
export default {
  // 必须叫install方法
  install(app: App<Element>) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key]);
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
