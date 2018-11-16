export default {
  changeCity(state, city) {
    state.city = city; //state城市数据改变了
    try {
      localStorage.city = city; //将数据存到localStorage中
    } catch (e) {}
  }
}