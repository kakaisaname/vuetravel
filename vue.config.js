module.exports = {
  devServer: {
    port: 8000, //端口
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        // changeOrigin: true,
        pathRewrite: {
          "^/api": "/mock"
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        style: "@/assets/style",
        common: "@/components/common",
        // components: "@/components",
        // views: "@/views"
      }
    }
  }
}