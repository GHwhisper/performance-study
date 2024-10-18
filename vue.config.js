const { defineConfig } = require('@vue/cli-service')

let externals = {}
let cdn = {}

// 排除打包，只需要在 build 时排除
const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
  externals = {
    xlsx: 'XLSX',
    echarts: 'echarts'
  }

  cdn = {
    js: [
      'https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js',
      'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
    ]
  }
}

module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.imooc-web.lgdsunday.club',
  //       changeOrigin: true
  //     }
  //   }
  // },
  configureWebpack: {
    externals
  },
  chainWebpack (config) {
    config.plugin('html').tap((args) => {
      // 携带指定的属性到 htmlWebpackPlugin
      args[0].cdn = cdn
      return args
    })
  }
})
