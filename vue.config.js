module.exports = {
  devServer: {
    port: 8000 //端口
  },
  configureWebpack: {
    resolve: {
      alias: {
        style: "@/assets/style",
        // components: "@/components",
        // views: "@/views"
      }
    }
  }
}