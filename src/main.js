import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import "style/reset.css"; //引入css基础文件
import "style/border.css";
import "style/iconfont.css";

//轮播图
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.config.productionTip = false;
fastClick.attach(document.body); //解决移动端点击事件300ms延迟
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
