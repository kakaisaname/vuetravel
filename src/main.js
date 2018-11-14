import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from 'fastclick';
import "./assets/style/reset.css"; //引入css基础文件
import "./assets/style/border.css";

Vue.config.productionTip = false;
fastClick.attach(document.body);    //解决移动端点击事件300ms延迟

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
