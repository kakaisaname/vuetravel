import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";

Vue.use(Vuex);

// let defaultCity = "成都";
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city;
//   }
// } catch (e) {}

export default new Vuex.Store({
  //state里存放公共数据
  state,
  mutations,
  actions: {
    // changeCity(ctx, city) {     //有异步操作或大量数据用这个方法
    //   // console.log(city);
    //   ctx.commit("changeCity", city); //mutations 有commit方法
    // }
  },
  getters: {//当需要根据state中数据算出新的数据的时候 避免数据冗余
    doubleCity(state) {
      return state.city + " " + state.city;
    }
  }
});
