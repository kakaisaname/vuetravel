import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index //当用户访问根路径/时，展示index组件
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/city",
      name: "City",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/City/City.vue")
    },
    {
      path: "/detail/:id", //动态路由
      name: "Detail",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/Detail/Detail.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {  //页面切换时始终回到最顶部
    return {x:0,y:0}
  }
});
